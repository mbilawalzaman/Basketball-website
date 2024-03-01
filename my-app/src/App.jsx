import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-red-500" >
        This is Homepage
      </h1>
      <button onClick={handleToggle} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click me
      </button>
    </div>
  )
}

export default App;
