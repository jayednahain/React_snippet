import React from 'react';
import { Component } from 'react';


class ButtonCustome extends Component {
    state = {  } 
    render() { 
        return (
            <button onClick={()=>this.handleClick("en-US")} className='btn btn-dark'>Chnage formate</button>
        );
    }
}
 
export default ButtonCustome;