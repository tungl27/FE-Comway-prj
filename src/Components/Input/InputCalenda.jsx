import { Fragment } from "react"

export default function InputCalenda({ title, value, required, editable, setValue }) {
    const onChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <Fragment>
            <div className="d-flex justify-content-between">
                <label htmlFor={title} className={required ? 'required' : ''}>{title}</label>
                <div>
                    <input className={!editable ? 'read-only' : ''} readOnly={!editable} id={title} name={title} type="date" value={value} placeholder="" title="" onChange={(e) => onChange(e)} />
                    <p className="errorMsg">{editable && 'エラーメッセージXXXX'}</p>
                </div>
            </div>
        </Fragment>
    )
}