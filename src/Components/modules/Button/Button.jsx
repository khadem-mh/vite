import './style.css'

const Button = ({text, bgColor="#E4E4E9", color="black"}) => {

    return(
        <button className='button__main' style={{backgroundColor: bgColor, color: color}}>{text}</button>
    )
}

export default Button