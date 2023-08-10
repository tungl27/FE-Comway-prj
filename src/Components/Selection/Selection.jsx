import { Fragment, useState } from "react";
import './Selection.css'

export default function Selection({ id, title, options, required, value, errorMsg, setValue }) {

    const onChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <Fragment>
            <div className="d-flex justify-content-between">
                <label htmlFor={title}>{title}</label>
                <div>
                    <select id={id} name={title} value={value} onChange={(e) => onChange(e)}>
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