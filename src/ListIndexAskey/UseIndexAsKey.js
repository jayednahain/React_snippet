import React from "react";

/*
when we can use index as key !
> item in list donst have unique id
> the list will static list will not change
> the list will never v=be re-order or filtered!

*/

function IndexAsKey() {
    const names = ["nahian","jayed","abuJayed","jayed"] 
    const nameList = names.map((name,index)=> <h4 key={index}>Key index: {index} value {name}</h4>)
    return <div>{nameList}</div>   
}

export default IndexAsKey;