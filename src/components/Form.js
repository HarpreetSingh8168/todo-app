import React from 'react'
function Form({ todos, setTodos, setInputText, inputText,setStatus }) {

    const inputTextHandler = e => {
        setInputText(e.target.value)
    }
    const todoListHandler = e => {
        e.preventDefault()
        if (inputText !== "") {
            setTodos([
                ...todos, {
                    topi: inputText, completed: false, id: Math.random() * 1000
                }
            ])
        }
        setInputText("")
    }
    const statusHandler = e => {
        setStatus(e.target.value)
    }
    return (
        <form>
            <input value={inputText} type="text" className="todo-list" onChange={inputTextHandler}/>
            <button className="todo-button" type="submit" onClick={todoListHandler}>
                <i className="fas fa-plus-square" />
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all" >All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form
