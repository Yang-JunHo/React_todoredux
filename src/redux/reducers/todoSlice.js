import {createSlice} from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name : 'todo',
    initialState : {
        todos : []
    },

    reducers : {
        /*
            1. addTodo : todos 배열에 할 일을 추가한다.
            2. checkChangeTodo : 선택한 할 일의 완료여부를 수정한다.
            3. textChangeTodo : 선택한 할 일의 내용을 수정한다.
            4. deleteTodo : 선택한 할 일을 삭제한다.
        */
        addTodo(state, action){
            // state.todos = [... state.todos, action.payload]
            state.todos.push(action.payload)
            // console.log(state.todos);
        },
        checkChangeTodo(state, action){
            let targetTodo = state.todos.find(item => item.id == action.payload.id)
            if (targetTodo) {
                targetTodo.complete = action.payload.complete;
            }
        },
        // textChangeInputTodo(state, action){
        //     let targetTodo = state.todos.find(item => item.id == action.payload.id)
        //     if (targetTodo) {
        //         targetTodo.change = action.payload.change
        //     }
        // },
        textChangeTodo(state, action){
            let targetTodo = state.todos.find(item => item.id == action.payload.id)
            if (targetTodo) {
                targetTodo.text = action.payload.text;
                targetTodo.change = action.payload.change;
            }
        },
        deleteTodo(state, action){
            let filteredTodo = state.todos.filter(item => item.id != action.payload.id)
            state.todos = filteredTodo
        }
    }
})

// Component에서 reducer함수를 실행할 수 있도록 내보내기
export const todoActions = todoSlice.actions

// store에서 reducer에 접근할 수 있도록 내보내기
export default todoSlice.reducer