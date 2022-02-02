import React from "react";



function NameAskey() {
    const names = ["nahian","jayed","abuJayed","jayed"] 
    const nameList = names.map(name=> <h4 key={name}>{name}</h4>)
    return <div>{nameList}</div>   
}

export default NameAskey;