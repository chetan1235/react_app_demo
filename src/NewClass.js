import React from "react";
import { Component } from "react";
import HOC from "./HOC";

class NewClass extends Component{
 constructor(props){
     super(props);
     this.state={
         count: 1,
         color: 'red',
         model: 'Indica'
     }
     this.handlecount = this.handlecount.bind(this);
 }
 handlecount(){
     this.setState({count : this.state.count+1});
 }

 render(){
     return(
        <React.Fragment>
        <HOC id= "count" value={this.state.count}></HOC>
        <button onClick={this.handlecount}>click</button>
        <HOC id= "color" value={this.state.color}></HOC>
        <HOC id= "model" value={this.state.model}></HOC>
        </React.Fragment>
     )
 }




}
export default NewClass;
