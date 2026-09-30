import React, { useState, useEffect } from 'react';

function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Digital Clock</h1>

      <h2>{date.toLocaleTimeString()}</h2>

      <h3>{date.toLocaleDateString()}</h3>
    </div>
  );
}

export default App;