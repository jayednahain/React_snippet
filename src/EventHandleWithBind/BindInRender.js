import React from 'react';
import { Component } from 'react';



class BindingInRender extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        message:"hellow",
        color:"bg-warning"
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
                <h3 className='text-center'>Bind In render</h3>
                <h4 className={this.state.color}>{this.state.message}</h4>
                <button onClick={this.ClickPerform.bind(this)} className='btn btn-dark'>CLick !</button>
            </div>
         );
    }
}
 
export default BindingInRender;