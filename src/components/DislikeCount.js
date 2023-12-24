import React from "react";
import CountComponent from "./CountComponent";
const DislikeCount = (props) => {
  return (
    <>
      <CountComponent
        initialCount={props.initialCount}
        render={({ count, incrementCount }) => (
          <>
            <div>Initial Dislikes Count: {props.initialCount}</div>
            <div>
              Dislikes: {count} <button onClick={incrementCount}>Dislike</button>
            </div>
          </>
        )}
      />
    </>
  );
};

export default DislikeCount;


