import React, { useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid' 
import { todoActions } from '../redux/reducers/todoSlice';
import { useDispatch } from 'react-redux';

const TodoInput = () => {

  // DOM 요소를 참조해서 접근하기 위해 useRef 선언
  const text = useRef()
    
  // store에 있는 state를 변경하기 위한 요청 -> useDispatch
  const dispatch = useDispatch()

  // 화면이 렌더링 된 직후, 실행할 로직
  useEffect(()=>{
    // textRef에서 참조하고 있는 DOM 요소에 포커싱
    text.current.focus()
  },[])

  // 함수 선언
  const handleAddBtn = () => {
    // console.log('handleAddBtn', text.current.value);
    // console.log('고유한 값 출력', uuidv4());

    if(text.current.value == ""){
      alert("할 일을 작성해 주세요!!!") // 작성한 내용이 없을 시, 알림창 띄우기
    }else{
      // store 안에 있는 reducer를 호출
      // 객체 형태로 전송
      dispatch(todoActions.addTodo({
        id : uuidv4(),
        text : text.current.value,
        complete : false,
        change : false
      }))

      // 입력된 내용을 비우고 + 포커싱
      text.current.value = ""
      text.current.focus()
    }
  }

  return (
    <div className='todo-inputbox'>
      <input type='text' className='todo-inputbox-input' ref={text} placeholder='할 일을 입력하세요~!'></input>
      <input type='button' className='todo-inputbox-add-btn' value='등록' onClick={handleAddBtn}></input>
    </div>
  )
}

export default TodoInput