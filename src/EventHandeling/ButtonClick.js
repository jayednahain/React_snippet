import React from 'react';
import { Component } from 'react';




class ButtonClick extends Component {
    state = {
        date: new Date(),
        color:'bg-danger',
        local:'ar-SA'

    }
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
    handleClick=(local)=>{
    // using arrow function beacuse onClik is a call back function
        this.setState({
            // local:'en-US',
            local,
            color:'bg-warning'
        })
    }
    render() {
        // for this we dont need to use this.state every time
        const {date,local,color} = this.state 
        return (
            <h1 className={color}>
                <h2>Button Click !</h2>
                <h4>COuntery : {this.props.local}</h4>
                <span className='bg-success'>{ date.toLocaleTimeString(local)} </span>
                {/* <button onClick={this.handleClick} className='btn btn-dark'>Chnage formate</button> */}
                {/* pass perameter using onClick using .bind */}
                {/* <button onClick={this.handleClick.bind(this,"en-US")} className='btn btn-dark'>Chnage formate</button> */}
                {/* insted of .bind using ()=> function */}
                <button onClick={
                    ()=>this.handleClick("en-US")
                    } className='btn btn-dark'>Chnage formate</button>
            </h1>   
        );
    }
}
 
export default ButtonClick
 
