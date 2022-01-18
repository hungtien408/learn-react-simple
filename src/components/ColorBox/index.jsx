import React, { useState } from 'react';

function ColorBox(props) {
  const [color, setColor] = useState('white');
  return (
    <div>
      <p>{color}</p>
      <button onClick={() => setColor('black')}>Change to black</button>
      <button onClick={() => setColor('white')}>Change to white</button>
    </div>
  );
}

export default ColorBox;
