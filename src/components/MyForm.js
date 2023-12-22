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
    const value = event.target.type === "checkbox" ? 
      event.target.checked : 
      event.target.value;
    setState({...state, [event.target.name]: value});
  }

  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );

    setState({
      ...state,
      interests: selectedOptions,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data: ",state);
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
            value={state.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={state.lastName}
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
            checked={state.gender === "Male"}
            onChange={handleChange}
          />
          <label htmlFor="maleGender">Male</label>
          <input
            type="radio"
            id="femaleGender"
            name="gender"
            value="Female"
            checked={state.gender === "Female"}
            onChange={handleChange}
          />
          <label htmlFor="femaleGender">Female</label>
        </div>
        <div>
          Known Languages:
          <input
            type="checkbox"
            id="hindi"
            name="knowsHindi"
            checked={state.knowsHindi}
            onChange={handleChange}
          />
          <label htmlFor="hindi">Hindi</label>
          <input
            type="checkbox"
            id="gujarati"
            name="knowsGujarati"
            checked={state.knowsGujarati}
            onChange={handleChange}
          />
          <label htmlFor="gujarati">Gujarati</label>
          <input
            type="checkbox"
            id="english"
            name="knowsEnglish"
            checked={state.knowsEnglish}
            onChange={handleChange}
          />
          <label htmlFor="english">English</label>
        </div>

        <div>
          <label htmlFor="interests">Interests: </label>
          <select
            multiple
            name="interests"
            id="interests"
            value={state.interests}
            onChange={handleSelectChange}
          >
            {allInterests.map((interest) => (
              <option value={interest} key={interest}>
                {interest}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Form data</h2>
        <div>First Name: {state.firstName}</div>
        <div>Last Name: {state.lastName}</div>
        <div>Gender: {state.gender}</div>
        <div>Knows Hindi: {"" + state.knowsHindi}</div>
        <div>Knows Gujarati: {"" + state.knowsGujarati}</div>
        <div>Knows English: {"" + state.knowsEnglish}</div>
        <div>Interest: {"" + state.interests}</div>
      </div>
    </div>
  );
}

export default MyForm;


