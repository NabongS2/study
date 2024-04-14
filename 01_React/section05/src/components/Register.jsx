import { useState, useRef } from 'react';
// 간단한 회원 가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {

    const [input, setInput] = useState({
        name : "",
        birth: "",
        country: "",
        bio: "",
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    // let count; // 리렌딩 될 때 마다 0으로 리셋

    const onChange = (e) => {
        countRef.current++;
        // count++; // 변수는 변하면 리렌딩
        console.log(countRef.current); // 수정 횟수를 알 수 있다.

        setInput({
            ...input,
            // []는 JavaScript에서 computed property name 또는 computed key라고 합니다. 
            // 객체의 키 값을 동적으로 지정할 때 사용, 프로퍼티를 재정의
            [e.target.name] : e.target.value,
        })
    }

    const onSubmit = () => {
        if(input.name === "") {
            // 이름을 입력하는 DOM 요소 포커스
            inputRef.current.focus();
        }
    }

    return (
        <div>
            <div>
                <input
                    ref={inputRef}
                    name='name' 
                    value={input.name} // 초기 값으로 설정
                    onChange={onChange}
                    placeholder={"이름"}/>   
            </div>
            <div>
                <input 
                    name='birth' 
                    value={input.birth}
                    onChange={onChange}
                    type="date"/>
            </div>

            <div>
                <select name='country' 
                    value={input.country} onChange={onChange}>
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>

            <div>
                <textarea name='bio' 
                value={input.bio} onChange={onChange} />
            </div>

            <button onClick={onSubmit}
            >제출</button>
        </div>
    )
};

export default Register;