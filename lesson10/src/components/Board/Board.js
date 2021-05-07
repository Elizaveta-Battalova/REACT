import React from 'react';
import { connect } from "react-dom";

import { dataSelector } from "../../redux/data/selectors";

import "./styles.css";


class Board extends React.Component {

  render() {
      const { data } = this.props;
      console.log(data)
    return <div className = "board">board</div>
  }
}

const mapStateToProps = (state) => ({
    data: dataSelector(state).data;
})


export default connect(mapStateToProps)(Board);
