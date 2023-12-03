import React, { useState } from 'react'

function Tasklist({ task, onEditTask, onDeleteTask }) {
    return (
        <div className='ul-list'>
        <ul >    
            {task.map((v) => (
                <li key={v.id}>
                    <Task
                        list={v}
                        onEdit={onEditTask}
                        onDelete={onDeleteTask}
                    />
                </li>
            ))}
        </ul>
        </div>
    )
    
}

function Task({list, onEdit, onDelete}) {
    const [isEditing, setIsEditing] = useState(false);
    let Content;
    if (isEditing) {
        Content = (
            <>
                <input
                    type='text'
                    value={list.title}
                    className='inp-chng'
                    onChange={(e) => {
                        onEdit({
                            ...list,
                            title: e.target.value
                        })
                    }}
                />
                <button onClick={() => { setIsEditing(false) }}><img src='./images/save.svg'/></button>
            </>
        )
    } else {
        Content = (
            <>
                <span className='list-text'>{list.title}</span>
                <button onClick={() => { setIsEditing(true) }}><img src='./images/edit.svg'/></button>
            </>
        )
    }
    return (
        <label>
            <input className='check-box' type='checkbox'/>
            {Content}
            <button onClick={() => { onDelete(list.id) }}><img src='./images/delete.svg'/></button>
        </label>
    )
    
}

export default Tasklist