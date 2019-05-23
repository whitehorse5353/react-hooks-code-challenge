import React from 'react';
import {Store} from './todoStore'
import ListTodos from './listTodos'
import TodoInput from './todoInput'


const TodoApp = () => {
    return <>
        <TodoInput/>
        <ListTodos/>
    </>
};

function App() {

    return (
        <div className="App">
            <Store>
                <TodoApp/>
            </Store>
        </div>
    );
}

export default App;
