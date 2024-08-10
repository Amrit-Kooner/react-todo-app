import { useState } from 'react'
import '../global.css'
import addIcon from '../assets/svg/add-icon.svg'

function CreateTodo({ handleCreate }) {
    const [task, setTask] = useState("");

    function validateTask(event){
        event.preventDefault();

        const trimTask = task.trim()

        if(trimTask == ""){
            console.error("no task entered")
            return -1
        }
        handleCreate(trimTask)
        setTask("")
    }

    return (
        <form className='search-bar' onSubmit={validateTask}>
            <input className='search-input' type='text' placeholder='Enter Task...' maxLength={100} value={task} onChange={(event) => setTask(event.target.value)}/>
            <button className="search-btn btn" type='submit' title='create'><img src={addIcon} alt='add icon'/></button>
        </form>
    )
}

export default CreateTodo