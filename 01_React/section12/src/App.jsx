import './App.css';
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from './pages/Notfound';

// 1. "/" : 모든 페이지를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {

  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  }
  return (
  <>
    {/* 
      페이지가 새로 고침 되지는 않고 필요한 요소만 렌더링 된다. 
      Link는 a 태그 같은 페이지 이동, 하지만 a태그 이용하면 csr 됨
    */}
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
