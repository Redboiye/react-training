import '../styles/KeyPad.css'

export const KeyPad = ({onButtonClick}) => {
    const buttons = [
        "%", "CE", "C", "*",
        "7", "8", "9", "/",
        "4", "5", "6", "+",
        "1", "2", "3", "-",
        "0", ".",
        "=",

    ]
    return (
        <div className="keypad">
            {buttons.map((button) => (
                <button onClick={() => onButtonClick(button)} key={button} className="keypad-button">
                    {button}
                </button>
            ))}


        </div>
    )
}

// onButtonClick ir event ieks button