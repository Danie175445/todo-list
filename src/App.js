import './App.css';
import AddTask from './components/AddTask';
import React,{ useState } from 'react';
import Task from './components/Task';


function App() {
  const [task, setTask] = useState("")
  const [todo,setTodo] = useState([])
  const [style,setStyle] = useState("")
  return (
    <div className="App">
      <AddTask task= {task} setTask = {setTask} todo ={todo} setTodo = {setTodo}/>
      {/* {
        todo.map((task,i)=> <Task key ={i} task={task}  setTodo={setTodo} style={style} setStyle={setStyle}/> )
      } */}
      <Task task={task} setTask={setTask} todo={todo} setTodo={setTodo} style={style} setStyle={setStyle}/>
    </div>
  );
}

export default App;
