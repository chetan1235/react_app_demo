import React, { Component } from "react";
import './register.css';
class UnControlComponentRegister extends Component{
    constructor(props){
        super(props);
        this.username = React.createRef();
        this.email = React.createRef();
        this.city = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        const userInfo ={
            username : this.username.current.value,
            email: this.email.current.value,
            city: this.city.current.value
        }
        console.log(userInfo);
    }


    render(){
       // console.log(ref);
        
        return (
            <div className="main">
            <div className="register_form">
                <h3>Registration Form</h3>
                <div><label>Username</label>
                <input type="text" name="username" ref={ this.username } />
                </div>
                <div>
                <label>Email</label> 
                <input type="text" name="email" ref={ this.email } />
                </div>
                <div>
                <label>City</label>
                <input type="text" name="city" ref={ this.city } />
                </div>
                <div>
                <button onClick={ this.handleSubmit }>Submit form</button>
                </div>
            </div>
            </div>

        )



    }

}


export default UnControlComponentRegister;