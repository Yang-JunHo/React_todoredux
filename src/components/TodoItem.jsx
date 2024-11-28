import React, { useRef, useState } from 'react'
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { todoActions } from '../redux/reducers/todoSlice';
import { useDispatch } from 'react-redux';

const TodoItem = ({item}) => {

  const text = useRef()
  const changetext = useRef()

  const dispatch = useDispatch()

  const [edit, setEdit] = useState(false)
  const [newText, setNewText] = useState(item.text)

  
  const handleCheckChangeBtn = () => {
    dispatch(todoActions.checkChangeTodo({
      complete : !item.complete,
      id : item.id
    }))
  }

  const handleEditChange = () => {
    setEdit(!edit)
  }

  const handleSubmit = () => {
    dispatch(todoActions.textChangeTodo({
      id : item.id,
      text : newText
    }))
    setEdit(!edit)
  }
  
  // [useState 대신 reducer를 사용하는 방법]
  // const textChangeBtn = () => {
  //   dispatch(todoActions.textChangeInputTodo({
  //     id : item.id,
  //     change : true
  //   }))
  // }

  // const handleTextChangeBtn = () => {
  //   dispatch(todoActions.textChangeTodo({
  //     id : item.id,
  //     text : changetext.current.value,
  //     change : !item.change
  //   }))
  // }

  const handleDeleteBtn = () => {
    if (window.confirm("정말 삭제하시겠습니까?")){
      dispatch(todoActions.deleteTodo({
        id : item.id
      }))
    }
  }

  return (
    <li className='todo-item'>

      {/* 미완료 - 완료를 구분하는 체크 버튼 */}
      {
        item.complete === false
        ? <FaRegCircle style={{color : 'lightgray', cursor : 'pointer'}} onClick={handleCheckChangeBtn} />
        : <FaCheckCircle style={{color : 'green', cursor : 'pointer'}} onClick={handleCheckChangeBtn}/>
      }

      {/* 할일 기본 - 할일 완료 - 할일 수정을 구분하는 태그들 */}
      {
        item.complete === false
        ? (edit == false 
          ? <span className='todo-item-content' ref={text}>{item.text}</span>
          : <input type='text' className='todo-item-edit-input' value={newText} ref={changetext} onChange={(e)=>{setNewText(e.target.value)}}/>
          )
        : <span className='todo-item-content-checked'>{item.text}</span>
      }

      {/* 할일 기본 - 할일 완료 - 할일 수정에 따른 해당 아이콘 */}
      {
        item.complete === false
        ? (edit== false
          ? <><button className='todo-item-edit-btn' onClick={handleEditChange}>✍</button>
            <button className='todo-item-delete-btn' onClick={handleDeleteBtn}>🗑</button></>
          :<button className='todo-item-submit-btn' onClick={handleSubmit}>👍</button>
          )
        : <button className='todo-item-delete-btn' onClick={handleDeleteBtn}>🗑</button>
      }

    </li>
  )
}

export default TodoItem