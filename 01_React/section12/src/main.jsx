import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// 라우터 추가
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  // App 컴포넌트 감싸기
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
