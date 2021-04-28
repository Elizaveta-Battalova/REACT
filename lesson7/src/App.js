import React from 'react';

import DataContext from './context/DataContext';

import Data from "./context/DataContext";

class App extends React.Component {
  render() {
    return (
      <DataContext.Provider
      value={{
      name: "admin",
      status: 310,
    }}>
      <div>App</div>
      <Data/>
    </DataContext.Provider>
    );
  }
}

export default App;
