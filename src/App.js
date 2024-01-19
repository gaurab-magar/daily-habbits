import './App.css';
import { Header } from './Components/Header.js';
import { AddTask } from './Components/AddTask.js';
import { ShowTask } from './Components/ShowTask.js';
import { useEffect, useState } from 'react';

function App() {
  const storedTaskList = localStorage.getItem('taskList');
  let parsedTaskList = [];
  try {
    parsedTaskList = storedTaskList ? JSON.parse(storedTaskList) : [];
  } catch (error) {
    console.error('Error parsing storedTaskList:', error);
  }

  // Use the parsed data or an empty array as the initial state
  const [taskList, setTaskList] = useState(parsedTaskList);
  const [task, setTask] = useState({});

  // Function to add tasks in the List
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

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
