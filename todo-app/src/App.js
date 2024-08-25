import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import User from "./components/User";
import AddNewTodo from "./components/AddNewTodo";
import Calender from "./components/Calender";
import Projects from "./components/Projects";
import Todos from "./components/Todos";
import EditTodo from "./components/EditTodo";

function App() {
  return <div className="App">
    {/* Sidebar */}
    <Sidebar>
      <User/>
      <AddNewTodo />
      <Calender />
      <Projects/>
    </Sidebar>
    {/* main */}
    <Main>
      <Todos />
      <EditTodo />
    </Main>
  </div>;
}

export default App;
