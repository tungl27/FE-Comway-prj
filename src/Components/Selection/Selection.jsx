import { Fragment, useState } from "react";
import './Selection.css'

export default function Selection({ title, options, required, selected, errorMsg }) {

    const [input, setInput] = useState(options[selected].value)

    const onChange = (e) => {
        setInput(e.target.value)
    }
    return (
        <Fragment>
            <div className="d-flex justify-content-between">
                <label htmlFor={title}>{title}</label>
                <div>
                    <select name={title} value={input} onChange={(e) => onChange(e)}>
                        {options.map((option, index) => {
                            return <option key={index} value={option.value}>{option.label}</option>
                        })}
                    </select>
                    <p className="errorMsg">{errorMsg}</p>
                </div>
            </div>
        </Fragment>
    )
}