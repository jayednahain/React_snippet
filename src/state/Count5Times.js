import React from 'react';
import { Component } from 'react';

class Counter5time extends Component {
    
    //state = {  } 
    constructor(props){
        super(props)   
        this.state={
            count:0
        }
    }
    increment(){
        // this.setState({
        //     count : this.state.count+1
        // },
        // ()=>{
        //     console.log("value from call back:", this.state.count);
        // })
        // console.log("value out site call back !",this.state.count);
        this.setState(previousState=>({
            //previous state is a function
            count:previousState.count+1
        }))
    }
    fiveTimeIncrement()
    {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment() 
    }
    render() { 
        return (
            <div>
                <h3>Count value per 5 time !</h3>
                <h3>{this.state.count}</h3>
                <button className='btn btn-danger' onClick={()=>this.fiveTimeIncrement()}>Incriment</button>
            </div>
        );
    }
}
 
export default Counter5time;