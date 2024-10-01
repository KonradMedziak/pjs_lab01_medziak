import React, { Component } from "react";
class CContents extends Component{

    constructor(){
        super()
        this.state={msg: 'Witaj uzytkowniku. Kliknij przycisk aby poznac wiadomosc'}
    }

    changeMsg(){
        this.setState({msg: 'Właśnie ejsteś ucezstnikiem lab React, gratuluje'});
    }

    render(){
        return (
            <div>
                <h1>
                    {this.state.msg}
                </h1>
                <button onClick={()=>this.changeMsg()}>Kliknij aby poznac tajemnice</button>
            </div>
        )
    }
}
export default CContents;