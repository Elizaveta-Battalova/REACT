import React from "react";
import { ACTION_GET_DATA } from "../ducks/data";

import utils from "../store/utils";


class Data extends React.Component {
    render() {
        return <p>Data</p>;
    }
}

const mapStateToProps = (store) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default utils.connect(mapStateToProps, mapDispatchToProps)(Data);