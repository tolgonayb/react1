import React from 'react';
import ToDoItem from "../todo-item";


const ToDoList = () => {
  return (
    <div>
      <ul>
        <li>
          <ToDoItem action='drink' target='tea' />
        </li>
        <li>
          <ToDoItem action='make' target='coffee' />
        </li>
        <li>
          <ToDoItem action='write' target='code' />
        </li>
      </ul>
    </div>
  );
};


export default ToDoList;
