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
                                {item.title} {index < breadcrumbs.length - 1 ? ' > ' : ''}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Fragment>
    )
}