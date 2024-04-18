import './App.css';
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from './pages/Notfound';

import { getEmtionImage } from './util/get-emotion-image';

function App() {

  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  }
  return (
  <>
    <div>
      <img src={getEmtionImage(1)} />
      <img src={getEmtionImage(2)} />
      <img src={getEmtionImage(3)} />
      <img src={getEmtionImage(4)} />
      <img src={getEmtionImage(5)} />
    </div>
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/new"}>New</Link>
      <Link to={"/diary"}>Diary</Link>
    </div>
    <button onClick={onClickButton}>
      New 페이지로 이동
    </button>
    {/* 
    1. Routes 안에는 Route만 들어갈 수 있다.
    2. Routes 바깥의 요소는 어떤 페이지든 렌더링 된다. */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/new" element={<New/>} />
      <Route path="/diary/:id" element={<Diary/>} />
      {/* Defalut 같은 라우터 주소가 없으면~ */}
      <Route path="*" element={<Notfound/>} />
    </Routes>
  </>
  )
}

export default App;
