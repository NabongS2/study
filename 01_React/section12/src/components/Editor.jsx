import Button from "./Button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";

const emotionList = [
    {
        emotionId :1,
        emotionName: "완전 좋음",
    },
    {
        emotionId :2,
        emotionName: "좋음",
    },
    {
        emotionId :3,
        emotionName: "그럭저럭",
    },
    {
        emotionId :4,
        emotionName: "나쁨",
    },
    {
        emotionId :5,
        emotionName: "끔찍함",
    },
]

const getStringedDate = (targetDate) => {
    // 날짜 -> YYYY-MM-DD (09)
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1 ;
    let date = targetDate.getDate();

    if(month<10){
        month=`0${month}`;
    }
    if(date<10){
        date=`0${date}`;
    }

    return `${year}-${month}-${date}`;

}
// 수정하는 함수
const Editor = ({onSubmit}) => {

    // 여러가지 값 받기 객체로 관리
    const [input, setInput] = useState(
        {
            createDate : new Date(),
            emotionId : 3,
            content: "",
        }
    );

    const nav = useNavigate();

    const onChangeInput = (e) => {
        // console.log(e.target.name); // 어떤 요소에 입력이 들어온건지
        // console.log(e.target.value); // 입력된 값이 무엇인지?

        let name = e.target.name;
        let value = e.target.value;

        // 문자열로 들어온 날짜 객체로 변경
        if(name === 'createDate'){
            value = new Date(value)
        }

        setInput({
            ...input,
            [name] : value,
        })
    };

    const onClickSubmitButton = () => {
        onSubmit(input)
    }

    return (
        <>
            <div className="Editor">
                <section className="date_section">
                    <h4>오늘의 날짜</h4>
                    <input 
                        name="createDate" onChange={onChangeInput}
                        value={getStringedDate(input.createDate)} type="date"/>
                </section>
                <section className="emotion_section">
                    <h4>오늘의 감정</h4>
                    <div className="emotion_list_wrapper">
                        {emotionList.map((item) => 
                            <EmotionItem 
                            // 직접 이벤트를 발생 시켜야 한다. input이 아니기 때문에
                            onClick={() => onChangeInput({
                                target : {
                                    name : "emotionId",
                                    value : item.emotionId,
                                }
                            })}
                            key={item.emotionId} {...item} 
                            isSelected={item.emotionId === input.emotionId} />)}
                    </div>
                </section>
                <section className="content_section">
                    <h4>오늘의 일기</h4>
                    <textarea 
                        name="content"
                        value={input.content}
                        onChange={onChangeInput}
                        placeholder="오늘은 어땠나요?"/>
                </section>
                <section className="button_section">
                    <Button 
                        onClick={() => nav(-1)}
                        text={"취소하기"}/>
                    <Button
                        onClick={onClickSubmitButton}
                        text={"작성하기"} type={"POSITIVE"}/>
                </section>
            </div> 
        </>
    )
}

export default Editor;