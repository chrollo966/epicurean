import React, { useState } from 'react';

interface Todo {
  value: string;
  id: number;
}

const App: React.VFC = () => {
  
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleOnSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLInputElement>
  ) => {
    e.preventDefault();

    if (!text) return;

    const newTodo: Todo = {
      value: text,
      id: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
    setText('');
  };

  const handleOnEdit = (id: number, value: string) => {
    const newTodos = todos.map
  };

  return (
    <div>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value={"add"} onSubmit={(e) => handleOnSubmit(e)} />
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="text"
                value={todo.value}
                onChange={(e) => e.preventDefault()}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
