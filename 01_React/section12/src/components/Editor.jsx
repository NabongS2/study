import Button from "./Button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constants";
import { getStringedDate } from "../util/get-stringed-date";

// 수정하는 함수
const Editor = ({initData, onSubmit}) => {

    // 여러가지 값 받기 객체로 관리
    const [input, setInput] = useState(
        {
            createDate : new Date(),
            emotionId : 3,
            content: "",
        }
    );

    const nav = useNavigate();

    useEffect(() => {
        if(initData){
            setInput({
                ...initData,
                // date 때문에 오류가 발생 할 수 있다. timeStamp 값을 바꿔주자.
                createDate : new Date(Number(initData.createDate)),
            })
        }
    }, [initData])

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