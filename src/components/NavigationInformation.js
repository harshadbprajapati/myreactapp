import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom';


const NavigationInformation = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("location: " , location);
  const expertise = searchParams.get("expertise");

  return (
    <div>
      <h1>Navigation Information</h1>
      <p>Location object: {JSON.stringify(location)}</p>
      <p>Search Param: expertise: {JSON.stringify(expertise)}</p>
    </div>
  );
}

export default NavigationInformation;

