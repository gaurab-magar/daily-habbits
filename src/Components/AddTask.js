import React from 'react';
import "./Add.css";

export const AddTask = ({taskList,setTaskList,task,setTask}) => {
    const handleSubmit = (e)=>{
        e.preventDefault();

        if (task.id) {
            const date = new Date();
            const updatedTaskList = taskList.map((item) =>
              item.id === task.id
                ? {
                    id: task.id,
                    name: task.name,
                    time: `${date.toLocaleDateString()} ${date.toLocaleDateString()}`,
                  }
                : item
            );
            setTaskList(updatedTaskList);
            setTask({});
          } else {
            const date = new Date();
            const newTask = {
                id: date.getTime(), 
                name: e.target.task.value, 
                time: `${date.toLocaleDateString()} ${date.toLocaleDateString()}` 
            }
            setTaskList((prevTaskList) => [...prevTaskList, newTask]);
            setTask({});
            e.target.task.value = '';
        }
    }
  return (
    <section className='add-task py-5 '>
        <div className='d-flex justify-content-center'>
            <form onSubmit={ handleSubmit } className='d-flex  gap-2'>
                <input type="text" name='task' value={task.name || ''} placeholder='Add Task...' className='form-control' onChange={e=> setTask({...task, name: e.target.value})}/>
                <button className='btn btn-primary rounded-5 px-4'>{task.id?"Update":"Add"}</button>
            </form>
        </div>
    </section>
  )
}
