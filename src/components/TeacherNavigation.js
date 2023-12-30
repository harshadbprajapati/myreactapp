import React from 'react';
import { Link } from 'react-router-dom';

const TeacherNavigation = () => {
  return (
    <>
      <h2>Teacher's Dashboard</h2>
      <nav>
        <Link to={"subjects"}>Subjects</Link>
        <Link to={"lectures"}>Lectures</Link>
        <Link to={"plan"}>Plan</Link>
      </nav>
    </>
  );
}

export default TeacherNavigation;


