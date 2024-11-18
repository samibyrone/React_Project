const CustomButton = (props) => {
    
    const {style, onClick, type, textContent} = props;

    return(
        <button onClick={onClick} className={style} type={type}>{textContent}</button>
    )
}

export default CustomButton;