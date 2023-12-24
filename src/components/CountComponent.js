import React, { useState } from 'react'

const CountComponent = (props) => {
    const [count, setCount] = useState(props.initialCount);
    const incrementCount = () => {
      setCount((count) => count + 1);
    };

    return props.children({ count, incrementCount});
}

export default CountComponent;

