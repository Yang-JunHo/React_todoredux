import React from 'react'
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList = ({type}) => {

  const addedTodo = useSelector(state => state.todo.todos)
  // console.log('addedTodo', addedTodo);

  const filteredTodos =
  type === 'uncomplete' 
  ? addedTodo.filter(item => item.complete == false)  
  : addedTodo.filter(item => item.complete == true);
  

  return (
    <div className ='todo-list'>
      <p>{type === 'uncomplete' ? '해야할 일' : '완료된 일'} : {filteredTodos.length}개</p>
      <ul className ='todo-list-ul'>
        {filteredTodos.map(item => <TodoItem key={item.id} item={item}/>)}
      </ul>
    </div>
  )
}

export default TodoList

/*
  [map, filter]  

  배열.map(item => item.text) 

  1) 전혀 생략 없이 full 
  array.map((item, idx) => {
    return <p>{item}</p>
  })

  2) 만약에 item 하나만 매개변수? 
  array.map(item => {
    return <p>{item}</p>
  })

  3) return 문 쓰기 싫음 (중괄호 ->소괄호)
  array.map(item => (
    <p>{item}</p>
  ))

  4) 실행문이 한줄
  array.map(item => <p>{item}</p>)
*/