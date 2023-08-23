import { Fragment, useEffect, useState } from "react";
import Input from "../Input/Input";
import './OrderPlan.css'
import circle from '../../images/u446.svg'
import plus from '../../images/u447.svg'
import $ from 'jquery'

export default function OrderPlan({ data }) {
    const [id, setId] = useState("０００１２３");
    const [name, setName] = useState(data.projectData === undefined ? '' : data.projectData.project_name);
    const [orderNo, setOrderNo] = useState(data.projectData === undefined ? '' : data.projectData.order_number);
    const [customerName, setCustomeName] = useState(data.projectData === undefined ? '' : data.projectData.client_name);
    const [price, setPrice] = useState(data.projectData === undefined ? '' : data.projectData.internal_unit_price);
    const [error, setError] = useState({
        name: "",
        orderNo: "",
        customerName: "",
        price: "",
    });
    console.log(data.projectData === undefined)
    console.log(data.goukei)

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
                        <div>
                            <table className="first-table">
                                <thead>
                                    <tr>
                                        <td className="table-header">スタッフ氏名</td>
                                        <td className="table-header">職制</td>
                                    </tr>
                                </thead>
                                <tbody className="vertical-scroll-table hide-scroll-bar">
                                    {data.details && data.details.map((detail, index) => {
                                        return (
                                            <tr key={'staff' + index}>
                                                <td className="table-cell">{detail.staffData.full_name}</td>
                                                <td className="table-cell">{detail.staffData.staff_type === 0 ? '一般' : 'パートナー'}</td>
                                            </tr>
                                        )
                                    })}
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
                                    {data.details && data.details.map((detail, index) => {
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
                                            <td className="jikan-cell">作業 <br />時間</td>
                                            <td className="genka-cell">社内  <br />原価</td>
                                            <td className="jikan-cell">作業 <br />時間</td>
                                            <td className="genka-cell">社内  <br />原価</td>
                                            <td className="jikan-cell">作業 <br />時間</td>
                                            <td className="genka-cell">社内  <br />原価</td>
                                            <td className="jikan-cell">作業 <br />時間</td>
                                            <td className="genka-cell">社内  <br />原価</td>
                                            <td className="jikan-cell">作業 <br />時間</td>
                                            <td className="genka-cell">社内  <br />原価</td>
                                            <td className="jikan-cell">作業 <br />時間</td>
                                            <td className="genka-cell">社内  <br />原価</td>
                                            <td className="jikan-cell">作業 <br />時間</td>
                                            <td className="genka-cell">社内  <br />原価</td>
                                            <td className="jikan-cell">作業 <br />時間</td>
                                            <td className="genka-cell">社内  <br />原価</td>
                                            <td className="jikan-cell">作業 <br />時間</td>
                                            <td className="genka-cell">社内  <br />原価</td>
                                            <td className="jikan-cell">作業 <br />時間</td>
                                            <td className="genka-cell">社内  <br />原価</td>
                                            <td className="jikan-cell">作業 <br />時間</td>
                                            <td className="genka-cell">社内  <br />原価</td>
                                            <td className="jikan-cell">作業 <br />時間</td>
                                            <td className="genka-cell">社内  <br />原価</td>
                                        </tr>
                                    </thead>
                                    <tbody className="vertical-scroll-table hide-scroll-bar">
                                        {data.details && data.details.map((detail) => {
                                            console.log(detail)
                                            return (
                                                <>
                                                    <tr className="table-naiyo table-column">
                                                        {/* <td className="naiyo first-cell">予定</td> */}
                                                        {/* {yoteiCell(detail, data.projectData.internal_unit_price)} */}
                                                        <td className="naiyo td-cell yotei">{detail.planActualData.this_year_04_plan}</td>
                                                        <td className="naiyo td-cell yotei">{detail.planActualData.this_year_04_plan * data.projectData.internal_unit_price}</td>
                                                        <td className="naiyo td-cell yotei">{detail.planActualData.this_year_05_plan}</td>
                                                        <td className="naiyo td-cell yotei">{detail.planActualData.this_year_05_plan * data.projectData.internal_unit_price}</td>
                                                        <td className="naiyo td-cell yotei">{detail.planActualData.this_year_06_plan}</td>
                                                        <td className="naiyo td-cell yotei">{detail.planActualData.this_year_06_plan * data.projectData.internal_unit_price}</td>
                                                        <td className="naiyo td-cell yotei">{detail.planActualData.this_year_07_plan}</td>
                                                        <td className="naiyo td-cell yotei">{detail.planActualData.this_year_07_plan * data.projectData.internal_unit_price}</td>
                                                        <td className="naiyo td-cell yotei">{detail.planActualData.this_year_08_plan}</td>
                                                        <td className="naiyo td-cell yotei">{detail.planActualData.this_year_08_plan * data.projectData.internal_unit_price}</td>
                                                        <td className="naiyo td-cell yotei">{detail.planActualData.this_year_09_plan}</td>
                                                        <td className="naiyo td-cell yotei">{detail.planActualData.this_year_09_plan * data.projectData.internal_unit_price}</td>
                                                        <td className="naiyo td-cell yotei">{detail.planActualData.this_year_10_plan}</td>
                                                        <td className="naiyo td-cell yotei">{detail.planActualData.this_year_10_plan * data.projectData.internal_unit_price}</td>
                                                        <td className="naiyo td-cell yotei">{detail.planActualData.this_year_11_plan}</td>
                                                        <td className="naiyo td-cell yotei">{detail.planActualData.this_year_11_plan * data.projectData.internal_unit_price}</td>
                                                        <td className="naiyo td-cell yotei">{detail.planActualData.this_year_12_plan}</td>
                                                        <td className="naiyo td-cell yotei">{detail.planActualData.this_year_12_plan * data.projectData.internal_unit_price}</td>
                                                        <td className="naiyo td-cell yotei">{detail.planActualData.nextyear_01_plan}</td>
                                                        <td className="naiyo td-cell yotei">{detail.planActualData.nextyear_01_plan * data.projectData.internal_unit_price}</td>
                                                        <td className="naiyo td-cell yotei">{detail.planActualData.nextyear_02_plan}</td>
                                                        <td className="naiyo td-cell yotei">{detail.planActualData.nextyear_02_plan * data.projectData.internal_unit_price}</td>
                                                        <td className="naiyo td-cell yotei">{detail.planActualData.nextyear_03_plan}</td>
                                                        <td className="naiyo td-cell yotei">{detail.planActualData.nextyear_03_plan * data.projectData.internal_unit_price}</td>
                                                    </tr >
                                                    <tr className="table-naiyo jisseki table-colum">
                                                        {/* <td className="naiyo first-cell">実績</td> */}
                                                        {/* {jissekiCell(detail, data.projectData.internal_unit_price)} */}
                                                        <td className="naiyo td-cell jisseki">{detail.planActualData.this_year_04_actual}</td>
                                                        <td className="naiyo td-cell jisseki">{detail.planActualData.this_year_04_actual * data.projectData.internal_unit_price}</td>
                                                        <td className="naiyo td-cell jisseki">{detail.planActualData.this_year_05_actual}</td>
                                                        <td className="naiyo td-cell jisseki">{detail.planActualData.this_year_05_actual * data.projectData.internal_unit_price}</td>
                                                        <td className="naiyo td-cell jisseki">{detail.planActualData.this_year_06_actual}</td>
                                                        <td className="naiyo td-cell jisseki">{detail.planActualData.this_year_06_actual * data.projectData.internal_unit_price}</td>
                                                        <td className="naiyo td-cell jisseki">{detail.planActualData.this_year_07_actual}</td>
                                                        <td className="naiyo td-cell jisseki">{detail.planActualData.this_year_07_actual * data.projectData.internal_unit_price}</td>
                                                        <td className="naiyo td-cell jisseki">{detail.planActualData.this_year_08_actual}</td>
                                                        <td className="naiyo td-cell jisseki">{detail.planActualData.this_year_08_actual * data.projectData.internal_unit_price}</td>
                                                        <td className="naiyo td-cell jisseki">{detail.planActualData.this_year_09_actual}</td>
                                                        <td className="naiyo td-cell jisseki">{detail.planActualData.this_year_09_actual * data.projectData.internal_unit_price}</td>
                                                        <td className="naiyo td-cell jisseki">{detail.planActualData.this_year_10_actual}</td>
                                                        <td className="naiyo td-cell jisseki">{detail.planActualData.this_year_10_actual * data.projectData.internal_unit_price}</td>
                                                        <td className="naiyo td-cell jisseki">{detail.planActualData.this_year_11_actual}</td>
                                                        <td className="naiyo td-cell jisseki">{detail.planActualData.this_year_11_actual * data.projectData.internal_unit_price}</td>
                                                        <td className="naiyo td-cell jisseki">{detail.planActualData.this_year_12_actual}</td>
                                                        <td className="naiyo td-cell jisseki">{detail.planActualData.this_year_12_actual * data.projectData.internal_unit_price}</td>
                                                        <td className="naiyo td-cell jisseki">{detail.planActualData.nextyear_01_actual}</td>
                                                        <td className="naiyo td-cell jisseki">{detail.planActualData.nextyear_01_actual * data.projectData.internal_unit_price}</td>
                                                        <td className="naiyo td-cell jisseki">{detail.planActualData.nextyear_02_actual}</td>
                                                        <td className="naiyo td-cell jisseki">{detail.planActualData.nextyear_02_actual * data.projectData.internal_unit_price}</td>
                                                        <td className="naiyo td-cell jisseki">{detail.planActualData.nextyear_03_actual}</td>
                                                        <td className="naiyo td-cell jisseki">{detail.planActualData.nextyear_03_actual * data.projectData.internal_unit_price}</td>
                                                    </tr>
                                                </>
                                            )
                                        })}
                                        <tr className="table-cell-gap"></tr>
                                        <tr className="table-naiyo table-column">
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikan04gatu}</td>
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikan04gatu * data.projectData.internal_unit_price}</td>
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikan05gatu}</td>
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikan05gatu * data.projectData.internal_unit_price}</td>
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikan06gatu}</td>
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikan06gatu * data.projectData.internal_unit_price}</td>
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikan07gatu}</td>
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikan07gatu * data.projectData.internal_unit_price}</td>
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikan08gatu}</td>
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikan08gatu * data.projectData.internal_unit_price}</td>
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikan09gatu}</td>
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikan09gatu * data.projectData.internal_unit_price}</td>
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikan10gatu}</td>
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikan10gatu * data.projectData.internal_unit_price}</td>
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikan11gatu}</td>
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikan11gatu * data.projectData.internal_unit_price}</td>
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikan12gatu}</td>
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikan12gatu * data.projectData.internal_unit_price}</td>
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikan01gatu}</td>
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikan01gatu * data.projectData.internal_unit_price}</td>
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikan02gatu}</td>
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikan02gatu * data.projectData.internal_unit_price}</td>
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikan03gatu}</td>
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikan03gatu * data.projectData.internal_unit_price}</td>
                                        </tr>
                                        <tr className="table-naiyo jisseki table-colum">
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikan04gatu}</td>
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikan04gatu * data.projectData.internal_unit_price}</td>
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikan05gatu}</td>
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikan05gatu * data.projectData.internal_unit_price}</td>
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikan06gatu}</td>
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikan06gatu * data.projectData.internal_unit_price}</td>
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikan07gatu}</td>
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikan07gatu * data.projectData.internal_unit_price}</td>
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikan08gatu}</td>
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikan08gatu * data.projectData.internal_unit_price}</td>
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikan09gatu}</td>
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikan09gatu * data.projectData.internal_unit_price}</td>
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikan10gatu}</td>
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikan10gatu * data.projectData.internal_unit_price}</td>
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikan11gatu}</td>
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikan11gatu * data.projectData.internal_unit_price}</td>
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikan12gatu}</td>
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikan12gatu * data.projectData.internal_unit_price}</td>
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikan01gatu}</td>
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikan01gatu * data.projectData.internal_unit_price}</td>
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikan02gatu}</td>
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikan02gatu * data.projectData.internal_unit_price}</td>
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikan03gatu}</td>
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikan03gatu * data.projectData.internal_unit_price}</td>
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
                                        {data.details && data.details.map((detail, index) => {
                                            return (<>
                                                <tr key={index + 'sumyotei'} className="table-naiyo table-column" >
                                                    <td className="naiyo td-cell">{detail.goukei.yoteiJikan}</td>
                                                    <td className="naiyo td-cell">{detail.goukei.yoteiGenka}</td>
                                                </tr >
                                                <tr key={2 * index + 'sumjisseki'} className="table-naiyo jisseki table-colum">
                                                    <td className="naiyo td-cell">{detail.goukei.jissekiJikan}</td>
                                                    <td className="naiyo td-cell">{detail.goukei.jissekiGenka}</td>
                                                </tr>
                                            </>)
                                        })}
                                        <tr className="table-cell-gap"></tr>
                                        <tr className="gap-row" >
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikanGoukei}</td>
                                            <td className="naiyo td-cell">{data.goukei.yoteiJikanGoukei * data.projectData.internal_unit_price}</td>
                                        </tr >
                                        <tr className="gap-row">
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikanGoukei}</td>
                                            <td className="naiyo td-cell">{data.goukei.jissekiJikanGoukei * data.projectData.internal_unit_price}</td>
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