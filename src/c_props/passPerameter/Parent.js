
import React from 'react';
import { Component } from 'react';
import ChildSender from './child';


class ParentReciver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parentName:'Parent',
            parentColor:'bg-success'
        }
        this.GreetParent= this.GreetParent.bind(this)

    }
    GreetParent(passing_data)
    {
        alert(`hellow from ${this.state.parentName} From ${passing_data}`)
    }
    
    render() { 
        return ( 
            <div className='container border'>
                <h1>Parent componet area! </h1>
                {/* pass the method through component props ! */}
                {/* handeler is props of Child component */}
                <ChildSender handeler = {this.GreetParent}/>
                
            </div>
         );
    }
}
 
export default ParentReciver;