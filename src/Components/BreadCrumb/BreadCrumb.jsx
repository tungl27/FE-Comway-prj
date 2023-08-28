import { Fragment, useContext, useState, useEffect } from "react";
import './BreadCrumb.css'
import { useNavigate } from "react-router-dom";
import { BreadcrumbsContext, SetBreadcrumbsContext } from "../../State/BreadcrumbContext";
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

const modelPlace = ['/staff/new', '/staff/detail', '/order/new', '/order/detail', '/order/actual']
export default function Breadcrumb() {
    const [showModal, setShowModal] = useState(false)
    const [index, setIndex] = useState(0)
    let breadcrumbs = [
        { title: "メニュー", url: "/home" }
        // { title: "スタッフ一覧", url: "stafflist" },
    ];
    const url = window.location.href
    const path = url.split('?')[0].split('/')
    if (path.indexOf('staff') !== -1) {
        breadcrumbs.push({
            title: "スタッフ一覧",
            url: "/staff/list"
        })
        if (path.indexOf('new') !== -1) {
            breadcrumbs.push({
                title: "スタッフ登録",
                url: "/staff/new"
            })
        } else
            if (path.indexOf('detail') !== -1) {
                breadcrumbs.push({
                    title: "スタッフ情報編集",
                    url: "/staff/detail"
                })
            }
    } else
        if (path.indexOf('order')) {
            breadcrumbs.push({
                title: "オーダー一覧",
                url: "/order/list"
            })
            if (path.indexOf('new') !== -1) {
                breadcrumbs.push({
                    title: "オーダー登録",
                    url: "/order/new"
                })
            } else
                if (path.indexOf('detail') !== -1) {
                    breadcrumbs.push({
                        title: "オーダー情報編集",
                        url: "/order/detail"
                    })
                } else
                    if (path.indexOf('actual') !== -1) {
                        breadcrumbs.push({
                            title: "オーダー登録",
                            url: "/order/actual"
                        })
                    }

        }

    console.log(path)
    const navigate = useNavigate()
    const doModal = (index) => {
        // console.log(breadcrumbs[[breadcrumbs.length - 1]].url)
        if (modelPlace.indexOf(breadcrumbs[breadcrumbs.length - 1].url) > -1 && index < breadcrumbs.length - 1) {
            setShowModal(true)
            setIndex(index)
        } else if (index < breadcrumbs.length - 1) {
            move(index)
        }
    }

    const move = (index) => {
        if (index < breadcrumbs.length - 1) {
            navigate(breadcrumbs[index].url)
        }
    }
    const directTo = () => {
        if (index < breadcrumbs.length - 1) {
            navigate(breadcrumbs[index].url)
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
                    <button className="btn btn-secondary" onClick={() => directTo()}>No</button>
                </div>
            </ReactModal>
        </Fragment>
    )
}