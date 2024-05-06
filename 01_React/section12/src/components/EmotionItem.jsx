import { getEmotionImage } from "../util/get-emotion-image";
import "./EmotionItem.css";

const EmotionItem = ({emotionId, emotionName, isSelected, onClick}) => {
    
    return (
        <>
            <div
            onClick={onClick} // 전달까지 해줘야 함
            className={`EmotionItem 
            ${isSelected ? `EmotionItem_on_${emotionId}` : "" }`} >
                <img className="emotion_img"
                    src={getEmotionImage(emotionId)} />
                <div className="emotion_name">
                    {emotionName}
                </div>
            </div> 
        </>
    )
}

export default EmotionItem;