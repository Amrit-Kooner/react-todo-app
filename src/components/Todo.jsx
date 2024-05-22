import { useState } from 'react'
import '../global.css'
import trashIcon from '../assets/svg/trash-icon.svg'
import editIcon from '../assets/svg/edit-icon.svg'
import checkIcon from '../assets/svg/check-icon.svg'
import cancelIcon from '../assets/svg/cancel-icon.svg'
import saveIcon from '../assets/svg/save-icon.svg'

function Todo({ todo, handleEdit, handleDelete, handleCheck }) {  
  const [editToggle, setEditToggle] = useState(false)
  const [newTask, setNewTask] = useState(todo.task)

  function confirmDelete(){
    if(confirm("Are you sure you want to delete this task?")){
      handleDelete(todo.id)
    }
  }

  function confirmEdit(event){
    event.preventDefault();

    let taskTrim = newTask.trim();

    if(taskTrim == todo.task){
      setEditToggle(false)
      return
    }

    if(taskTrim == ""){
      console.error("no task entered")
      return -1
    }

    if(confirm("Are you sure you want to edit this task?")){
      handleEdit(todo.id, taskTrim)
      setEditToggle(false)
    }
  }

  const taskElement = (
    <div className='task'>
      <span className={`task-name ${todo.isChecked ? 'active' : null}`}>{todo.task}</span>

      <div className='task-ops ops'>
        <button className='op-btn check-btn' onClick={() => handleCheck(todo.id)}>
          <img src={checkIcon} alt='check icon'/>
        </button>
        <button className='op-btn edit-btn' onClick={() => setEditToggle(true)}>
          <img src={editIcon} alt='edit icon'/>
        </button>
        <button className='op-btn delete-btn' onClick={confirmDelete}>
          <img src={trashIcon} alt='trash icon'/>
        </button>
      </div>
    </div>
  )

  const editForm = (
    <form className='edit-form' onSubmit={confirmEdit}>
      <input className='edit-input' type='text' value={newTask} maxLength={100} onChange={(event) => setNewTask(event.target.value)}/>

      <div className='edit-form-ops ops'>
        <button className='save-btn' type='submit'><img src={saveIcon} alt="save icon"/></button>
        <button className='cancel-btn' onClick={() => setEditToggle(false)}><img src={cancelIcon} alt="cancel icon"/></button>
      </div>
    </form>
  )

  return ( 
    <div className='task-list'>
      {editToggle ? editForm : taskElement}
    </div>
  )
}

export default Todo