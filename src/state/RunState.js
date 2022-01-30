import React from 'react';
import { Component } from 'react';


class Runstate extends Component {
    //state = {  }
    // constructor(proprs){
    //     super(proprs)
    //     this.state = {
    //         date: new Date()
    //     }
    // }
    state = {date: new Date()}
    // run after the render()
    componentDidMount(){
        this.ClockData = setInterval(()=>{this.runClock()},1000)
    }

    componentWillUnmount(){
        clearInterval(this.ClockData)
    }
    runClock(){
        this.setState({
            date: new Date()
        })
    }

    render() { 
        return (
            <h1 className='bg-dark text-white'>
                <h2>Running clock using function state!</h2>
                <h4>COuntery : {this.props.local}</h4>
                <span className='bg-success'>{ this.state.date.toLocaleTimeString(this.props.local)} </span>
                                                {/* local will pass as div properties ! */}
            </h1>
            
        );
    }
}
 
export default Runstate