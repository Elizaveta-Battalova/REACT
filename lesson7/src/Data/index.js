import React from 'react';

import DataContext from './context/DataContext';

import Message from '..Message/index.js';

class Data extends React.Component {
  render () {
    return (
    <DataContext.Consumer>
        {(props) => <div>{props.name}</div>}
        </DataContext.Consumer>
    );
  }
}



export default Data;