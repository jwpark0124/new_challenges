import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Ground = () => {
  const [choice, setChoice] = useState('');

  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <div className="bg-blue-200 w-2/3 h-1/3 flex flex-col justify-center items-center rounded-3xl ">
        <h1 className="lg:text-8xl md:text-6xl sm:text-4xl text-2xl font-black mb-14">
          Competition
        </h1>
        <Link
          className="py-4 px-9 bg-yellow-300 rounded-full text-3xl hover:bg-yellow-500
       transition duration-300 ease-in-out flex items-center animate-bounce w-2/4 justify-center h-auto"
          to="/"
        >
          Challenge Now
        </Link>
      </div>
      <div className="text-xl flex mt-20 items-center">
        <button
          onClick={handleChange}
          className="py-3 px-9 border-solid border-2 border-gray-100 bg-yellow-300 rounded-l-xl text-xl hover:bg-yellow-300 transition flex items-center"
        >
          전체
        </button>
        <button className="py-3 px-9 border-solid border-2 border-gray-100 bg-gray-50  text-xl hover:bg-yellow-300 transition flex items-center">
          진행
        </button>
        <button className="py-3 px-9 border-solid border-2 border-gray-100 bg-gray-50  text-xl hover:bg-yellow-300 transition flex items-center">
          예정
        </button>
        <button className="py-3 px-9 border-solid border-2 border-gray-100 bg-gray-50 rounded-r-xl text-xl hover:bg-yellow-300 transition flex items-center">
          종료
        </button>
      </div>
    </div>
  );
};

export default Ground;
