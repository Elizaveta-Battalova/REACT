import React, { useState, useEffect } from 'react';
import './Square.css';
import Square from "./Square";


import { database } from "./firebase";

const App = () => {
  const[data, setData] = useState({});

  useEffect (() => {
    database()
    .ref()
    .on("value", (snapshot) => {
      setData(snapshot.val());
    });
  }, []);

  return (
    <div className="App">
      <Square/>
    </div>
  );
}

export default App;