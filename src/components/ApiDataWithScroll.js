import React, { useRef, useState } from "react";
import axios from "axios";

const ApiDataWithScroll = () => {
  // State variables
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Ref for the textarea element and input URL
  const textareaRef = useRef(null);
  const apiUrlInputRef = useRef(null);

  // Function to fetch data from the API
  const fetchData = async () => {
    setData("");
    try {
      // Get the API URL from the input
      const apiUrl = apiUrlInputRef.current.value;

      // Make an API request using Axios
      const response = await axios.get(apiUrl);

      // Update the state with the fetched data
      setData(JSON.stringify(response.data));

      // Scroll to the bottom of the textarea
      if (textareaRef.current) {
        console.log("Scroll to bottom for textarea");
        textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
      }
    } catch (error) {
      // Handle errors and update the error state
      setError(error);
    }
    apiUrlInputRef.current.focus();
  };

  // JSX to render
  return (
    <div>
      {/* Input for API URL */}
      <div>
        <label htmlFor="apiUrl">API URL: </label>
        <input type="text" id="apiUrl" ref={apiUrlInputRef} style={{width: "500px"}} />
      </div>

      {/* Button to trigger API call */}
      <button onClick={fetchData}>Fetch Data</button>

      {data ? (
        <div>
          {/* Render textarea with the fetched data */}
          <textarea
            ref={textareaRef}
            value={data}
            readOnly
            style={{ width: "500px", height: "200px" }}
          />
        </div>
      ) : // Render loading state or error message
      error ? (
        <p>Error: {error.message}</p>
      ) : (
        <p>No data fetched yet.</p>
      )}
    </div>
  );
};

export default ApiDataWithScroll;
