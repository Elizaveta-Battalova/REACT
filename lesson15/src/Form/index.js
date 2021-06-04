import React from 'react';

class Form extends React.Component {

  handleChange = (e) => {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <form>
        <input onChange={this.handleChange} value={this.props.value} placeholder="email" />
        <input onChange={this.handleChange} value={this.props.value} placeholder="password"/>
        <button>send</button>
      </form>
    );
  }
}

export default Form;
