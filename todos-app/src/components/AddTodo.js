import { useState } from "react";
import { nanoid } from "nanoid";

const AddTodo = ({ onTodoAdded }) => {
  let [value, setValue] = useState("");

  function createTodo() {
    if (value) {
      const newTodo = {
        id: nanoid(),
        value,
        done: false,
        createdAt: Date.now(),
      };
      onTodoAdded(newTodo);
      setValue("");
    }
  }

  return (
    <>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={createTodo}
      >
        Add todo
      </button>
    </>
  );
};

export default AddTodo;
