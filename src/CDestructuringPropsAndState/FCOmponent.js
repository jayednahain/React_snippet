import React from 'react';




// // normal away
// function DestructeProps(props) {
//     return (
//         <div className='bg-white text-dark'>
//             <h3> name:{props.name}<br></br> id:{props.id}</h3>
//         </div>
//      );
// }
// export default DestructeProps;


// distructuin away !
//1st away! direct distruct in fucntion perameter!
// function DestructeProps({name,id}) {
//     return (
//         <div className='bg-white text-dark'>
//             <h3> name:{name}<br></br> id:{id}</h3>
//         </div>
//      );
// }
// export default DestructeProps;

// distructure inside function body !
function DestructeProps(props) {
    const {name:new_name,id:new_id}=props
    return ( 
        <div className='bg-white text-dark'>
        <h3> name:{new_name}<br></br> id:{new_id}</h3>
        </div>
     );
}

export default DestructeProps;
