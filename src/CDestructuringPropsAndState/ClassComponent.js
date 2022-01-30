import React from 'react';
import { Component } from 'react';

class DestructeClassProps extends Component {
    state = { 
        current_state:"old State",
        current_data:"old Data"
     } 
    render() { 
        const {name:new_name,id:new_id}=this.props
        const {current_state,current_data}=this.state

        return (
            <div>
                <h3> name:{new_name}<br></br> id:{new_id}</h3>
                <h3>Passing State</h3>
                <div>
                current_state:{current_state},<br></br>
                current_data:{current_data}
                </div>
            </div>
        );
    }
}
 
export default DestructeClassProps ;