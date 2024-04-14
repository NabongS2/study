
const Button = ({text, color, children}) => {
    const onCickButton = (e) => {
        console.log(e);
        console.log(text);
    }

    // 값이 전달 되지 않았을 떄 위험하다.
    return (
        <button 

        onClick={onCickButton}
        // onMouseEnter={onCickButton}

        style={{color : color}}>
        {text} - {color.toUpperCase()}
        {children}
        </button>
    );
};

// 안 넘어 오면 기본 값을 정할 수 있다.
Button.defaultProps = {
    color : "black",
};

export default Button;