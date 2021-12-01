import React from 'react';
import nia from '../../../src/assets/NIA.jpg';
import kaist from '../../../src/assets/한국판뉴딜.png';
import sit from '../../../src/assets/과학기술정보통신부.jpg';

function ContextBottom(props) {
  return (
    <div>
      <div className="flex flex-wrap justify-around mt-10 text-center">
        <img className="h-6 md:h-10 lg:h-16" src={sit} alt="" />
        <img className="pt-1 lg:pt-4 h-4 md:h-8 lg:h-12" src={nia} alt="" />
        <img className="pt-1 lg:pt-4 h-4 md:h-8 lg:h-12" src={kaist} alt="" />
      </div>
    </div>
  );
}

export default ContextBottom;
