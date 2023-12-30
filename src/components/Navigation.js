import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <Link to={"/home"}>Home</Link>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
      <NavLink
        to={"/feedback"}
        style={({isActive, isPending}) => ({ color: isActive ? "brown" : "black" })}
      >
        Feedback
      </NavLink>
      <button onClick={() => navigate("/home")}>Go to Home</button>
    </nav>
  );
}

export default Navigation;


