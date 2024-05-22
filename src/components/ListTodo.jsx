import '../global.css'
import Todo from './Todo'

function ListTodo({ toDoItems, handleEdit, handleDelete, handleCheck }) {
  const renderedItems = toDoItems.map((todo) => <div key={todo.id}><Todo todo={todo} handleEdit={handleEdit} handleDelete={handleDelete} handleCheck={handleCheck}/></div>)

  return (
    <div className='todo-container'>
        {renderedItems}
    </div>
  )
}

export default ListTodo