import "./Button.css";

// 버튼 안의 텍스트와 어떤 버튼인지 종류 받기
const Button = ({text, type, onClick}) => {
    return (
        <>
            <button 
                onClick={onClick}
                className={`Button Button_${type}`}>
                {text}
            </button>
        </>
    )
}

export default Button;