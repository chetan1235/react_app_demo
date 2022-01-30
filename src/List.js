import React from "react";
import { Component } from "react";

class List extends Component{
constructor(props){
    super(props);
    this.state={
        list: []
    }
}

componentDidMount(){
    fetch('https://gorest.co.in/public/v1/users/')
    .then(response => response.json()
    )
    .then(info => {
        this.setState({
        list: info.data})
    
    });
}



render(){
return(
    <table className="table">
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Status</th>
            </tr>
        </thead>
        <tbody>
        {
           this.state.list.map((item)=>{
             return (  
            <tr>
            <td>{ item.id }</td>
            <td>{item.name}</td>
            <td>{item.gender}</td>
            <td>{item.email}</td>
            <td>{item.status}</td>
            </tr>
             )
           })

        }

            
        </tbody>


    </table>



)



}

}
export default List;