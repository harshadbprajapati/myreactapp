import React from 'react';
import { Link } from 'react-router-dom';

const TeacherNavigation = () => {
  return (
    <>
      <h2>Teacher's Dashboard</h2>
      <nav>
        <Link to={"/teacher/subjects"}>Subjects</Link>
        <Link to={"/teacher/lectures"}>Lectures</Link>
        <Link to={"/teacher/plan"}>Plan</Link>
      </nav>
    </>
  );
}

export default TeacherNavigation;


