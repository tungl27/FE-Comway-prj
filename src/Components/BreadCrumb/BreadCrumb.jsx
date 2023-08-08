import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ breadcrumbs }) {
    return (
        <Fragment>
            <div className="d-flex">
                {breadcrumbs.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.title}
                        </li>
                    )
                })}
            </div>
        </Fragment>
    )
}