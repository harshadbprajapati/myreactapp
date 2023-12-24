import React from "react";
import { withState } from "./withState";
const LikeCount = (props) => {
  return (
    <>
      <div>Initial Likes = {props.initialCount}</div>
      <div>
        Likes: {props.count}{" "}
        <button onClick={props.incrementCount}>Like</button>
      </div>
    </>
  );
};
const EnhancedLikesCount = withState(LikeCount);
EnhancedLikesCount.displayName = "EnhancedLikesCount";
export default EnhancedLikesCount;


