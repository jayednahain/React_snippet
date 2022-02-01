import React from "react";

function RenderList() {
    const names = ['nahain','kabir','jayed']
    return ( 
        <div>
             <h3>All items: {names}</h3>
             <p>render item using loop</p>
             {
                 names.map(
                     (name)=><h2>{name}</h2>
                 )
             }
            
        </div>
     );
}

export default RenderList;