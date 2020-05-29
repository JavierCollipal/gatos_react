import React, { useState } from "react";

const ButtonAndMessage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Aumentar estado</button>
        <button onClick={() => setCount(count - 1)}>Disminuir estado</button>
      <p>{count} incremento total del estado</p>
    </div>
  );
};

export default ButtonAndMessage;
