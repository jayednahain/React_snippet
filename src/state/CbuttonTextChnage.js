import React from 'react';
import { Component } from 'react';

class ChnageStateButton extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         messeage_one:"OLD! ",
    //         messeage_two:"OLD state!"
    //     }
    // }
    state = {
        messeage_one:"OLD! ",
        messeage_two:"OLD state!",
        value_one:3,
        value_two:4
       
    }
    ChangeMessnageState(){
        this.setState({
            messeage_one:"update state",
            messeage_two:"update to new State"
        })
    }
    render() { 
        return ( 
            <div>
                <h2>Chnage State by button click</h2>
                <div className='row borde p-1'>
                    <div className='col-3 border'>
                        <h1>Status One: {this.state.messeage_one}</h1>
                    </div>
                    <div className='col-3 border'>
                        <h1>Status two: {this.state.messeage_two}</h1>
                    </div>
                </div>
                
                
                <button className='btn btn-danger' onClick={()=>this.ChangeMessnageState() }>Chnage stae</button>
            </div>
         );
    }
}
 
export default ChnageStateButton;