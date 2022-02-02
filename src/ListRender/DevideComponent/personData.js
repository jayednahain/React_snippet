import React from "react";
import ShowPersonData from "./personShow";



function PersonDataComponent() {

    const names = ["nahian","jayed","abuJayed"]
    const PersonData = [
        {
            id:1,
            name:'jayed Nahian',
            age:34,
            skil:"python"
        },
        {
            id:7,
            name:'Niloy',
            age:34,
            skil:"React"
        },
        {
            id:5,
            name:'jayed',
            age:88,
            skil:"Java Script"
        },
        {
            id:4,
            name:'Nahian',
            age:66,
            skil:"Java"
        },
        {
            id:2,
            name:'Kabir',
            age:77,
            skil:"Sql"
        }
    ]

    // sending person as props
    //sending data to ShowPersonData person data component !
    // const PersonList = PersonData.map(person=> <ShowPersonData person={person}/>)
    const nameList = names.map(name=> <h4>{name}</h4>)

    // so the person will also caries the component
    return <div>{nameList}</div>
     
}

export default PersonDataComponent;