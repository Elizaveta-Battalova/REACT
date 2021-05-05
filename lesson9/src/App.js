import React from 'react';
import { connect } from "react-redux";
import store from "./store/index"

class App extends React.Component {
  handleClick = sign => () =>{
const {incrementCount, decrementCount} = this.props

    sign === "+" ?
    incrementCount(2) :
    decrementCount(2);
  };

  render() {
    const {count} = this.props;

    return(
      <div>
        <h1>Redux App {count}</h1>
        <button onClick={this.handleClick("+")}>+</button>
        <button onClick={this.handleClick("-")}>-</button>
      </div>
    );
  };
}

const mapStateToProps = (store) => ({
  count: store.count
});
  

const mapDispatchToProps = (dispatch) => ({
    incrementCount: (payload) => {
      dispatch ({
        type:"INCREMENT",
        payload
        })
        },
  
    decrementCount: (payload) => {
      dispatch ({
        type:"DECREMENT",
        payload
      })
    },
  })


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
