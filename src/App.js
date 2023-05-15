import logo from "./logo.svg";
import "./App.css";
import Display from "./component/Display";
import GroupBtn from "./component/GroupBtn";
import ListTodo from "./component/ListTodo";
import Form from "./component/Form";

function App() {
  return (
    <div className="App">
      {/* <Display />
      <GroupBtn /> */}
      <Form />
      <ListTodo />
    </div>
  );
}

export default App;
