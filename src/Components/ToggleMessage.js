import { useState } from "react";
import React from 'react';

function ToggleMessage() {

    const [isToggled, setIsToggled] = useState(false);

  const toggleMessage = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
           <div>
      <h2>Conditional Rendering</h2>

      {isToggled ? (
        <p>Hi Welcome !!!</p>
      ) : (
        <p>Thank you For Visit!</p>
      )}
      <button onClick={toggleMessage}>Toggle Message</button>
    </div>
    </>
  )
}

export default ToggleMessage