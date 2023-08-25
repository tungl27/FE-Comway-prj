import { Fragment } from "react";
import './Input.css'

export default function Input({ id, title, value, required, editable, setValue, errorMsg, setErrorMsg }) {

    const onChange = (e) => {
        const value = e.target.value.toString().replaceAll(',', '')
        setValue(value)
    }
    return (
        <Fragment>
            <div className="d-flex justify-content-between">
                <label htmlFor={id} className={required ? 'required' : ''}>{title}</label>
                <div>
                    <input className={!editable ? 'read-only input-component' : 'input-component'} readOnly={!editable} id={id} name={title} type="text" value={value} placeholder="" title="" onChange={(e) => onChange(e)} />
                    <p className="errorMsg" id={'erorr' + id}>{errorMsg}</p>
                </div>
            </div>
        </Fragment>
    )
}