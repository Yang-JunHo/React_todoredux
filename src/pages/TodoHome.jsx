import React from 'react'
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

const TodoHome = () => {
  return (
    <div className='todo-container'>
      <h1 className='todo-tit'>❌TodoList⭕</h1>
      <TodoInput/>
      <TodoList type="uncomplete"/>
      <TodoList type="complete"/>
    </div>
  )
}

export default TodoHome