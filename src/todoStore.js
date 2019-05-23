import React, {useState} from 'react';

export const TodosContext = React.createContext();
export const TodosTitleContext = React.createContext();

export const Store = ({children}) => {

    const titleLabel = 'Add todo\'s';
    const [title, setTitle] = useState('');
    const [todos, addTodo] = useState([]);

    const addTodoByTitle = (title) => {
        if (title) {
            addTodo([...todos, {title, id: Date.now(), hasCompleted: false}]);
            setTitle('');
        }
    };

    return (
        <TodosTitleContext.Provider value={[title, setTitle, titleLabel]}>
            <TodosContext.Provider value={[todos, addTodo, addTodoByTitle]}>
                {children}
            </TodosContext.Provider>
        </TodosTitleContext.Provider>
    )
};