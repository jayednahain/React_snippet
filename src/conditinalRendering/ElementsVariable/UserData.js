import React from 'react';


function UserComponents(props) {
    return ( 
        <div className="border">
            <h1>Welcome user <br></br>{props.username}</h1>
        </div>
     );
}

export default UserComponents;