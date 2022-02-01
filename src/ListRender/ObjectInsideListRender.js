import React from "react";



function ObjectInsideListRender() {

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
    
    const PersonList = PersonData.map(person=>(
        <p>my name is <span className="text-danger">{person.name} </span>
            my id is  <span className="text-danger">{person.id} </span>
            my skill is <span className="text-danger">{person.skil} </span>
        </p>
    ))

    return(
        <div>
            {PersonList}
        </div>
    )
     
}

export default ObjectInsideListRender;