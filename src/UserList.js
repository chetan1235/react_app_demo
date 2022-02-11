import React, { Component } from "react";
import { userInfo } from "./actions/userActions";
import { connect } from 'react-redux';
class UserList extends Component{
    
/*
    componentDidMount(){

        fetch('https://reqres.in/api/users')
        .then(res => res.json())
            .then(
            (result) => {
                const data = result.data;
               
                this.setState({
                    info: data
                })
                
            });

    }
*/
    render(){
       // const infoData = this.state.info;
       const { data, userInfo } = this.props;
     //  console.log(data);
        return (
            <div>
                <button onClick={ userInfo }>Get User List</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Avatar</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                {
                    (data)?
                    data.map((item)=> {
                      return(  <tr key={ item.id }>
                            <td>{ item.id }</td>
                            <td><img src={ item.avatar } alt="product img" /></td>
                            <td>{ item.email }</td>
                            <td>{ item.first_name }</td>
                            <td>{ item.last_name }</td>
                            
                        </tr> )
                    })
                    : ''
                }
                </tbody>
            </table>
            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return { data: state.UserReducer.data }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        userInfo: ()=> dispatch(userInfo())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);