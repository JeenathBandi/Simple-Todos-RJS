// Write your code here
// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoList, onDeleteItem, key} = props
  const {title, id} = todoList

  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="todo-elmnt-container">
      <p className="todo-item-para">{title}</p>
      <button onClick={onDelete} type="button" className="delete-btn">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
