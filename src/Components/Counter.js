import React from 'react';
import { useState } from 'react';

function Counter() {
  
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
      };
    
          const decrease = () => {
        setCount(count - 1);
      };

  

  return (
<>
<div>
      <h1>Counter = {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      {/* <button onClick={clear}>clear</button> */}
    </div>
</>
  )
}

export default Counter;