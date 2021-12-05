import React from 'react';
import useAxios from 'axios-hooks';
import LeaderboardTable from './LeaderboardTable';
import Fileupload from 'utils/Fileupload';
import ContextBottom from 'components/AppLayoutComponents/ContextBottom';

function LeaderboardList() {
  const [{ data: leaderboardList, loading, error }, refetch] = useAxios({
    url: 'https://52.79.242.208:3194/getLeaderBoardList',
  });
  if (loading) return <p>Loading..</p>;
  console.error('list: ', leaderboardList);
  const leaderboardList2 = leaderboardList.data;

  return (
    <>
      <div className="mb-12">
        <div className="mt-6 mx-4">
          <Fileupload />
          <div className="mt-6 text-base md:text-xl lg:text-2xl font-bold  mx-4 mb-3">
            리더보드
          </div>
          {/* <Fileupload /> */}
          <div className="mb-12 mt-3">
            <table className="table-fixed justify-center items-center text-center w-full">
              <thead className="bg-gray-100 border-t border-black border-opacity-50 not-italic">
                <tr className="text-xs h-8 ">
                  <th className="w-2/10">순위</th>
                  <th className="w-2/10">유저이름</th>
                  <th className="w-3/10 ">점수</th>
                  <th className="w-1/10">제출횟수</th>
                  <th className="w-2/10">제출시간</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {leaderboardList2 &&
                  leaderboardList2.map((leaderboardTable) => {
                    return (
                      <LeaderboardTable
                        leaderboardTable={leaderboardTable}
                        key={leaderboardTable.user_id}
                      />
                    );
                  })}
              </tbody>
            </table>

            {/* <div className="flex flex-wrap justify-around mt-10 text-center">
          <img className="h-6 md:h-10 lg:h-16" src={sit} alt="" />
          <img className="pt-1 lg:pt-4 h-4 md:h-8 lg:h-12" src={nia} alt="" />
          <img className="pt-1 lg:pt-4 h-4 md:h-8 lg:h-12" src={kaist} alt="" />
        </div> */}
            <ContextBottom />
          </div>
        </div>
      </div>
    </>
  );
}

export default LeaderboardList;
