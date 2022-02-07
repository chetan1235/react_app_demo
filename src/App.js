import Information from "./Information";
import FirstClassComponent from "./FirstClassComponent";
import FirstComponent from "./FirstComponent";
import ControlComponentRegister from "./ControlComponentRegister";
import UnControlComponentRegister from "./UnControlComponentRegister";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserList from "./UserList";

function App(){
  const styles={
    list:{
      padding: 10
    }
  }
  return (
    
      <div>
        <Router>
        <ul style={{ display: "flex", listStyleType: "none" }}>
          <li style={ styles.list}>
            <Link to="/information">Information</Link>
          </li>
          <li style={ styles.list}>
            <Link to="/first_class">First Class</Link>
          </li>
          <li style={ styles.list}>
            <Link to="/first">First</Link>
          </li>
          <li style={ styles.list}>
            <Link to="/controlled">Controlled component</Link>
          </li>
          <li style={ styles.list}>
            <Link to="/uncontrolled">UnControlled component</Link>
          </li>
          <li style={ styles.list}>
            <Link to="/users">User List</Link>
          </li>
          
        </ul>

        <hr />

        <Routes>
          <Route exact path="/information" element={ <Information /> } />
          <Route path="/first_class" element={<FirstClassComponent />} />
          <Route path="/first" element={<FirstComponent name="First Component" />} />
          <Route path="controlled" element={ <ControlComponentRegister />}></Route>
          <Route path="uncontrolled" element={ <UnControlComponentRegister />}></Route> 
          <Route path="users" element={ <UserList />}></Route>
          
        </Routes>
         </Router>      

      </div>
    


  );

}

export default App;

/*
  <div>
      <h1>Hello React</h1>
      <h2>Welcomet to first component on React</h2>
      <p>This is starting page</p>
      <Information title="This is first functional component" status="active" />
      <FirstComponent name="Simple Testing Apps" />
    </div>
*/