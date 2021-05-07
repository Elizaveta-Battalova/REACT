import React from 'react';
import Container from "./components/Container";
import Form from "./components/Form";


class App extends React.Component {

  render() {
    return (
      <Container>
        <h1>My app</h1>
        <Form/>
      </Container>
    );
  }
}


export default App;
