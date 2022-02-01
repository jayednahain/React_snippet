import React from "react";



function ShowPersonData(props) {
    const {person} = props
    return ( 
        <p>my name is <span className="text-danger">{person.name} </span>
            my id is  <span className="text-danger">{person.id} </span>
            my skill is <span className="text-danger">{person.skil} </span>
        </p>
     );
}

export default ShowPersonData;