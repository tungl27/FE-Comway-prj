import { Fragment } from "react"

export default function InputCalenda({ id, title, value, required, editable, setValue, errorMsg }) {
    const onChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <Fragment>
            <div className="d-flex justify-content-between">
                <label htmlFor={id} className={required ? 'required' : ''}>{title}</label>
                <div>
                    <input id={id} className={!editable ? 'read-only' : ''}
                        readOnly={!editable}
                        name={title} type="date" value={value} placeholder="" title=""
                        onChange={(e) => onChange(e)}
                    />
                    <p className="errorMsg">{errorMsg}</p>
                </div>
            </div>
        </Fragment>
    )
}