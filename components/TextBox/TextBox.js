import './TextBox.css'

const TextBox = (props) => {

    const placeholderModified = `${props.placeholder}...`

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input placeholder = {placeholderModified}/>
        </div>
    )
}

export default TextBox