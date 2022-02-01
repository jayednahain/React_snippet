import React from "react";
import { Component } from "react";
import UserComponents from "../UsingIfElse/UserData";
// import GustComponents from "./GustData";



class ShortCondition extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        isLoggedIn:true
     }
    render() { 
        return (
            this.state.isLoggedIn && <UserComponents/>
         );
    }
}
 
export default ShortCondition;