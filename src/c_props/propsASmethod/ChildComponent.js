import React from 'react';



function ChildComponent(props) {
    return ( 
            <button onClick={props.handeler} className='btn btn-dark'>Button From Child</button>
     );
}

export default ChildComponent;