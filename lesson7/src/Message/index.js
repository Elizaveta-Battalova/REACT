import React from 'react';

import { DataContext } from './context/DataContext'

class Message extends React.Component {
  render() {
    return 
      <DataContext><div>Message</div></DataContext>
  }
}

export default Message;