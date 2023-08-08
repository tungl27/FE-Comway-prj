import { Fragment } from "react";
import './Selection.css'

export default function Selection({ title, options, required, selected }) {
    return (
        <Fragment>
            <div className="d-flex justify-content-between">
                <label htmlFor={title}>{title}</label>
                <div>
                    <select name={title} value={options[selected].value}>
                        {options.map((option, index) => {
                            return <option key={index} value={option.value}>{option.label}</option>
                        })}
                    </select>
                    <p className="errorMsg">エラーメッセージXXXX</p>
                </div>
            </div>
        </Fragment>
    )
}