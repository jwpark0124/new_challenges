import React from 'react';
import teddy_log from '../../assets/teddysum_logo.png';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  const isWep = useMediaQuery({
    query: '(min-width : 768px)',
  });
  const isMobile = useMediaQuery({
    query: '(min-width :0px) and (max-width :767px)',
  });
  return (
    <>
      <div className="flex items-center bg-black text-white pl-16 p-3 sm:pl-28 sm:p-4 md:pl-32  md:p-5  lg:pl-44 lg:p-5 ">
        <ul>
          <button onClick={() => window.open('http://teddysum.ai/', '_blank')}>
            {isWep && <img className="h-7" src={teddy_log} alt="" />}
            {isMobile && <img className="h-4" src={teddy_log} alt="" />}
          </button>

          <li className="text-xs md:text-base">
            (주) 테디썸 | ⓒ{thisYear()} All rights reserved.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
