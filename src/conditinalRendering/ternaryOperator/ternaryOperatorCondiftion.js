import React from "react";
import { Component } from "react";
import GustComponents from "../UsingIfElse/GustData";
import UserComponents from "../UsingIfElse/UserData";


class ternaryOperator extends Component {
    state = {
        isLoggedIn:true
    } 
    render() { 
        return (
            this.state.isLoggedIn ? 
            <UserComponents/> : <GustComponents/>
        );
    }
}
 
export default ternaryOperator;