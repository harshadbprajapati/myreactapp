import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiData = () => {
  // State variables
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // useEffect
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        // Make an API request using Axios
        const response = await axios.get("https://jsonplaceholder.typicode.com/photos/1");
        // const response = await axios.get("https://jsonplaceholder.typicode.coma/photos/1");

        // Update the state with the fetched data
        setData(response.data);
      } catch (error) {
        // Handle errors and update the error state
        setError(error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array means the effect runs only once, similar to componentDidMount

  // JSX to render
  return (
    <div>
      {data ? (
        // Render your component with the fetched data
        <div>
          <h1>{data.title}</h1>
          <img src={data.url} width="300" alt={data.title} />
        </div>
      ) : // Render loading state or error message
      error ? (
        <p>Error: {error.message}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ApiData;
