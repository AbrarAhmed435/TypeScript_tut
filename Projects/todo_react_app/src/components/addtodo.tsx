import React, { useState } from "react";
import { useTodo } from "../store/todo";


export default function AddToDo(){
    const [todo,setTodo]=useState("");
    const {handleAddTodo}=useTodo()

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>): void =>{
        e.preventDefault()
        handleAddTodo(todo)
            
    }

    return(
        // <form onSubmit={(e)=>}>
        <form onSubmit={handleSubmit}>
            <input type="text"  value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button type="submit">submit</button>
            <h1>{todo}</h1>
        </form>
    )
}