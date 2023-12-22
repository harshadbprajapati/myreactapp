import React, { useState } from 'react';

const allInterests = ['C', 'C++', 'Java', 'Python', 
      'JavaScript', 'TypeScript', 'GoLang', 'Dart'];
const initialState ={
  firstName: '',
  lastName: '',
  gender: '',
  knowsHindi: false,
  knowsGujarati: false,
  knowsEnglish: false,
  interests: [],
}
const MyForm = () => {
  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.value});
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("First Name: ", event.currentTarget.elements[0].value);
    console.log("Last Name: ", event.currentTarget.lastName.value);
    return false;
  }
  return (
    <div>
      <h1>User Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">First Name: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleChange}
          />
        </div>
        <div>
          Gender:
          <input
            type="radio"
            id="maleGender"
            name="gender"
            value="Male"
            onChange={handleChange}
          />
          <label htmlFor="maleGender">Male</label>
          <input
            type="radio"
            id="femaleGender"
            name="gender"
            value="Female"
            onChange={handleChange}
          />
          <label htmlFor="femaleGender">Female</label>
        </div>

        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Form data</h2>
        <div>First Name: {state.firstName}</div>
        <div>Last Name: {state.lastName}</div>
        <div>Gender: {state.gender}</div>
      </div>
    </div>
  );
}

export default MyForm