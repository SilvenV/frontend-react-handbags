function Button({ textValue, isDisabled }) {
    return (
        <button onClick={() => console.log(textValue)} disabled={isDisabled}>{textValue}</button>
    )
}

export default Button;