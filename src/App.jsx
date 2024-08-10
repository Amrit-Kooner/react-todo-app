import { useState, useEffect } from 'react'
import './global.css'
import Heading from './components/Heading'
import CreateTodo from './components/CreateTodo'
import ListTodo from './components/ListTodo'

function App() {
  const [todos, setTodos] = useState([]);
  
  function localGetTodo() {
    const items = localStorage.getItem("todosList");

    if(items) setTodos(JSON.parse(items));
  }

  useEffect(() => {
    localGetTodo()
  }, [])

  useEffect(() => {
    localStorage.setItem("todosList", JSON.stringify(todos));
  }, [todos]);
  
  
  function createTodo(task){
    const newBook = [...todos, {id:crypto.randomUUID(), task:task, isChecked:false}]
    setTodos(newBook)
    // alert("New task successfully added.")
  }

  function deleteTodo(id){
    const updatedBooks = todos.filter((todo) => todo.id != id)
    setTodos(updatedBooks)
    // alert("New task successfully deleted.")
  }

  function editTodo(id, newTask){
    const updatedBooks = todos.map((todo) => todo.id == id ? {...todo, task:newTask} : todo);
    setTodos(updatedBooks)
    // alert("Task successfully updated.")
  }

  function checkTodo(id){
    const updatedBooks = todos.map((todo) => todo.id == id ? {...todo, isChecked:!todo.isChecked} : todo);
    setTodos(updatedBooks)
    // alert("Task successfully updated.")
  }

  function clearTodo(){
    setTodos([])
    localStorage.clear();
    // alert("Tasks successfully cleared.")
  }

  return (
    <div className='container'>
      <div className='wrapper'>
        <Heading handleClear={clearTodo} todoLength={todos.length}/>
        <CreateTodo handleCreate={createTodo} />
        <ListTodo toDoItems={todos} handleEdit={editTodo} handleDelete={deleteTodo} handleCheck={checkTodo}/>
      </div>
    </div>
  )
}

export default App
