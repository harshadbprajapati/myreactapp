import React from "react";
import { withState } from "./withState";
export const DislikeCount = (props) => {
  return (
    <>
      <div>Initial Dislikes = {props.initialCount}</div>
      <div>
        Dislikes: {props.count}{" "}
        <button onClick={props.incrementCount}>Dislike</button>
      </div>
    </>
  );
};
const EnhancedDisLikeCount = withState(DislikeCount);
EnhancedDisLikeCount.displayName = "EnhancedDisLikeCount";
export default EnhancedDisLikeCount;


