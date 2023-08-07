import { Fragment } from "react";
import './header.css'

export default function Header({ account }) {
    return (
        <Fragment>
            <div className="header">
                <p className="title">
                    オーダー受注支払合算システム
                </p>
                <div className="logout">ログアウト</div>
            </div>
        </Fragment>
    )
}