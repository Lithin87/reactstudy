import React, { useState } from 'react';

function MultiLineText() {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2>Console Output</h2>
      <textarea
        value={text}
        onChange={handleInputChange}
        rows={6} // You can adjust the number of rows
        cols={50} // You can adjust the number of columns
      />
      <p>Current Text:</p>
      <pre>{text}</pre>
    </div>
  );
}

export default MultiLineText;
