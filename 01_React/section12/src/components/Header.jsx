import "./Header.css";

const Header = ({title, leftChild, rightChild}) => {
    return (
        <>
            <header className="Header">
                <div className="header_left">{leftChild}</div>
                <div className="header_center">{title}</div>
                <div className="header_rigth">{rightChild}</div>
            </header>
        </>
    )
}

export default Header;