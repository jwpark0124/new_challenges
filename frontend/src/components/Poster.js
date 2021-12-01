import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Poster({ poster }) {
  const { photo, title, explanation, caption, state, award } = poster;

  return (
    <>
      <div className="bg-white flex ">
        <Link
          to="/competitions/outline"
          className="m-5  w-80 h-80  rounded-lg shadow-md "
        >
          {/* <img src={photo} alt={caption} className="h-40 rounded-t-md" /> */}
          {/* <img src={photo} alt={caption} className="h-40 rounded-t-md" /> */}

          <div className="bg-yellow-300 h-40 rounded-t-md">
            <p className="p-10 text-2xl">클릭하세요</p>
          </div>

          {/* <div>{state}</div> */}
          <div className="m-2 text-base">점검중</div>
          {/* <div className="flex m-3">{title}</div> */}
          <div className="flex m-3">
            2021 한국어 질의응답 AI 경진대회: 비디오 네러티브 질의응답 태스크
          </div>
          {/* <div className="flex m-3">{explanation}</div> */}
          {/* <div className="flex m-3">{explanation}</div> */}

          {/* <div className="flex m-3">{award}</div> */}
        </Link>
      </div>
    </>
  );
}
export default Poster;
