import React from 'react';
import './show.css';
export const ShowTask = ({taskList,setTaskList,task,setTask}) => {
  const handleEdit=(id)=>{
    const editedTask = taskList.find((item) => item.id === id);
    setTask(editedTask);
  }
  const handleDelete=(id)=>{
    const updatedTask = taskList.filter(item=> item.id !== id);
    setTaskList(updatedTask);
  }
  return (
    <section className='show-task '>
      <div className='container bg-light rounded-4 p-5'>
        <div className='row'>
          <div className='d-flex justify-content-between align-items-center'>
            <h3>TODO :
              <span className="ms-2 badge rounded-pill bg-info">{taskList.length}</span>
            </h3>
            <button className='btn btn-danger' onClick={()=>setTaskList([])}>Clear All</button>
          </div>
          <hr className='my-4'></hr>
        </div>

        <div className='row gx-3 gy-3'>
          { taskList.map(item =>
           (
            <div key={item.id} className='col-md-4'>
              <div className='card border-start border-5 border-info border-0 shadow-lg'>
                <div className='card-body d-flex justify-content-between'>
                  <p className='mb-0'>
                    <span className='task'>{item.name}</span><br></br>
                    <span className='time'>{item.time}</span>
                    </p>
                  <div className='d-flex align-items-center gap-2'>
                    <button onClick={()=>{handleEdit(item.id)}} className='btn btn-outline-success'>Edit</button>
                    <button onClick={()=>{handleDelete(item.id)}} className='btn btn-outline-secondary'>Del</button>
                  </div>
                </div>
              </div>
            </div>
           )
          )}
        </div>
      </div>
    </section>
  )
}
