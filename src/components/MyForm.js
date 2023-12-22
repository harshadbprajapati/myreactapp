import React, { useState } from 'react';

const initialState ={
  firstName: '',
  lastName: '',
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

        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Form data</h2>
        <div>First Name: {state.firstName}</div>
        <div>Last Name: {state.lastName}</div>
      </div>
    </div>
  );
}

export default MyForm


