const Button = ({ text }) => {

    const test = () => {
        console.log('GOGOG')
    }

    return (
        <button onClick={test}>
            {text}
        </button>
    )
}

export default Button
