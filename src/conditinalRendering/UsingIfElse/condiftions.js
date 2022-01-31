import React from "react";
import { Component } from "react";
import UserComponents from "./UserData";
import GustComponents from "./GustData";


class IfelseConditions extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        isLoggedIn:true
     }
    render() { 
        
            if (this.state.isLoggedIn) {
                return (
                    <div>
                        <UserComponents/> 
                    </div>
                )
            }
            else
            {
               return(
                   <div>
                       <GustComponents/>
                   </div>
               )
            }
                
                
                
            
         
    }
}
 
export default IfelseConditions ;
