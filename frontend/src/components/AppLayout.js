import React, { useState } from 'react';
import Navbar from './AppLayoutComponents/Navbar';
import Footer from './AppLayoutComponents/Footer';
import Ground from './AppLayoutComponents/Ground';
// import useAxios from 'axios-hooks';
import Poster from './Poster';

function AppLayout({}) {
  // const [{ data: postList, loading, error }, refetch] = useAxios({
  //   url: 'http://localhost:8000/api/posts/',
  // });

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Ground />
      <div className="flex justify-center flex-wrap	">
        <Poster />
        {/* {postList &&
          postList.map((poster) => {
            return <Poster poster={poster} key={poster.user} />;
          })} */}
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
