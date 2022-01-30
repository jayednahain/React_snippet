import React from 'react';
import { Component } from 'react';


class Clock extends Component {
    //state = {  }
    
    render() { 
        return (
            <h1>
                {/* <span> Clock time { this.get_time(this.props.local) } </span> */}
                <span> class Component Clock time { new Date().toLocaleTimeString(this.props.local)} </span>

            </h1>
            
        );
    }
}
 
export default Clock
