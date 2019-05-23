import React, {useRef, useContext} from "react";
import {TodosTitleContext, TodosContext} from './todoStore';

export default function TodoInput() {
    const todoInput = useRef();
    const [title, setTitle, titleLabel] = useContext(TodosTitleContext);
    const [, , addTodoByTitle] = useContext(TodosContext);

    const addTitle = (e) => {
        if (e.keyCode === 13 || e.type === 'click') {
            addTodoByTitle(todoInput.current.value);
        } else {
            setTitle(todoInput.current.value);
        }
    };

    return (
        <div>
            <input type="text" ref={todoInput} value={title} onChange={addTitle} onKeyUp={addTitle}
                   placeholder={titleLabel}/>
            <input type="button" value="+" onClick={addTitle}/>
        </div>
    )
}