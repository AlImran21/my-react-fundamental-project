import React, { useState } from 'react';

const Test = (props) => {
    const [count, setCount] = useState (0)

    // const {count} = props
    // console.log (count)

    // console.log (props.count)

    // const plus = () => {
    //     // const oldCount = count
    //     // const newCount = oldCount + 1
    //     // setCount (newCount)

    //     // shortcut
    //     setCount (count + 1)
    // }

    // const minus = () => {
    //     // const oldCount = count
    //     // const newCount = oldCount - 1
    //     // setCount (newCount)

    //     // shortcut
    //     setCount (count - 1)
    // }
    console.log (count)

   return (
        <div>
            <h1>{count}</h1>
            <div className="count mt-5">
                {/* shortcut a button er man barano hoyeche */}
                <button onClick={ () => setCount (count + 1)} className='ms-3 p-3'>+</button>
                <button onClick={ () => setCount (count - 1)} className='ms-3 p-3'>-</button>

            </div>
        </div>
    );
};

export default Test;



// import React from 'react';

// const Test = (props) => {
//     console.log (props.country)
//     return (
//         <div>
//             <h1>This is test: {props.country}</h1>
//         </div>
//     );
// };

// export default Test;

// -------------------------------------------------------------

/* 
//   button 2take ebhabe sohojei barano komano jay

import React, { useState } from 'react';

const Test = (props) => {
    const [count, setCount] = useState (0)

    // const {count} = props
    // console.log (count)

    // console.log (props.count)

    const plus = () => {
        // const oldCount = count
        // const newCount = oldCount + 1
        // setCount (newCount)

        // shortcut
        setCount (count + 1)
    }

    const minus = () => {
        // const oldCount = count
        // const newCount = oldCount - 1
        // setCount (newCount)

        // shortcut
        setCount (count - 1)
    }
    console.log (count)

   return (
        <div>
            <h1>{count}</h1>
            <div className="count mt-5">
                <button onClick={plus} className='ms-3 p-3'>+</button>
                <button onClick={minus} className='ms-3 p-3'>-</button>

            </div>
        </div>
    );
};

export default Test;
*/