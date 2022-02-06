//import Information from "./Information";
//import FirstClassComponent from "./FirstClassComponent";
//import FirstComponent from "./FirstComponent";
//import ControlComponentRegister from "./ControlComponentRegister";
import UnControlComponentRegister from "./UnControlComponentRegister";

import UserList from "./UserList";

function App(){

  return (
    <div>
    <UnControlComponentRegister />
    <UserList></UserList>
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