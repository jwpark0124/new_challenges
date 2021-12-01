import React from 'react';
import { Input, Menu } from 'antd';
import { Link } from 'react-router-dom';

const Navbar = ({}) => {
  return (
    <nav
      className="flex justify-between items-center h-16 text-black shadow-sm font-mono fixed min-w-full"
      role="navigation"
    >
      <Link to="/competitions/outline" className=" pl-8">
        AI Hackathon
      </Link>

      <div className="pr-8 md:block hidden"></div>
    </nav>
  );
};

export default Navbar;
