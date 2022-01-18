import React, { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((x) => x + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
