import React from 'react'

export default function Todo({todo, toggleTodo}) {

    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return(
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
                <p>{todo.name}</p>
            </label>
        </div>
    )

}