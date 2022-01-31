import React, { Component } from "react";


class FirstComponent extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            type: 'Car',
            color: 'red',
            brand:'Tata',
            model: 'Nexon',
            counter : 1,
        }

        this.changestate = this.changestate.bind(this);
        this.chnageCounter = this.chnageCounter.bind(this);
    }

    changestate(){
        this.setState({
            type: "truck"
    
        })
        console.log(this.state);
    }
    
    chnageCounter =() =>{
        this.setState({
            counter : this.state.counter+1
        });

    }


    render(){
        console.log(this.state);
        return (

            <div><h4>{ this.props.name}</h4>
                <p>This is class compoent</p>
                Vehicle Info:
                <h4>{ this.state.type }</h4>
                <h4>{ this.state.color }</h4>
                <h4>{ this.state.model }</h4>
                <h4>{ this.state.brand }</h4>
                <h1>{ this.state.counter }</h1>
                <button onClick={ this.chnageCounter }>click</button>
                <button onClick={this.changestate }>change Type</button><br/><br/><br/>
                
                
                
                </div>

        )

    }

}


export default FirstComponent;