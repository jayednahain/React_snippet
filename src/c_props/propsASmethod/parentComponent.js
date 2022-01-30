
import React from 'react';
import { Component } from 'react';


class parentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parentName:'Parent',
            parentColor:'bg-success'
        }
    }
    GreetParent()
    {
        alert(`hellow from ${this.state.parentName}`)
    }
    
    render() { 
        return (  );
    }
}
 
export default parentComponent;