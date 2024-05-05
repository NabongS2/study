import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const DiaryList = ({data}) => {
    const nav = useNavigate();

    const [sortType, setSortType] = useState("latest");

    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    }
    const getSortedData = () => {
        // 새로운 배열으로 정렬 원본 배열을 수정하면 안좋다.
        return data.toSorted((a,b) => {
            if(sortType === 'oldest') {
                return Number(a.createDate) - Number(b.createDate);
            } else {
                return Number(b.createDate) - Number(a.createDate);
            }
        }); // 사전 순으로 정렬 되기 때문에 날짜 순으로 정렬은 직접 구현
    }

    const sortedData = getSortedData();

    return (
        <>
            <div className="DiaryList">
                <div className="menu_bar">
                    <select onChange={onChangeSortType}>
                        <option value={"latest"}>최신순</option>
                        <option value={"oldest"}>오래된 순</option>
                    </select>
                    <Button
                        onClick={()=> nav("/new")}
                        text={"새 일기 쓰기"} type={"POSITIVE"}/>
                </div>
                <div className="list_wrapper">
                    {sortedData.map((item) => 
                        <DiaryItem key={item.id} {...item}/>
                    )}
                </div>
            </div> 
        </>
    )
}

export default DiaryList;