import { Fragment } from "react";
import './Input.css'

export default function Input({ title, value, required, editable, setValue, errorMsg }) {

    const onChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <Fragment>
            <div className="d-flex justify-content-between">
                <label htmlFor={title} className={required ? 'required' : '' }>{title}</label>
                <div>
                    <input className={!editable ? 'read-only' : ''} readOnly={!editable} id={title} name={title} type="text" value={value} placeholder="" title="" onChange={(e) => onChange(e)} />
                    <p className="errorMsg">{errorMsg}</p>
                </div>
            </div>
        </Fragment>
    )
}