import React from "react";

import {styles} from "./styles.css";


class Form extends React.Component {
    render() {
        return ( 
            <form>
                <input type = "text"></input>
                <input type = "text"></input>
                <button>Click</button>
            </form>
        )
    }
}

export default Form;

// const Form = ({ title, editConfig}) = > {
//     const handleClick = () => {
//         console.log("Create");
//     };

//     return (
//         <form>
//         <div>{title}</div>
//         {Boolean(editConfig) || <button onClick= {handleClick}>Create</button>}

//         {editConfig && (
//             <button onClick={handleClick.handler}>{editConfig.label}</button>
//         )}
//         </form>
//     );
// };

// export default Form;