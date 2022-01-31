import React from "react";
import { Component } from "react";
import UserComponents from "./UserData";
import GustComponents from "./GustData";


class RetrunAsVariable extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        isLoggedIn:true
     }
    render() { 
        let message
        
            if (this.state.isLoggedIn) { 
                    message =  <UserComponents/>   
            }
            else
            {          
                    message=<GustComponents/>
            }
            return (
                <div>{message}</div>
            )
    }
}
export default RetrunAsVariable ;
