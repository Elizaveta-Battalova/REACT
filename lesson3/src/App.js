import React from 'react';
import List from './components/List';
import Form from './components/Form';



class App extends React.Component {
  state = {
    secret: null,
    value: ''
  }

  passToParent = val => {
    this.setState({secret: val});
  };

  handleChange = (value) => {
    this.setState(prevState => ({
      value: prevState.value + value
    }))
  }

  render() {
    const { secret, value } = this.state;
    
    return (
      <>
        <Form secret={secret} value={value} onChange={this.handleChange}  />
        <List title={value} passToParent={this.passToParent} />
      </>
    );
  }
}

export default App;
