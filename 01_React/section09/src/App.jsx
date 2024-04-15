import './App.css'
import { useState, useRef, useReducer } from 'react';

import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'


const mockData = [
  {
    id:0,
    isDone : false,
    content : "React 공부하기",
    date : new Date().getTime(),
  },
  {
    id:1,
    isDone : false,
    content : "빨래하기",
    date : new Date().getTime(),
  },
  {
    id:2,
    isDone : false,
    content : "노래 연습하기",
    date : new Date().getTime(),
  },
]

// 변환 하는 함수 (현재 값, dispath의 값)
function reducer(state, action) {
  switch (action.type) {
    case "CREATE" : return [action.data, ...state]; // 새로운 항목 + 예전 항목
    case "UPDATE" : 
      return state.map((item) =>
        item.id === action.targetId ? {...item, isDone : !item.isDone} : item
      );
    case "DELETE" : 
      return state.filter((item) =>
        item.id !== action.targetId
      );
    default : return state;
  }
}

function App() {

  // 컴포넌트 내에 상태 관리 코드가 너무 길어짐
  // State를 관리하는 코드들이 너무 많으면 View 본질을 잃어버림
  // 상태를 관리하는 코드를 빼자
  // 컴포넌트 외부의 상태 관리를 도와주는 useReducer가 있다.
  const [todos, dispatch] = useReducer(reducer, mockData); // (함수, 처음 데이터)
  const idRef = useRef(3);

  const onCreate = (content) => {

    dispatch({
      type : "CREATE",
      data : {
        id: idRef.current++,
        isDone : false,
        content : content,
        date : new Date().getTime(),
      }
    })
  }

  const onUpdate = (targetId) => {

    dispatch({
      type : "UPDATE",
      targetId : targetId,
    })
  }

  const onDelete = (targetId) => {
    dispatch({
      type : "DELETE",
      targetId : targetId,
    })
  }

  return (
    <div className='App'>
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
