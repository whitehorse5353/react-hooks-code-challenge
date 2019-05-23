import React, {useContext} from "react";
import {TodosContext} from './todoStore'

export default function ListTodos() {

    const [todos, addTodos] = useContext(TodosContext);

    const deleteTodo = (id) => {
        const filteredTodo = todos.filter(todo => todo.id !== parseInt(id));
        addTodos(filteredTodo);
    };

    const hasCompleted = (id) => {
        const updatedTodo = todos.map(todo => {
            if (todo.id === parseInt(id)) {
                todo.hasCompleted = !todo.hasCompleted;
            }
            return todo;
        });
        addTodos(updatedTodo);
    };

    return (
        <ul>
            {todos.map(todo => <li key={todo.id} style={{listStyle: 'none'}}>
                <input type="checkbox" onChange={() => hasCompleted(todo.id)}/>
                <div style={{
                    padding: '0 10px',
                    display: 'inline-block',
                    textDecoration: todo.hasCompleted ? 'line-through' : 'none'
                }}>
                    {todo.title}
                </div>
                <input type="button" value="-"
                       onClick={() => deleteTodo(todo.id)}/></li>)}
        </ul>
    )
}