import { Fragment, useContext } from "react";
import './BreadCrumb.css'
import { useNavigate } from "react-router-dom";
import { SetBreadcrumbsContext } from "../../State/BreadcrumbContext";

export default function Breadcrumb({ breadcrumbs }) {

    const SetBreadcrumb = useContext(SetBreadcrumbsContext)

    const navigate = useNavigate()
    const move = (index) => {
        navigate(breadcrumbs[index].url)
        const newBreadcrumbs = breadcrumbs.slice(0,index+1)
        SetBreadcrumb(newBreadcrumbs)
    }
    return (
        <Fragment>
            <div className="breadcrumb">
                <ul className="d-flex items">
                    {breadcrumbs.map((item, index) => {
                        return (
                            <li key={index} onClick={() => move(index)}>
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