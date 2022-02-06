import React, { Component } from "react";

class UserList extends Component{
    constructor(props){
        super(props);
        this.state ={
            info: []
        }

    }

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

    render(){
        const infoData = this.state.info;
       // console.log(this.state.info)
        return (
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
                    infoData.map((item)=> {
                      return(  <tr key={ item.id }>
                            <td>{ item.id }</td>
                            <td><img src={ item.avatar } /></td>
                            <td>{ item.email }</td>
                            <td>{ item.first_name }</td>
                            <td>{ item.last_name }</td>
                            
                        </tr> )
                    })
                }
                </tbody>
            </table>
        )
    }

}

export default UserList;