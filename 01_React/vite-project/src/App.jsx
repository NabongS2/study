import './App.css'
import { useState } from "react";
import Usestate from "./Usestate.jsx";

function App() {

  // 데이터 공유하기
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1);
  }

  // 리액트는 단 방향이라 위에서 아래로만 전달 할 수 있다.
  return (
    <>
      <Usestate count={count} handleClick={handleClick}/>
      <Usestate count={count} handleClick={handleClick}/>
      <Usestate count={count} handleClick={handleClick}/>
      <Usestate count={count} handleClick={handleClick}/>
    </>
  )

}

export default App
