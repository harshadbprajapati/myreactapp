import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to={"/home"}>Home</Link>
      <Link to={"/about"}>About</Link>
    </nav>
  )
}

export default Navigation;


