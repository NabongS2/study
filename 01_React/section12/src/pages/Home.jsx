import { useState, useContext } from 'react';
import { DiaryStateContext } from '../App';

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import usePageTitle from '../hooks/usePageTitle';

const getMonthlyData = (pivotDate, data) => {

    const beginTime = new Date(
        pivotDate.getFullYear(), pivotDate.getMonth(),
        1, 0, 0, 0
        ).getTime(); // 비교를 위해 숫자 값 형식으로 바꿈

    const endTime = new Date(
        pivotDate.getFullYear(), pivotDate.getMonth() + 1,
        0, 23, 59, 59
        ).getTime(); // 0일은 그 달의 마지막 날로

    return data.filter((item)=>
        beginTime <= item.createDate &&
        item.createDate <= endTime
    )
}

const Home = () => {
    // DiaryStateContext의 데이터를 공급 받을 수 있다.
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());

    const monthlyData = getMonthlyData(pivotDate, data);
    // console.log(monthlyData);

    const onIncreaseMonth = () => { // 날짜 증가
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
    };
    const onDecreaseMonth = () => { // 날짜 감소
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
    };
    usePageTitle("감정 일기장");
    return (
        <>
            <div>
                <Header 
                    title={`${pivotDate.getFullYear()}년 
                    ${pivotDate.getMonth() +1 }월`}
                    leftChild={
                    <Button onClick={onDecreaseMonth}
                        text="<"/>
                    }
                    rightChild={
                    <Button onClick={onIncreaseMonth}
                        text=">"/>
                    }
                />
                <DiaryList data={monthlyData}/>
            </div>
        </>
    )
}
export default Home;