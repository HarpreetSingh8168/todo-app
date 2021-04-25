import React from 'react'
import Todo from './Todo'

function ToDoList({ todos, setTodos,status }) {
    console.log(todos)
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => {
                    if ((status === 'all') || ((status === 'completed') && (todo.completed === true)) ||
                        ((status === 'uncompleted') && (todo.completed === false)))
                        return (<Todo key={todo.id} todos={todos} todo={todo} setTodos={setTodos} />)
                    return null;
                })}
            </ul>
        </div>
    )
}

export default ToDoList
