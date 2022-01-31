import Information from "./Information";
import FirstClassComponent from "./FirstClassComponent";
import FirstComponent from "./FirstComponent";
function App(){

  return (
    <div>
      <h1>Hello React</h1>
      <h2>Welcomet to first component on React</h2>
      <p>This is starting page</p>
      <Information title="This is first functional component" status="active" />
      <FirstComponent name="Simple Testing Apps" />
    </div>

  );

}

export default App;

