import React, { useState, useEffect, Component} from "react";

// const withItemsData = (props) => {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         fetch(props.url)
//         .then((data) => data.json())
//         .then((data) => setData(data));
//     },[]);

//     return (
//         <div>
//             {data && props.render(data)}
//         </div>
//     );
// };

const dataWithChildren = (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(props.url)
        .then((data) => data.json())
        .then((data) => setData(data));
    }, []);
    return (
        <div>
            <h3>Data with children</h3>
            {data && props.children(data)}
        </div>
    );
};

export default dataWithChildren