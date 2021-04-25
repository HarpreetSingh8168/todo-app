import React from 'react'

function Todo({ todo,todos,setTodos }) {
    const todoStatusHandler = () => {
        setTodos(todos.map(tod => {
            if (tod.id === todo.id)
                return {
                    ...tod, completed : !tod.completed
                }
            return tod;
            }))
    }
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed":"incompleted"}`}>{todo.topi}</li>
            <button className={`${todo.completed ? "completed-btn":"complete-btn"}`} onClick={todoStatusHandler}><i className={`${todo.completed?"fas fa-times":"fas fa-check"}`}/></button>
            <button className="trash-btn" onClick={deleteHandler}><i className="fas fa-trash"/></button>
        </div>
    )
}

export default Todo
