import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './App';
import Dropdown from './dropdownmenu/Dropdown';


var displayDropdown = (
      <div style={{display: 'flex', justifyContent: 'center'}} >
        <Dropdown />
      </div>
      );

ReactDOM.render(displayDropdown, document.getElementById('root'));

registerServiceWorker();