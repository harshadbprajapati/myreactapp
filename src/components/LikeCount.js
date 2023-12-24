import React from "react";
import CountComponent from "./CountComponent";
const LikeCount = (props) => {
  return (
    <>
      <CountComponent
        initialCount={props.initialCount}
        render={({ count, incrementCount }) => (
          <>
            <div>Initial Likes Count: {props.initialCount}</div>
            <div>
              Likes: {count} <button onClick={incrementCount}>Like</button>
            </div>
          </>
        )}
      />
    </>
  );
};

export default LikeCount;

