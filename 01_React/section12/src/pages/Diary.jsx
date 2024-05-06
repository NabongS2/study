import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Viewer from "../components/Viewer";

import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

import { getStringedDate } from "../util/get-stringed-date";

const Diary = () => {

    const params = useParams();
    const nav = useNavigate();

    usePageTitle(`${params.id}번 일기`);

    const curDiaryItem = useDiary(params.id);
    // useDiary가 마운트 되기 전 undefined 대비하기
    // console.log(curDiaryItem);
    if(!curDiaryItem){
        return <div>데이터 로딩중!</div>;
    }
    const {createDate, emotionId, content} = curDiaryItem;
    const title = getStringedDate(new Date(createDate));

    return (
        <div>
            <Header title={`${title} 기록`}
                leftChild={
                    <Button 
                        onClick={() => nav(-1)}
                        text={"< 뒤로가기"}/>
                }
                rightChild={
                    <Button 
                        onClick={() => nav(`/edit/${params.id}`)}
                        text={"수정하기"}/>
                }
            />
            <Viewer emotionId={emotionId} content={content}/>
        </div>
    )
}
export default Diary;