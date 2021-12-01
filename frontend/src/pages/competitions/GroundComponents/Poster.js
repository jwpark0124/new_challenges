// import { Picture } from 'react-responsive-picture';
// import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
import { MediaQuery, useMediaQuery } from 'react-responsive';

import groundWeb from '../../../assets/ground_web.png';
import groundMobile from '../../../assets/ground_mobile.png';

function Poster({ poster }) {
  // const { title, explanation, host, period1, period2, award, Participant } =
  //   poster;
  const isWep = useMediaQuery({
    query: '(min-width : 768px)',
  });
  const isMobile = useMediaQuery({
    query: '(min-width :0px) and (max-width :767px)',
  });

  return (
    <>
      {isWep && <img className="w-3/4 p-6 mt-28" src={groundWeb} alt="" />}
      {isMobile && (
        <img className="w-3/4 p-6 mt-28" src={groundMobile} alt="" />
      )}
    </>
  );
}
export default Poster;
