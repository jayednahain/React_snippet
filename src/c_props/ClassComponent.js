import React from 'react';
import { Component } from 'react';



class PropsDemoClass extends Component {
    render() { 
        return (
            <div>
                <h3>Hellow {this.props.name} from class component</h3>
                {this.props.children}
            </div>
           
        );
    }
}
 
export default PropsDemoClass;