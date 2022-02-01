import React, { Component } from "react";

class Register extends Component{
    constructor(props){
        super(props);
        this.username = React.createRef();
        this.state = {
            username : '',
            email : '',
            city : ''
        }
        this.changeUsername = this.changeUsername.bind(this);
    }

    changeUsername(){
        console.log(this.username.current.value);
        this.setState({
            username : this.username.current.value

        })
    }

    render(){
       // console.log(ref);
        
        return (
            <div>
                <h3>Registration Form</h3>
                <label>Username</label>
                <input type="text" name="username" ref={this.username}  onChange={ this.changeUsername }  value={ this.state.username}/>
                <label>Email</label>
                <input type="text" name="email" value={ this.state.email }/>
                <label>City</label>
                <input type="text" name="city" value={ this.state.city } />
                <button>Submit form</button>
            </div>

        )



    }

}


export default Register;