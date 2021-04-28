import React from "react";

import {Link} from "react-router-dom";

class HomeWork2 extends React.Component {
    render() {
        return (
                <Switch>
                    <Link to="/HomeWork1">HomeWork1</Link>
                    <Link to="/HomeWork2">HomeWork2</Link>
                    <Link to="/HomeWork3">HomeWork3</Link>
                    <Link to="/HomeWork4">HomeWork4</Link>
                    <Link to="/HomeWork5">HomeWork5</Link>
                </Switch>
        );
    }
}

export default HomeWork2;