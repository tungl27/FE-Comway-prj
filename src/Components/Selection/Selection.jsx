import { Fragment } from "react";
import './Selection.css'

export default function Selection({ id, title, options, required, value, errorMsg, setValue }) {

    const onChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <Fragment>
            <div className="d-flex justify-content-between">
                <label htmlFor={title} className={required ? 'required' : ''}>{title}</label>
                <div>
                    <select title={title} id={id} name={title} value={value}  onChange={(e) => onChange(e)}>
                        <option value={''}></option>
                        {options.map((option, index) => {
                            return <option key={index} value={option.value} >{option.label}</option>
                        })}
                    </select>
                    <p className="errorMsg">{errorMsg}</p>
                </div>
            </div>
        </Fragment>
    )
}