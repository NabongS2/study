export default function Usestate({count, handleClick}) {

  return  <button onClick={handleClick}>Clicked {count}</button>
}

// export default function Usestate() {
//   const [count, setCount] = useState(0)
//   function handleClick() {
//     setCount(count + 1);
//   }

//   return  <button onClick={handleClick}>Clicked {count}</button>
// }