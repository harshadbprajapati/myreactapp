import React from "react";
import CountComponent from "./CountComponent";
const DislikeCount = (props) => {
  return (
    <>
      <CountComponent initialCount={props.initialCount}>
        {({ count, incrementCount }) => (
          <>
            <div>Initial Dislikes Count: {props.initialCount}</div>
            <div>
              Dislikes: {count} <button onClick={incrementCount}>Dislike</button>
            </div>
          </>
        )}
      </CountComponent>
    </>
  );
};

export default DislikeCount;


