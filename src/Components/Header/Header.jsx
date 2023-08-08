import { Fragment } from "react";
import './header.css'
import circle from '../../images/u5.svg'
import stick from '../../images/u6.svg'

export default function Header({ account }) {
    return (
        <Fragment>
            <div className="header">
                <p className="title">
                    オーダー実績管理システム
                </p>
                <img className="circle" src={circle} alt="" srcSet="" />
                <img className="stick" src={stick} alt="" srcSet="" />
                <div className="logout">ログアウト</div>
            </div>
        </Fragment>
    )
}