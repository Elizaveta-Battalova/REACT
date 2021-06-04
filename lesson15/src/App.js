import React, { useState, useEffect } from 'react';
import './Square.css';
// import { BrouserRouter as Router, Switch, Route } from "react-router-dom;";
import Form from "./Form/index";


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
      {/* <Router>
        <Switch>
          <Route path="signIn"/>
          <Route path="signUn"/>
          <Route path="/"/>
        </Switch>
      </Router> */}
      <Form/>
    </div>
  );
}

export default App;