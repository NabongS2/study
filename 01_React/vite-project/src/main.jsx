import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> => 두번 클릭 되는 문제점 지워주자 
  //문제가 있는지 찾느라 두번 개발환경에서만 먼저 찾아줌
  <App />
)
