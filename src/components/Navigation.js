import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <nav>
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/teacher"}>Teacher</Link>
        <Link to={"/admin"}>Admin</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default Navigation;


