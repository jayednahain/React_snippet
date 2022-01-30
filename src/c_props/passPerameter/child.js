import React from 'react';



function ChildSender(props) {
    return ( 
            // <button onClick={props.handeler} className='btn btn-dark'>Button From Child</button>
            <button onClick={()=>props.handeler('Data From child')} className='btn btn-dark'>Button From Child</button>
     );
}

export default ChildSender;