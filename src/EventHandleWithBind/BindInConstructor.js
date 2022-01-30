import React from 'react';
import { Component } from 'react';



class BindingOnConstructor extends Component {
    constructor(props)
    {
        super(props)
        this.state = { 
            message:"hellow",
            color:"bg-warning"
        }
        this.ClickPerform = this.ClickPerform.bind(this)
    }
  
    ClickPerform()
    {
        this.setState({
            message:"trigger!",
            color: "bg-danger border"
        })
        console.log(this);
    }
    render() { 
        return ( 
            <div>
                <h3 className='text-center'>Bind on Construcotr!</h3>
                <h4 className={this.state.color}>{this.state.message}</h4>
                {/* <button onClick={this.ClickPerform.bind(this)} className='btn btn-dark'>CLick !</button> */}
                {/* <button onClick={()=>this.ClickPerform()} className='btn btn-dark'>CLick !</button> */}
                <button onClick={this.ClickPerform} className='btn btn-dark'>CLick !</button>
            </div>
         );
    }
}
export default BindingOnConstructor;