import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {

  return (
    <nav>
      <Link to={"/home"}>Home</Link>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
      <NavLink to={"/teacher/1?expertise=C"} state={{visited:"Teacher 1"}}>Teacher 1</NavLink>
      <NavLink to={"/teacher/2?expertise=Python"}>Teacher 2</NavLink>
      <NavLink to={"/teacher/3?expertise=Java"}>Teacher 3</NavLink>
    </nav>
  );
}

export default Navigation;


