import './App.css';
import { Header } from './Components/Header.js';
import { AddTask } from './Components/AddTask.js';
import { ShowTask } from './Components/ShowTask.js';
import { useState } from 'react';

function App() {
  const [taskList , setTaskList] = useState([]);
  const [task , setTask] = useState({});
  // Function to add tasks in the List
  return (
    <div className="App">
      <Header />
      <AddTask 
        task={task}
        setTask={setTask}
        taskList={taskList} 
        setTaskList={setTaskList}
       />
      <ShowTask 
        task={task}
        setTask={setTask}
        taskList={taskList} 
        setTaskList={setTaskList}
       />

    </div>
  );
}

export default App;
