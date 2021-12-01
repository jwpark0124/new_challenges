import BaselineContexts from '../CompetitionsContexts/BaselineContexts';
import React, { useState } from 'react';
import Poster from './Poster';

import ContextTop from 'components/AppLayoutComponents/ContextTop';

function Baselineground() {
  // const [{ data: postList, loading, error }, refetch] = useAxios({
  //   url: 'http://localhost:8000/api/posts/',
  // });
  // const [isListHover, setIsListHover] = useState(false);
  // const [isListHover2, setIsListHover2] = useState(false);
  // const [isListHover3, setIsListHover3] = useState(false);
  // const [isListHover4, setIsListHover4] = useState(false);

  // const isWep = useMediaQuery({
  //   query: '(min-width : 768px) and (max-width :1920px)',
  // });
  // const isMobile = useMediaQuery({
  //   query: '(min-width :0px) and (max-width :767px)',
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
        {/* <div className="bg-white p-2 px-auto w-3/4 border-solid border-b border-opacity-20 border-gray-500">
          <div className="flex justify-center space-x-2 sm:space-x-8 md:space-x-20">
            <div className="">
              <Link to="/competitions/outline">
                {isWep && (
                  <img
                    className="w-12 h-5"
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
              </Link>
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
                    onMouseOver={() => setIsListHover2(true)}
                    onMouseOut={() => setIsListHover2(false)}
                    src={isListHover3 ? dataHover : data}
                    alt=""
                  />
                )}
                {isMobile && (
                  <img
                    className="w-16 h-4"
                    onMouseOver={() => setIsListHover2(true)}
                    onMouseOut={() => setIsListHover2(false)}
                    src={isListHover3 ? dataHover : data}
                    alt=""
                  />
                )}
              </Link>
            </div>
            <div>
              <Link to="/competitions/leaderboard">
                {isWep && (
                  <img className="w-25 h-5" src={leaderboard2} alt="" />
                )}
                {isMobile && (
                  <img className="w-14 h-4" src={leaderboard} alt="" />
                )}
              </Link>
            </div>
          </div>
        </div> */}
        <div className="bg-white w-3/4  flex flex-col rounded-b-3xl mb-20">
          <BaselineContexts />

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

export default Baselineground;
