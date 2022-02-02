import React from "react";
import { Component } from "react";

class FormTest extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        username:'',
        comments:''
     }
    handleUsernameChnage = (event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleCommentsChange = (event) =>{
        this.setState({
            comments:event.targe.value
        })
    }

    
    render() { 
        return ( 
            <form>
                <div className="container">
                    <div>
                        <input
                        className="form-control" 
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleUsernameChnage}
                        ></input>
                    </div>
                    <hr></hr>
                    <div>
                        <textarea 
                        className="form-control"
                        placeholder="type comments" 
                        onClick={this.handleCommentsChange}
                        ></textarea>
                    </div>

                </div>
            </form>
         );
    }
}
 
export default FormTest ;