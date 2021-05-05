import React from 'react';
import Form from "./components/index";
import dataWithChildren from "./hocs/withItemsData";

const App = (props) => {

  return (
    <div>
      <Form title="Form"/>
      <dataWithChildren url ="https://cat-fact.herokuapp.com/facts">
      {(data) => (
        <div>
          <ul>
            {data.map(({_id,text}) =>(
              <li key = {_id}>{text}</li>
            ))}
          </ul>
        </div>
      )}
      </dataWithChildren>
    </div>
  )
}


export default App;





