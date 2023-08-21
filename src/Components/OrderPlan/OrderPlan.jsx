import { Fragment, useEffect, useState } from "react";
import Input from "../Input/Input";
import './OrderPlan.css'
import circle from '../../images/u446.svg'
import plus from '../../images/u447.svg'
import $ from 'jquery'

export default function OrderPlan({ data }) {
    const [id, setId] = useState("０００１２３");
    const [name, setName] = useState("全社支払合算システム機能");
    const [orderNo, setOrderNo] = useState("CIS2023–020");
    const [customerName, setCustomeName] = useState("トーテス");
    const [price, setPrice] = useState("4,573");
    const [error, setError] = useState({
        name: "",
        orderNo: "",
        customerName: "",
        price: "",
    });
    let sumYoteiSagyoujikan = 0;
    let sumYoteiNaisyagenka = 0;
    let sumJissekiSagyoujikan = 0;
    let sumJissekiNaisyagenka = 0;

    const yoteiCell = (data) => {
        return (
            data.jouhou.map((jouhou, index) => {
                sumYoteiSagyoujikan += jouhou.yotei.sagyoujikan
                sumYoteiNaisyagenka += jouhou.yotei.naisyagenka
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
                sumJissekiSagyoujikan += jouhou.yotei.sagyoujikan
                sumJissekiNaisyagenka += jouhou.yotei.naisyagenka
                return (
                    <>
                        <td className="naiyo td-cell">{jouhou.jisseki.sagyoujikan}</td>
                        <td className="naiyo td-cell">{jouhou.jisseki.naisyagenka}</td></>
                )
            })
        )
    }

    useEffect(() => {
        const subCatContainer = $(".vertical-scroll-table");
        subCatContainer.on('scroll', function () {
            subCatContainer.scrollTop($(this).scrollTop());
        })
    }, []);
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
                    <img className="absolute-img1" src={circle} alt="" srcSet="" />
                    <img className="absolute-img2" src={plus} alt="" srcSet="" />
                    <div className="d-flex justify-content-between page-body">
                        <div >
                            <table className="first-table">
                                <thead>
                                    <tr>
                                        <td className="table-header">スタッフ氏名</td>
                                        <td className="table-header">職制</td>
                                    </tr>
                                </thead>
                                <tbody className="vertical-scroll-table hide-scroll-bar">
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
                                        <td className="table-cell">宮城</td>
                                        <td className="table-cell">一般</td>
                                    </tr>
                                    <tr>
                                        <td className="table-cell">宮城</td>
                                        <td className="table-cell">一般</td>
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
                        </div>
                        <div className="div-second-table d-flex justify-content-between">
                            <table className="table-gap">
                                <thead>
                                    <tr className="empty-header"></tr>
                                </thead>
                                <tbody className="vertical-scroll-table hide-scroll-bar">
                                    {data.map((data, index) => {
                                        return (<>
                                            <tr key={index} className="gap-row" ><td className="naiyo first-cell">予定</td></tr>
                                            <tr key={2 * index} className="gap-row">
                                                <td className="naiyo jisseki first-cell">実績</td>
                                            </tr>
                                        </>)
                                    })}
                                    <tr className="table-cell-gap">
                                        <td colSpan={2}></td>
                                    </tr>
                                    <tr className="gap-row" ><td className="naiyo first-cell">予定</td></tr>
                                    <tr className="gap-row">
                                        <td className="naiyo jisseki first-cell">実績</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="scroll-table d-flex justify-content-between">

                                <table className="second-table">
                                    <thead>
                                        <tr className="table-column">
                                            <td colSpan={2} className="gatu-cell">4月</td>
                                            <td colSpan={2} className="gatu-cell">5月</td>
                                            <td colSpan={2} className="gatu-cell">6月</td>
                                            <td colSpan={2} className="gatu-cell">7月</td>
                                            <td colSpan={2} className="gatu-cell">8月</td>
                                            <td colSpan={2} className="gatu-cell">9月</td>
                                            <td colSpan={2} className="gatu-cell">10月</td>
                                            <td colSpan={2} className="gatu-cell">11月</td>
                                            <td colSpan={2} className="gatu-cell">12月</td>
                                            <td colSpan={2} className="gatu-cell">1月</td>
                                            <td colSpan={2} className="gatu-cell">2月</td>
                                            <td colSpan={2} className="gatu-cell">3月</td>
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
                                    <tbody className="vertical-scroll-table hide-scroll-bar">
                                        {data.map((data) => {
                                            return (
                                                <>
                                                    <tr className="table-naiyo table-column">
                                                        {/* <td className="naiyo first-cell">予定</td> */}
                                                        {yoteiCell(data)}
                                                    </tr>
                                                    <tr className="table-naiyo jisseki table-colum">
                                                        {/* <td className="naiyo first-cell">実績</td> */}
                                                        {jissekiCell(data)}
                                                    </tr>
                                                </>
                                            )
                                        })}
                                        <tr className="table-cell-gap"></tr>
                                        <tr className="table-naiyo table-column">
                                            {data[0].jouhou.map((jouhou, index) => {
                                                return (
                                                    <>
                                                        <td key={3 * index} className="naiyo td-cell">作業 <br />時間</td>
                                                        <td key={4 * index} className="naiyo td-cell">社内  <br />原価</td>
                                                    </>
                                                )
                                            })}
                                        </tr>
                                        <tr className="table-naiyo jisseki table-colum">
                                            {data[0].jouhou.map((jouhou, index) => {
                                                return (
                                                    <>
                                                        <td key={5 * index} className="naiyo td-cell">作業 <br />時間</td>
                                                        <td key={6 * index} className="naiyo td-cell">社内  <br />原価</td>
                                                    </>
                                                )
                                            })}
                                        </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <thead className="show-scroll-bar">
                                        <tr className="gatu-cell">
                                            <td colSpan={2} className="gatu-cell">合計</td>
                                        </tr>
                                        <tr className="table-column">
                                            <td className="jikan-cell">作業 <br />時間</td>
                                            <td className="genka-cell">作業 <br />時間</td>
                                        </tr>
                                    </thead>
                                    <tbody className="vertical-scroll-table">
                                        {data.map((data, index) => {
                                            console.log(data.jouhou)
                                            let sumYoteiSagoujikan = 0
                                            let sumYoteiNaisyagenka = 0
                                            let sumJissekiSagoujikan = 0
                                            let sumJissekiNaisyagenka = 0
                                            for (const gatu of data.jouhou) {
                                                sumYoteiSagoujikan += gatu.yotei.sagyoujikan === '' ? 0 : parseInt(gatu.yotei.sagyoujikan)
                                                sumYoteiNaisyagenka += gatu.yotei.naisyagenka === '' ? 0 : parseInt(gatu.yotei.naisyagenka)
                                                sumJissekiSagoujikan += gatu.jisseki.sagyoujikan === '' ? 0 : parseInt(gatu.jisseki.sagyoujikan)
                                                sumJissekiNaisyagenka += gatu.jisseki.naisyagenka === '' ? 0 : parseInt(gatu.jisseki.naisyagenka)
                                            }
                                            console.log(sumYoteiSagoujikan, 'jikan')
                                            console.log(sumYoteiNaisyagenka, 'j')
                                            return (<>
                                                <tr key={index + 'sumyotei'} className="table-naiyo table-column" >
                                                    <td className="naiyo td-cell">{sumYoteiSagoujikan}</td>
                                                    <td className="naiyo td-cell">{sumYoteiNaisyagenka}</td>
                                                </tr >
                                                <tr key={2 * index + 'sumjisseki'} className="table-naiyo jisseki table-colum">
                                                    <td className="naiyo td-cell">{sumJissekiSagoujikan}</td>
                                                    <td className="naiyo td-cell">{sumJissekiNaisyagenka}</td>
                                                </tr>
                                            </>)
                                        })}
                                        <tr className="table-cell-gap"></tr>
                                        <tr className="gap-row" >
                                            <td className="naiyo td-cell">{'a'}</td>
                                            <td className="naiyo td-cell">{'b'}</td>
                                        </tr >
                                        <tr className="gap-row">
                                            <td className="naiyo td-cell">{'c'}</td>
                                            <td className="naiyo td-cell">{'d'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="text-center div-button">
                        <button type="button" id="change" className="btn btn-primary">登録</button>
                        <button type="button" id="cancel" className="btn btn-primary">キャンセル</button>
                    </div>
                    <div className="tables-flex d-flex justify-content-between">
                        <table className="table-top">
                            <thead>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={4} className="table-blue col-shadow">予定</td>
                                    <td className="table-blue td-cell-2">受注額（A）</td>
                                    <td className="td-cell-2">4,845,000</td>
                                </tr>
                                <tr>
                                    <td className="table-blue td-cell-2">実行予算(B)</td>
                                    <td className="td-cell-2">4,360,500</td>
                                </tr>
                                <tr>
                                    <td className="table-blue td-cell-2">計画済予算(C)</td>
                                    <td className="td-cell-2">3,562,092</td>
                                </tr>
                                <tr>
                                    <td className="table-blue td-cell-2">計画粗利(D)</td>
                                    <td className="td-cell-2">798,408</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="table-top">
                            <thead>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={4} className="table-orange col-shadow">予定</td>
                                    <td className="table-orange">受注額（A）</td>
                                    <td className="td-cell-2">4,845,000</td>
                                </tr>
                                <tr>
                                    <td className="table-orange">実行予算(B)</td>
                                    <td className="td-cell-2">4,360,500</td>
                                </tr>
                                <tr>
                                    <td className="table-orange">計画済予算(C)</td>
                                    <td className="td-cell-2">3,562,092</td>
                                </tr>
                                <tr>
                                    <td className="table-orange">計画粗利(D)</td>
                                    <td className="td-cell-2">798,408</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}