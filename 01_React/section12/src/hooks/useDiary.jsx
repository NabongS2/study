import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App"

// use를 붙이면 이제 이거는 커스텀 훅이야.
const useDiary = (id) => {

    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurentDiaryItem] = useState();

    const nav = useNavigate();

    useEffect(() => {

        const currentDiaryItem = data.find((item) => 
            String(item.id) === String(id)
        )

        if(!currentDiaryItem){
            window.alert("존재하지 않는 일기 입니다.");
            // 마운트 된 다음에 동작할 수 있음
            nav("/",{replace : true} );
        }
        setCurentDiaryItem(currentDiaryItem);

    } , [id, data])

    return curDiaryItem;

}

export default useDiary;