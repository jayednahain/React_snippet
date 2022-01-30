import React from 'react';
import { Component } from 'react';

class Counter extends Component {
    
    //state = {  } 
    constructor(props){
        super(props)   
        this.state={
            count:0
        }
    }
    increment(){
        this.setState({
            count : this.state.count+1
        },()=>{console.log("value from call back:", this.state.count);})
        console.log("value out site call back !",this.state.count);
    }
    render() { 
        return (
            <div>
                <h3>Count value Singla</h3>
                <h3>{this.state.count}</h3>
                <button className='btn btn-danger' onClick={()=>this.increment()}>Incriment</button>
            </div>
        );
    }
}
 
export default Counter;
