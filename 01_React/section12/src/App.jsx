import './App.css';
import { useReducer, useRef, createContext } from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from './pages/Notfound';

import Edit from './pages/Edit';
import { useEffect, useState } from 'react';


// 컴포넌트 외부에 상태 관리 코드 분리
function reducer(state, action) {
  let nextState;

  switch(action.type) {
    // 조회 nextState 보관 불필요
    case "INIT" : return action.data;
    case "CREATE" : 
      nextState = [action.data, ...state];
      break;
    case "UPDATE" : 
      nextState = state.map((item) => 
        String(item.id) === String(action.data.id)
          ? action.data 
          : item
      );
      break;
    case "DELETE" : 
      nextState = state.filter((item) => 
        String(item.id) !== String(action.data.id)
      );
      break;
    default : return state;
  }
  localStorage.setItem("diary", JSON.stringify(nextState));

  return nextState;
}

// 하위 컴포넌트에 공급하기
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {

  const [isLoading, setIsLoading] = useState(true);

  // 실제 데이터, 어떻게 변형 = 변형시키는 함수, 초기 값
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0); // id 변수 값

  useEffect(() => {
    const storeData = localStorage.getItem("diary");
    if(!storeData) {
      setIsLoading(false);
      return;
    }
    const parseData = JSON.parse(storeData);

    // 배열 아니면 리턴
    if(!Array.isArray(parseData)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parseData.forEach((item)=> {
        if(Number(item.id) > maxId) {
          maxId = Number(item.id)
        }
      }
    )
    // console.log(maxId);
    idRef.current = maxId + 1;

    dispatch({
      type : "INIT",
      data : parseData,
    })
    setIsLoading(false);
  },[])

  // 새로운 일기 추가
  const onCreate = (createDate, emotionId, content) => {
    dispatch( // 함수 호출
      {
        type : "CREATE",
        data : {
          id : idRef.current++, // 추가 할 때마다 증감
          createDate,
          emotionId,
          content,
        },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch(
      {
        type : "UPDATE",
        data : {
          id,
          createDate,
          emotionId,
          content,
        }
      }
    );
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch(
      {
        type : "DELETE",
        data : {
          id,
        }
      }
    );
  };

  if(isLoading){
    return <div>데이터 로딩 중 입니다 ...</div>;
  }
  return (
  <>

    <DiaryStateContext.Provider value={data}> 
      <DiaryDispatchContext.Provider
          value={{
            onCreate, onUpdate, onDelete,
          }} >   
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/new" element={<New/>} />
          <Route path="/diary/:id" element={<Diary/>} />
          <Route path="/edit/:id" element={<Edit/>} />
          <Route path="*" element={<Notfound/>} />
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  </>
  )
}

export default App;
