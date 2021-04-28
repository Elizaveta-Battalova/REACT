import React from 'react';

import DataContext from './context/DataContext';


class DataContextProvider extends React.Component {

    state = {
        data: [],
    };

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

export default DataContextProvider;
