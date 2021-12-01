import React from 'react';
import useAxios from 'axios-hooks';
import LeaderboardTable from './LeaderboardTable';
import Fileupload from 'utils/Fileupload';
import ContextBottom from 'components/AppLayoutComponents/ContextBottom';

function LeaderboardList() {
  // const [{ data: leaderboardList, loading, error }, refetch] = useAxios({
  //   url: 'http://52.79.242.208:3194/getLeaderBoardList',
  // });
  // if (loading) return <p>Loading..</p>;
  // console.error('list: ', leaderboardList);
  // const leaderboardList2 = leaderboardList.data;

  return (
    <>
      <div className="mb-12 m-auto mt-20">
        <div className="mb-12 text-2xl">곧 공개됩니다.</div>
      </div>
    </>
  );
}

export default LeaderboardList;
