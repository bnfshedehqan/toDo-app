import "./App.css";
import Header from "./components/Header";
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
    <Header>
      <User/>
      <AddNewTodo />
      <Calender />
      <Projects/>
    </Header>
    {/* main */}
    <Main>
      <Todos />
      <EditTodo />
    </Main>
  </div>;
}

export default App;
