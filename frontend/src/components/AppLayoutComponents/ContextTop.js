import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import outline2 from '../../assets/outline2.png';
import outline from '../../assets/outline.png';
import outlineHover from '../../assets/btn1_outline.png';
import dataHover from '../../assets/btn2_data.png';
import baselineHover from '../../assets/btn3_baseline.png';
import leaderboardHover from '../../assets/btn4_leaderboard.png';
import data2 from '../../assets/data2.png';
import data from '../../assets/data.png';
import baseline2 from '../../assets/baseline2.png';
import baseline from '../../assets/baseline.png';
import leaderboard2 from '../../assets/leaderboard2.png';
import leaderboard from '../../assets/leaderboard.png';
import Fileupload from 'utils/Fileupload';

function ContextTop(props) {
  const [isListHover, setIsListHover] = useState(false);
  const [isListHover2, setIsListHover2] = useState(false);
  const [isListHover3, setIsListHover3] = useState(false);
  const [isListHover4, setIsListHover4] = useState(false);

  // const [clicked, setClicked] = useState(true);

  // const selected = () => {
  //   console.log('선택됨');
  // };
  const isWep = useMediaQuery({
    query: '(min-width : 768px) ',
  });
  const isMobile = useMediaQuery({
    query: '(min-width :0px) and (max-width :767px)',
  });

  return (
    <>
      <div className="text-xl flex flex-wrap mt-10 p-1 justify-center items-center bg-green-600 w-3/4 rounded-t-2xl">
        진 행 중
      </div>
      <div className="bg-white p-2 px-auto w-3/4 border-solid border-b border-opacity-20 border-gray-500">
        <div className="flex justify-center space-x-2 sm:space-x-8 md:space-x-20">
          <div className="">
            <a href="http://ai-challenge.labelon.kr/">
              {isWep && (
                <img
                  className="w-12 h-5"
                  // onClick={selectedButton}
                  onMouseOver={() => setIsListHover(true)}
                  onMouseOut={() => setIsListHover(false)}
                  src={isListHover ? outlineHover : outline2}
                  alt=""
                />
              )}
              {isMobile && (
                <img
                  className="w-8 h-4"
                  onMouseOver={() => setIsListHover(true)}
                  onMouseOut={() => setIsListHover(false)}
                  src={isListHover ? outlineHover : outline}
                  alt=""
                />
              )}
            </a>
          </div>
          <div>
            <Link to="/competitions/dataset">
              {isWep && (
                <img
                  className="w-16 h-5"
                  onMouseOver={() => setIsListHover2(true)}
                  onMouseOut={() => setIsListHover2(false)}
                  src={isListHover2 ? dataHover : data2}
                  alt=""
                />
              )}
              {isMobile && (
                <img
                  className="w-10 h-4"
                  onMouseOver={() => setIsListHover2(true)}
                  onMouseOut={() => setIsListHover2(false)}
                  src={isListHover2 ? dataHover : data}
                  alt=""
                />
              )}
            </Link>
          </div>
          <div>
            <Link to="/competitions/baseline">
              {isWep && (
                <img
                  className="w-27 h-5"
                  onMouseOver={() => setIsListHover3(true)}
                  onMouseOut={() => setIsListHover3(false)}
                  src={isListHover3 ? baselineHover : baseline2}
                  alt=""
                />
              )}
              {isMobile && (
                <img
                  className="w-16 h-4"
                  onMouseOver={() => setIsListHover3(true)}
                  onMouseOut={() => setIsListHover3(false)}
                  src={isListHover3 ? baselineHover : baseline}
                  alt=""
                />
              )}
            </Link>
          </div>
          <div>
            <a href="http://ai-challenge.labelon.kr/competitions/leaderboard">
              {isWep && (
                <img
                  className="w-25 h-5"
                  onMouseOver={() => setIsListHover4(true)}
                  onMouseOut={() => setIsListHover4(false)}
                  src={isListHover4 ? leaderboardHover : leaderboard2}
                  alt=""
                />
              )}
              {isMobile && (
                <img
                  className="w-14 h-4"
                  onMouseOver={() => setIsListHover4(true)}
                  onMouseOut={() => setIsListHover4(false)}
                  src={isListHover4 ? leaderboardHover : leaderboard}
                  alt=""
                />
              )}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContextTop;
