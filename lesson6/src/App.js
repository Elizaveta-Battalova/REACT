import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import HomeWork1 from "./components/Homework1"
import HomeWork1 from "./components/Homework2"
import HomeWork1 from "./components/Homework3"


class App extends React.Component{
    render() {
        return (
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/HomeWork1">Homework1</Link>
                  </li>
                  <li>
                    <Link to="/HomeWork2">HomeWork2</Link>
                  </li>
                  <li>
                    <Link to="/HomeWork3">HomeWork3</Link>
                  </li>
                </ul>
              </nav>

              <Switch>
                <Route path="/HomeWork1">
                  <HomeWork1 />
                </Route>
                <Route path="/HomeWork2">
                  <HomeWork2 />
                </Route>
                <Route path="/HomeWork3">
                  <HomeWork3 />
                </Route>
              </Switch>
            </div>
          </Router>
        );
      }
}
    

export default App;
