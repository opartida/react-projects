import React, { useState, useCallback, useEffect, useMemo } from "react";

import Status from "./components/Status";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

function App({ apiUrl = "" }) {
  let [todoList, setTodoList] = useState<TodoItem[]>([]);

  interface TodoItem {
    id: string;
    value: string;
    done: boolean;
    createdAt: Date;
  }

  const fetchData = useCallback((apiUrl: RequestInfo | URL) => {
    fetch(`${apiUrl}/todos`)
      .then((r) => r.json())
      .then((todos) => {
        setTodoList(todos);
      });
  }, []);

  useEffect(() => {
    fetchData(apiUrl);
  }, [apiUrl, fetchData]);

  const handleTodoItemChanged = (todoItemId) => {
    const todoItem = todoList.find((todoItem) => todoItem.id === todoItemId);
    if (todoItem) {
      todoItem.done = !todoItem.done;
      const newTodoList = [...todoList];
      setTodoList(newTodoList);
      modifyTodoItemStateInDb(todoItem);
    }
  };
  const numDoneTodos = useMemo(
    () => todoList.filter((todoItem) => todoItem.done).length,
    [todoList]
  );

  const handleNewTodoAdded = (newTodoItem) => {
    setTodoList([...todoList, newTodoItem]);
    addTodoToDb(newTodoItem);
  };

  const modifyTodoItemStateInDb = (todoItem) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todoItem),
    };
    fetch(`${apiUrl}/todos/${todoItem.id}`, requestOptions).then((response) =>
      response.json()
    );
  };

  const addTodoToDb = async (newTodoItem) => {
    await fetch(`${apiUrl}/todos`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodoItem),
    });    
  };

  return (
    <div className="App container max-w-sm mt-3 font-thin grid gap-6 md:grid-cols-1">
      <Status done={numDoneTodos} undone={todoList.length - numDoneTodos} />
      <AddTodo onTodoAdded={handleNewTodoAdded} />
      <ul className="list-none divide-y divide-gray-200">
        {todoList.map((todo: any, i: number) => (
          <li key={i}>
            <TodoItem
              id={todo.id}
              checked={todo.done}
              value={todo.value}
              onChange={(todoId: any) => handleTodoItemChanged(todoId)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
