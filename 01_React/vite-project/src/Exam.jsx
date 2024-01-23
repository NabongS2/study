import './index.css'

function Exam() {

  return (
    // 항상 태그는 닫아야 하고 박스 안에 감싸져 있어야 함 
    // <></> 빈 요소로 감싸도 됨
    <>
      {/* 스타일 지정하기 className */}
      <button className="color_btn">버튼</button>

      {/* input과 라벨을 지정할 때는 htmlFor */}
      {/* html에 자바스크립트 문법을 넣을려면 {} 안에 쓴다. */}
      <label htmlFor="name">{10+20}</label> <input id="name"/>

      
    </>
  )

}

export default Exam;
