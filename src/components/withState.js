import React, { useState } from "react";
export const withState = (WrappedComponent) => {
  //As HOC returns a new Component, we create
  //a new functional component and return it.
  const HOCComponent = (props) => {
    const [count, setCount] = useState(props.initialCount);
    const incrementCount = () => {
      setCount((count) => count + 1);
    };
    return (
      <div>
        MyFacebook
        <WrappedComponent 
          count={count} 
          incrementCount={incrementCount} 
          {...props}
        />
      </div>
    );
  };
  return HOCComponent;
};

