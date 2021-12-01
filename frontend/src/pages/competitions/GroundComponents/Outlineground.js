import OutlineContexts from '../CompetitionsContexts/OutlineContexts';
import React from 'react';
import Poster from './Poster';
import ContextTop from 'components/AppLayoutComponents/ContextTop';

function Outlineground() {
  // const [{ data: postList, loading, error }, refetch] = useAxios({
  //   url: 'http://localhost:8000/api/posts/',
  // });

  return (
    <>
      <div className="bg-gray-100 flex flex-col flex-wrap justify-center items-center">
        <Poster />
        {/* {postList &&
          postList.map((poster) => {
            return <Poster poster={poster} key={poster.user} />;
          })} */}
        <ContextTop />
        <div className="bg-white w-3/4  flex flex-col rounded-b-3xl mb-20">
          <OutlineContexts />
          {/* {postList &&
            postList.map((koreanQnAChallenges) => {
              return (
                <KoreanQnAChallenges
                  koreanQnAChallenges={koreanQnAChallenges}
                  key={koreanQnAChallenges.user}
                />
              );
            })} */}
        </div>
      </div>
    </>
  );
}

export default Outlineground;
