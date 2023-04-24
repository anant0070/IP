import { useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Walk the dog', completed: true },
    { id: 3, text: 'Do laundry', completed: false },
  ]);

  const [newTodoText, setNewTodoText] = useState('');

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const addTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      text: newTodoText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTodoText('');
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
        }

        li {
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
        }

        span.completed {
          text-decoration: line-through;
        }

        button {
          margin-left: 1rem;
          background-color: #f44336;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;
          cursor: pointer;
        }

        button:hover {
          background-color: #d32f2f;
        }
      `}</style>
    </div>
  );
}
