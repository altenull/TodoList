import React from 'react';
import './TodoListTemplate.css';
import FormatListNumberedIcon from 'react-icons/lib/md/format-list-numbered';

const TodoListTemplate = ({palette, form, children}) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        <FormatListNumberedIcon/>Todo List
      </div>
      <section className="colors-wrapper">
        {palette}
      </section>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        {children}
      </section>
    </main>
  );
};

export default TodoListTemplate;