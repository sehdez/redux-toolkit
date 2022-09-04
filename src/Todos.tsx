import React, { useState } from 'react'
import { useGetTodoQuery } from './store/api/todosApi'
import { Pokemon } from './interfaces/Pokemoninterfaces';

export const Todos = () => {

    const [todoId, setTodoId] = useState(1)
    const { data: todo = {} } = useGetTodoQuery( todoId, {} );
    console.log(todo)
    const prevTodo = () => {
        if(todoId=== 1) return
        setTodoId(todoId-1)
    }   
    return (
        <div>
            <h1>Todos</h1>
            <hr />
            <h3> {JSON.stringify(todo)} </h3>

            <button onClick={prevTodo}>Prev Todo</button>
            <button onClick={() => setTodoId(todoId+1)}>Next Todo</button>
        </div>
    )
}
