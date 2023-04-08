import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fastapi-server-2.onrender.com');
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);

  console.log(data)

  return (
    <div>
      <h1>My App</h1>
    </div>
  );
}

export default App;
