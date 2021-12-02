from flask import Flask, render_template, request
import requests
import json
from flask_cors import CORS
import pymysql
import datetime
import copy
import constant
import datetime
from sklearn.metrics import f1_score

# 데이터 베이스 정보 및 포트포워딩 작업
dialogDBHost = constant.dialogDBHost
dialogDBPort = constant.dialogDBPort
dialogDBUserName = constant.dialogDBUserName
dialogDBPassword = constant.dialogDBPassword
dialogDBDatabase = constant.dialogDBDatabase
dialogDBCharset = constant.dialogDBCharset

app = Flask(__name__)
CORS(app)

# app.config['SECRET_KEY'] = 'BCODE_Flask'
# socketio = SocketIO(app)


def jsonload(fname, encoding="utf-8"):
    with open(fname, encoding=encoding) as f:
        j = json.load(f)
    return j
gold_data = jsonload('gold.json')
# 문제 푸는 함수
def calcScore(answer_list):
    gold_list = []
    pred_list = []
    for key, label in answer_list.items():
        gold = int(gold_data[key])
        pred = int(label)
        gold_list.append(gold)
        pred_list.append(pred)
    score = f1_score(gold_list, pred_list, average='macro')
    return score

@app.route("/")
def main():
    return render_template("index.html")

# 테스트
@app.route("/test", methods=['GET', 'POST'])
def test():
    print('test')
    data = request.data.decode('utf-8')
    print(data)

    new_data = {
        'data': 'test'
    }
    return new_data

# 리더보드 데이터 
@app.route("/getLeaderBoardList", methods=['GET', 'POST'])
def getLeaderBoardList():
    print('getLeaderBoardList')
    # constant의 연결 정보를 통해 connect (주요 파라미터)
    conn = pymysql.connect(host=dialogDBHost, port=dialogDBPort, user=dialogDBUserName, passwd=dialogDBPassword,
                           db=dialogDBDatabase,
                           charset=dialogDBCharset)
                        # DictCursor을 통해 딕테이션 형태로 출력 * 원래는 튜플 기반으로 나옴
    curs = conn.cursor(pymysql.cursors.DictCursor)
    # 
    sql = "SELECT user_id, submit_date, score, (SELECT count(user_id) from SUBMIT where user_id=s.user_id) as submit_count FROM SUBMIT s WHERE s.score = (SELECT max(score) FROM SUBMIT WHERE user_id=s.user_id) GROUP BY user_id ORDER BY score DESC, submit_date ASC;"
    data = {
        'data': []
    }
    try:
        # sql 을 실행
        curs.execute(sql)
        # fetch 해준다.
        result = curs.fetchall()
        print(result)
        # data 안에 result를 담아준다.
        data = {
            'data': result
        }

    except Exception as e:
        print(e)

    curs.close()
    conn.close()

    rank = 1
    for d in data['data']:
    	d['rank'] = rank
    	rank += 1

    return data


@app.route("/uploadfile", methods=['GET', 'POST'])
def uploadfile():
    print('uploadfile')
    conn = pymysql.connect(host=dialogDBHost, port=dialogDBPort, user=dialogDBUserName, passwd=dialogDBPassword,
                           db=dialogDBDatabase,
                           charset=dialogDBCharset)
    curs = conn.cursor()
    print('request.files', request.files)
    data = request.data.decode('utf-8')
    file = request.files['userfile']
    f_name = file.filename
    print('file_name: ', f_name)
    print('file: ', file)
    
    print('data: ', data)

    user_id = 'TeddySum'
    # if 'user_id' in data:
    # 	user_id = data['user_id']

    user_id = f_name.split('.')[0]

    now = datetime.datetime.now()
    submit_time = now.strftime('%Y-%m-%d %H:%M:%S')

    file_name = user_id + '_' + submit_time + '.json'
    file_name = file_name.replace(' ', '_')
    file_path = './user_submit/' + file_name
    file.save(file_path)

    data_list = jsonload(file_path)

    score = calcScore(data_list)

    sql = "INSERT INTO SUBMIT(user_id, submit_date, score, file_name) VALUES(%s, %s, %s, %s)"
    try:
        curs.execute(sql,
                     (user_id, submit_time, score, file_name))

    except Exception as e:
        print(e)

    curs.close()
    conn.commit()
    conn.close()

    return 'success'


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=3194)
