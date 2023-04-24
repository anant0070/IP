import React, { useState } from 'react';

function Textbox() {
  const [text, setText] = useState('');

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <textarea value={text} onChange={handleChange} />
    </div>
  );
}

export default Textbox;
