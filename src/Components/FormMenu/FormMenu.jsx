import { Fragment } from "react"
import './form-menu.css'

export default function Formmenu() {
    return (
        <Fragment>
            <div className="container">
                <div className="form-menu mt-5">
                    <p className="form-title">
                        メニュー画面
                    </p>
                    <div className="d-flex flex-column mb-3 mt-5 text-center">
                        <button type="button" className="btn btn-primary button mt-3">スタッフ管理</button>
                        <button type="button" className="btn btn-primary button mt-3">オーダー管理</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}