import './App.css'
import { Fragment } from "react";
import Exam from "./Exam.jsx";
import Profile from "./Profile.jsx";
import Product from "./Product.jsx";
import Button from "./Button.jsx";
import Usestate from "./Usestate.jsx";

const arr= [1,2,3,4,5];

const user1 = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const user2 = {
  // name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 0,
};

function App() {
  
  // jsx 문법 안에서는 컴포넌트는 대문자
  // return (<Exam />)
  return (
    // <div>
    //   <Profile user={user1} />
    //   <Profile user={user2} />
    // </div>
    <Usestate />
  )

  // 비어 있는 요소에 Key를 써야할 때는 Fragment
  // return arr.map(v=> <>{v}</>) // 오류남
  // return arr.map(v=> <Fragment key={v}>{v}</Fragment>)


}

export default App
