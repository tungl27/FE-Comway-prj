import { Fragment } from "react";
import './BreadCrumb.css'

export default function Breadcrumb({ breadcrumbs }) {
    return (
        <Fragment>
            <div className="breadcrumb">
                <ul className="d-flex items">
                    {breadcrumbs.map((item, index) => {
                        return (
                            <li key={index} >
                                <p >
                                    <span className={index < breadcrumbs.length - 1 ? 'text-decor' : ''}>{item.title}</span>
                                    <span className="icon">
                                        {index < breadcrumbs.length - 1 ? ' > ' : ''}
                                    </span>
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Fragment>
    )
}