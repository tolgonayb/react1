import React from 'react';
import ToDoSearch from "../todo-search";
import ToDoTitle from "../todo-title";
import ToDoList from "../todo-list";


const ToDoApp = () => {
  return (
    <div>
      <ToDoTitle />
      <ToDoSearch />
      <div>
        <h1>Todo</h1>
        <ToDoList />
      </div>
    </div>
  );
};


export default ToDoApp;
