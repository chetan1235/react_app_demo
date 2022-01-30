import React from "react";
import { Component } from "react";

class HOC extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return(
        <div>
            <p>{this.props.id} : {this.props.value}</p>
        </div>
        )

    }


}

export default HOC;