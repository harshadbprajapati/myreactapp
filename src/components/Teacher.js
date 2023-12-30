import React from 'react'
import { useParams } from 'react-router-dom'

const teacherInformation = [
  { id: 1, name: "Tom Cruise", age: 52 },
  { id: 2, name: "Will Smith", age: 48 },
  { id: 3, name: "Keanu Reeves", age: 51 },
];
const Teacher = () => {
  const params = useParams();
  console.log("params=", params);
  const currentTeacher = teacherInformation.find(
    (teacher) => teacher.id === parseInt(params.teacherId)
  );
  console.log("currentTeacher=", currentTeacher);

  return (
    <div>
      <h1>Information about Teacher {params.teacherId}</h1>
      {currentTeacher && (
        <>
          <p>Teacher Name: {currentTeacher.name}</p>
          <p>Teacher Age: {currentTeacher.age}</p>
        </>
      )}
    </div>
  );
}

export default Teacher;

