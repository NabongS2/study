import './App.css'
import { useState, useRef, useReducer, useCallback } from 'react';

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

  const [todos, dispatch] = useReducer(reducer, mockData); // (함수, 처음 데이터)
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type : "CREATE",
      data : {
        id: idRef.current++,
        isDone : false,
        content : content,
        date : new Date().getTime(),
      }
    })
  },[]);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type : "UPDATE",
      targetId : targetId,
    })
  },[]);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type : "DELETE",
      targetId : targetId,
    })

  },[]);
  // 객체가 다시 리렌더링 되면 주소 값이 달라짐

  // 마운트 될 때만 생성 할 수 있음.
  // const func = useCallback(()=>{},[])

  return (
    <div className='App'>
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
