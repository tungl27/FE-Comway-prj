import { Fragment, useContext, useState } from "react";
import './BreadCrumb.css'
import { useNavigate } from "react-router-dom";
import { SetBreadcrumbsContext } from "../../State/BreadcrumbContext";
import ReactModal from "react-modal";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const modelPlace = ['/staff/new', '/staff/view', 'order/new', 'order/view']
export default function Breadcrumb({ breadcrumbs }) {
    const [showModal, setShowModal] = useState(false)
    const [index, setIndex] = useState(0)
    
    const SetBreadcrumb = useContext(SetBreadcrumbsContext)

    const navigate = useNavigate()
    const doModal = (index) => {
        console.log(breadcrumbs[[breadcrumbs.length - 1]].url)
        if(modelPlace.indexOf(breadcrumbs[breadcrumbs.length - 1].url) > -1){
            setShowModal(true)
            setIndex(index)
        }else{
            move()
        }
    }
    const move = () => {
        if (index < breadcrumbs.length - 1) {
            navigate(breadcrumbs[index].url)
            const newBreadcrumbs = breadcrumbs.slice(0, index + 1)
            SetBreadcrumb(newBreadcrumbs)
        }
    }
    return (
        <Fragment>
            <div className="breadcrumb">
                <ul className="d-flex items">
                    {breadcrumbs.map((item, index) => {
                        return (
                            <li key={index} onClick={() => doModal(index)}>
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
            <ReactModal isOpen={showModal} style={customStyles} ariaHideApp={false} >
                <p>Do you want to save edited data?</p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary" onClick={() => setShowModal(false)}>yes</button>
                    <button className="btn btn-secondary" onClick={() => move()}>No</button>
                </div>
            </ReactModal>
        </Fragment>
    )
}