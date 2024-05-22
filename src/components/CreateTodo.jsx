import { useState } from 'react'
import '../global.css'

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
        <form className='create-form' onSubmit={validateTask}>
            <div className='search-bar'>
                <input className='search-input' type='text' placeholder='Enter Task...' maxLength={100} value={task} onChange={(event) => setTask(event.target.value)}/>
                <button className="search-btn" type='submit'>Create</button>
            </div>
        </form>
    )
}

export default CreateTodo