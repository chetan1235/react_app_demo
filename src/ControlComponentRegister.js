import React, { Component } from "react";

class ControlComponentRegister extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            email : '',
            city : ''
        }
        this.changeUsername = this.changeUsername.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeCity = this.changeCity.bind(this);
    }

    changeUsername(e){
        this.setState({
            username : e.target.value
        })
    }

    changeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    changeCity(e){
        this.setState({
            city: e.target.value
        })
    }

    render(){
       // console.log(ref);
        
        return (
            <div>
                <h3>Registration Form</h3>
                <label>Username</label>
                <input type="text" name="username" onChange={ this.changeUsername }  value={ this.state.username}/>
                <label>Email</label>
                <input type="text" name="email" onChange={ this.changeEmail}  value={ this.state.email }/>
                <label>City</label>
                <input type="text" name="city" onChange={ this.changeCity } value={ this.state.city } />
                <button>Submit form</button>
                <h5>Username: { this.state.username}</h5>
                <h5>Email: { this.state.email}</h5>
                <h5>City: { this.state.city}</h5>

            </div>

        )



    }

}


export default ControlComponentRegister;