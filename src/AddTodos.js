import React, { useState } from 'react'

function AddTodos({onAddTask}) {
    const [title, setTitle] = useState("");

  return (
    <div className='input-ctn'>
        <input
        type='text'
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        placeholder='Add a Task'
        className='inp-title'
        />
        <button className='inp-btn' onClick={()=>{onAddTask(title)}}><img src='./images/plus.svg'/></button>
    </div>
  )
}

export default AddTodos;