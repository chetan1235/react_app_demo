import React, { Component } from "react";
import Information from "./Information";

class FirstClassComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            appname: 'Simple React App',
            version: '1.0.0',
            auther: 'techR',
            usage: 'This application is for to learn reactjs'
        }    

    }



 render(){   
    return (
        <div>
        <h4>{ this.state.appname }</h4><br />
        <h5>{ this.state.version }</h5><br />
        <h5>{ this.state.auther }</h5><br />
        <h5>{ this.state.usage }</h5>
        <Information title={ this.state.appname} />
        </div>
    )

 }




}


export default FirstClassComponent;