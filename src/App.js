import React, { useState } from 'react'
import './App.css'
import AddTodos from './AddTodos';
import Tasklist from './Tasklist';

let nextId = 4;
const initialTodos = [
  { id: 1, title: "Apple" },
  { id: 2, title: "Banana" },
  { id: 3, title: "Mango" }
];

function App() {
  const [todos, setTodos] = useState(initialTodos)

  function handlerAddTask(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title
      }
    ])
  }

  function handlerEditTask(nextTodos) {
    setTodos(todos.map((v) => {
      if (v.id == nextTodos.id) {
        return nextTodos
      } else {
        return v;
      }
    }))
  }

  function handlerDeleteTask(todosId) {
    setTodos(
      todos.filter((v) => {
        return v.id != todosId;
      })
    )
  }

  return (
    <div className='main'>
      <div className='main-ctn'>
        <h2>TODO LIST</h2>
        <AddTodos onAddTask={handlerAddTask} />
        <Tasklist
          task={todos}
          onEditTask={handlerEditTask}
          onDeleteTask={handlerDeleteTask}
          className="container"
        />
      </div>
    </div>
  )
}

export default App