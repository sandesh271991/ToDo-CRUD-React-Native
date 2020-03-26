/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */

import React, { memo } from 'react';
import Layout from './src/component/Layout';
import TodoList from './src/component/TodoList';
import AddTodoForm from './src/component/AddTodoForm';

import { useInputValue, useTodos } from './src/hooks/todoList';

const App = memo((props) => {
  const { inputValue, changeInput, clearInput } = useInputValue();
  const {
    todos, addTodo, checkTodo, removeTodo,
  } = useTodos();

  const clearInputAndAddTodo = (_) => {
    clearInput();
    addTodo(inputValue);
  };

  return (
    <Layout>
      <AddTodoForm
        inputValue={inputValue}
        changeInput={changeInput}
        onIconPress={clearInputAndAddTodo}
      />
      <TodoList
        items={todos}
        onItemCheck={(idx) => checkTodo(idx)}
        onItemRemove={(idx) => removeTodo(idx)}
      />
    </Layout>
  );
});

export default App;
