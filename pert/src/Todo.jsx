import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todoText) => {
    setTodos([...todos, { text: todoText, completed: false }]);
  };

  const handleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <input type="text" onKeyDown={(e) => e.key === 'Enter' && handleAddTodo(e.target.value)} />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="groupbox" checked={todo.completed} onChange={() => handleComplete(index)} />
            {todo.text}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
