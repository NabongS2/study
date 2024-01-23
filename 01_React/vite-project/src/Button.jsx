export default function MyButton() {
  function handleClick() {
    alert('You clicked me!');
    // return () => console.log("click");
  }

  return  <button onClick={handleClick}>
            Click me
          </button>
    // 함수를 생성함 () 일 경우 리액트가 최초로 렌더링 할 때
    // 이벤트 등록을 함 최초에는 alert => 뒤에는 consloe
    {/* <button onClick={handleClick()}> */}
  
}