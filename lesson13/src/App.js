import React from 'react';


class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Крестики-Нолики</h1>
        <Board />
        <Square />
      </div>
    );
  }
}


export default App;
