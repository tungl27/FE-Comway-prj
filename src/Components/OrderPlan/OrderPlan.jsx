import { Fragment, useState } from "react";
import Input from "../Input/Input";
import './OrderPlan.css'

export default function OrderPlan({ data }) {
    const [id, setId] = useState("０００１２３");
    const [name, setName] = useState("全社支払合算システム機能");
    const [orderNo, setOrderNo] = useState("CIS2023–020");
    const [customerName, setCustomeName] = useState("トーテス");
    const [price, setPrice] = useState("2023-08-04");
    const [error, setError] = useState({
        name: "",
        orderNo: "",
        customerName: "",
        price: "",
    });

    const yoteiCell = (data) => {
        return (
            data.jouhou.map(jouhou => {
                return (
                    <>
                        <td className="naiyo td-cell">{jouhou.yotei.sagyoujikan}</td>
                        <td className="naiyo td-cell">{jouhou.yotei.naisyagenka}</td></>
                )
            })
        )
    }
    const jissekiCell = (data) => {
        return (
            data.jouhou.map(jouhou => {
                return (
                    <>
                        <td className="naiyo td-cell">{jouhou.jisseki.sagyoujikan}</td>
                        <td className="naiyo td-cell">{jouhou.jisseki.naisyagenka}</td></>
                )
            })
        )
    }
    return (
        <Fragment>
            <div className="container">
                <div className="form-order-plan">
                    <div>
                        <p className="form-title">
                            オーダー実績入力画面
                        </p>
                        <div className="order-plan-inputs-group">
                            <Input id={'orderNo'} value={orderNo} required={false} setValue={setOrderNo} title={'オーダーNo.'} editable={true} errorMsg={error.orderNo}></Input>
                            <Input id={'customerName'} value={customerName} required={false} setValue={setCustomeName} title={'顧客名'} editable={true} ></Input>
                            <Input id={'name'} value={name} required={false} setValue={setName} title={'案件名'} editable={true} errorMsg={error.name}></Input>
                            <Input id={'price'} value={price} required={false} setValue={setPrice} title={'社内単金'} editable={true} errorMsg={error.price}></Input>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between page-body">
                        <table className="first-table">
                            <thead>
                                <tr>
                                    <td className="table-header">スタッフ氏名</td>
                                    <td className="table-header">職制</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="table-cell">浦川</td>
                                    <td className="table-cell">一般</td>
                                </tr>
                                <tr>
                                    <td className="table-cell">高原</td>
                                    <td className="table-cell">一般</td>
                                </tr>
                                <tr>
                                    <td className="table-cell">稲田</td>
                                    <td className="table-cell">一般</td>
                                </tr>
                                <tr>
                                    <td className="table-cell">東田</td>
                                    <td className="table-cell">BP</td>
                                </tr>
                                <tr>
                                    <td className="table-cell">宮城</td>
                                    <td className="table-cell">一般</td>
                                </tr>
                                <tr>
                                    <td className="table-cell-gap" colSpan={2}></td>
                                </tr>
                                <tr>
                                    <td className="table-cell" colSpan={2}>合計</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="div-second-table">
                            <table className="second-table">
                                <thead>
                                    <tr className="table-column">
                                        <td rowSpan={2}></td>
                                        {data[0].jouhou.map((jouhou) => {
                                            return <td colSpan={2} className="gatu-cell">{jouhou.gatu + '月'}</td>

                                        })}
                                    </tr>
                                    <tr className="table-column">
                                        {data[0].jouhou.map((jouhou) => {
                                            return (
                                                <>
                                                    <td className="jikan-cell">作業 <br />時間</td>
                                                    <td className="genka-cell">社内  <br />原価</td>
                                                </>
                                            )
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((data) => {
                                        return (
                                            <>
                                                <tr className="table-naiyo table-column">
                                                    <td className="naiyo first-cell">予定</td>
                                                    {yoteiCell(data)}
                                                </tr>
                                                <tr className="table-naiyo jisseki table-colum">
                                                    <td className="naiyo first-cell">実績</td>
                                                    {jissekiCell(data)}
                                                </tr>
                                            </>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <table>
                            <thead></thead>
                        </table>
                    </div>
                    <div className="text-center">
                        <button type="button" id="change" className="btn btn-primary">更新</button>
                        <button type="button" id="cancel" className="btn btn-primary">キャンセル</button>
                    </div>
                    <p className="message">
                        オーダー更新が完了できました！
                    </p>
                </div>
            </div>
        </Fragment>
    )
}