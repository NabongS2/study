import './App.css';
import { useReducer, useRef, createContext } from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from './pages/Notfound';

import Edit from './pages/Edit';

const mockData = [
  {
    id: 1,
    createDate : new Date("2024-05-05").getTime(),
    emotionId : 1,
    content : "1번 일기 내용",
  },
  {
    id: 2,
    createDate : new Date("2024-05-04").getTime(),
    emotionId : 2,
    content : "2번 일기 내용",
  },
  {
    id: 3,
    createDate : new Date("2024-04-01").getTime(),
    emotionId : 3,
    content : "3번 일기 내용",
  },
]

// 컴포넌트 외부에 상태 관리 코드 분리
function reducer(state, action) {

  switch(action.type) {
    case "CREATE" : return [action.data, ...state];
    case "UPDATE" : 
      return state.map((item) => 
        String(item.id) === String(action.data.id)
          ? action.data 
          : item
      );
    case "DELETE" : 
      return state.filter((item) => 
        String(item.id) !== String(action.data.id)
      )
    default : return state;
  }

}

// 하위 컴포넌트에 공급하기
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  // 실제 데이터, 어떻게 변형 = 변형시키는 함수, 초기 값
  const [data, dispatch] = useReducer(reducer, mockData);
  // id 변수 값
  const idRef = useRef(3);

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
