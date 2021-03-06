
import React from 'react';
import { Component } from 'react';
import ChildComponent from './ChildComponent';


class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parentName:'Parent',
            parentColor:'bg-success'
        }
        this.GreetParent= this.GreetParent.bind(this)

    }
    GreetParent()
    {
        alert(`hellow from ${this.state.parentName}`)
    }
    
    render() { 
        return ( 
            <div className='container border'>
                <h1>Parent componet area! </h1>
                {/* pass the method through component props ! */}
                {/* handeler is props of Child component */}
                <ChildComponent handeler = {this.GreetParent}/>
                
            </div>
         );
    }
}
 
export default ParentComponent;