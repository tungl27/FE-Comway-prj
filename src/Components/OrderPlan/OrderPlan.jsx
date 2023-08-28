import { Fragment, useEffect, useState } from "react";
import Input from "../Input/Input";
import './OrderPlan.css'
import circle from '../../images/u446.svg'
import plus from '../../images/u447.svg'
import $ from 'jquery'
import axios from "axios";
import { REGIST_ACTUAL_PLAN } from "../../theme/configApi";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";

export default function OrderPlan({ data, setData, sumHorizontalData, sumVertical, rituF, rituG }) {
    const navigate = useNavigate()
    const [name, setName] = useState(data.projectData === undefined ? '' : data.projectData.project_name);
    const [orderNo, setOrderNo] = useState(data.projectData === undefined ? '' : data.projectData.order_number);
    const [customerName, setCustomeName] = useState(data.projectData === undefined ? '' : data.projectData.client_name);
    const [price, setPrice] = useState(data.projectData === undefined ? '' : data.projectData.internal_unit_price);
    const [showModal, setShowModal] = useState(false)
    const [error, setError] = useState({
        name: "",
        orderNo: "",
        customerName: "",
        price: "",
    });
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
    const onSc = (e) => {
        const top = e.currentTarget.scrollTop
        const elements = document.querySelectorAll(".vertical-scroll-table");
        elements.forEach((element) => {
            element.scrollTo({
                top: top,
            });
        });
    }

    useEffect(() => {
        setName(data.projectData === undefined ? '' : data.projectData.project_name)
        setOrderNo(data.projectData === undefined ? '' : data.projectData.order_number)
        setCustomeName(data.projectData === undefined ? '' : data.projectData.client_name)
        setPrice(data.projectData === undefined ? '' : data.projectData.internal_unit_price)
    }, [data])
    const editPlan = (e, index) => {
        data.details[index].planActualData[e.currentTarget.name] = e.currentTarget.value
        const calData = sumHorizontalData(data)
        setData({ ...calData })
    }

    const newStaff = () => {
        if (data.details && data.remainingStaffs) {
            data.details = [{
                "planActualData": {
                    "id": '',
                    "this_year_04_plan": '',
                    "this_year_04_actual": '',
                    "this_year_05_plan": '',
                    "this_year_05_actual": '',
                    "this_year_06_plan": '',
                    "this_year_06_actual": '',
                    "this_year_07_plan": '',
                    "this_year_07_actual": '',
                    "this_year_08_plan": '',
                    "this_year_08_actual": '',
                    "this_year_09_plan": '',
                    "this_year_09_actual": '',
                    "this_year_10_plan": '',
                    "this_year_10_actual": '',
                    "this_year_11_plan": '',
                    "this_year_11_actual": '',
                    "this_year_12_plan": '',
                    "this_year_12_actual": '',
                    "nextyear_01_plan": '',
                    "nextyear_01_actual": '',
                    "nextyear_02_plan": '',
                    "nextyear_02_actual": '',
                    "nextyear_03_plan": '',
                    "nextyear_03_actual": '',
                    "del_flg": 0,
                },
                "staffData": {
                    "staff_id": data.remainingStaffs[0].staff_id,
                    "staff_type": data.remainingStaffs[0].staff_type,
                }, 'goukei':
                    { 'yoteiGenka': '', 'yoteiJikan': '', 'jissekiJikan': '', 'jissekiGenka': '' }
            }, ...data.details]
        }
        else if(data.remainingStaffs){
            data.details = [{
                "planActualData": {
                    "id": '',
                    "this_year_04_plan": '',
                    "this_year_04_actual": '',
                    "this_year_05_plan": '',
                    "this_year_05_actual": '',
                    "this_year_06_plan": '',
                    "this_year_06_actual": '',
                    "this_year_07_plan": '',
                    "this_year_07_actual": '',
                    "this_year_08_plan": '',
                    "this_year_08_actual": '',
                    "this_year_09_plan": '',
                    "this_year_09_actual": '',
                    "this_year_10_plan": '',
                    "this_year_10_actual": '',
                    "this_year_11_plan": '',
                    "this_year_11_actual": '',
                    "this_year_12_plan": '',
                    "this_year_12_actual": '',
                    "nextyear_01_plan": '',
                    "nextyear_01_actual": '',
                    "nextyear_02_plan": '',
                    "nextyear_02_actual": '',
                    "nextyear_03_plan": '',
                    "nextyear_03_actual": '',
                    "del_flg": 0,
                },
                "staffData": {
                    "staff_id": data.remainingStaffs[0].staff_id,
                    "staff_type": data.remainingStaffs[0].staff_type,
                }, 'goukei':
                    { 'yoteiGenka': '', 'yoteiJikan': '', 'jissekiJikan': '', 'jissekiGenka': '' }
            }]
        }
        setData({ ...data })
    }

    const selectStaff = (e, index) => {
        const staffVal = e.currentTarget.value
        const tempData = data
        tempData.details[index].staffData.staff_id = parseInt(staffVal.split(',')[0])
        tempData.details[index].staffData.staff_type = parseInt(staffVal.split(',')[1])
        const calData = sumHorizontalData(tempData)
        setData({ ...calData })
    }

    const handleSubmit = async () => {
        let postData = data
        postData.details.map((detail, index) => {
            postData.details[index].planActualData = { ...detail.planActualData, staff_id: detail.staffData.staff_id }
            return { ...detail.planActualData, staff_id: detail.staffData.staff_id }
        })
        console.log(postData)
   
        await axios.post(REGIST_ACTUAL_PLAN, { ...postData, 'IDLoginUser': localStorage.getItem('IDLoginUser') })
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
                            <Input id={'orderNo'} value={orderNo} required={false} setValue={setOrderNo} title={'オーダーNo.'} editable={false} errorMsg={error.orderNo}></Input>
                            <Input id={'customerName'} value={customerName} required={false} setValue={setCustomeName} title={'顧客名'} editable={false} ></Input>
                            <Input id={'name'} value={name} required={false} setValue={setName} title={'案件名'} editable={false} errorMsg={error.name}></Input>
                            <Input id={'price'} value={price} required={false} setValue={setPrice} title={'社内単金'} editable={false} errorMsg={error.price}></Input>
                        </div>
                    </div>
                    <img className="absolute-img1" src={circle} alt="" srcSet="" onClick={() => { newStaff() }} />
                    <img className="absolute-img2" src={plus} alt="" srcSet="" onClick={() => { newStaff() }} />
                    <div className="d-flex justify-content-between page-body">
                        <div>
                            <table className="first-table">
                                <thead>
                                    <tr>
                                        <td className="table-header">スタッフ氏名</td>
                                        <td className="table-header">職制</td>
                                    </tr>
                                </thead>
                                <tbody className="vertical-scroll-table hide-scroll-bar" onScroll={(e) => { onSc(e) }}>
                                    {data.details && data.details.map((detail, index) => {
                                        if (detail.planActualData.id === '') {
                                            return (<tr key={'staff' + index}>
                                                <td className="table-cell">
                                                    <select className="select-staff" onChange={(e) => { selectStaff(e, index) }}>
                                                        {data.remainingStaffs.map((staff) => {
                                                            return (
                                                                <option value={staff.staff_id + ',' + staff.staff_type}>{staff.full_name}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </td>
                                                <td className="table-cell">{detail.staffData.staff_type === 0 ? '社員' : 'パートナー'}</td>
                                            </tr>)
                                        } else {
                                            return (
                                                <tr key={'staff' + index}>
                                                    <td className="table-cell">{detail.staffData.full_name}</td>
                                                    <td className="table-cell">{detail.staffData.staff_type === 0 ? '社員' : 'パートナー'}</td>
                                                </tr>
                                            )
                                        }
                                    })}
                                    {!data.details && <tr>
                                        <td className="table-cell-gap" ></td>
                                        <td className="table-cell-gap" ></td>
                                    </tr>}
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
                                <tbody className="vertical-scroll-table hide-scroll-bar" onScroll={(e) => { onSc(e) }}>
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
                                    {<tbody className="vertical-scroll-table hide-scroll-bar" onScroll={(e) => { onSc(e) }}>
                                        {data.details && data.details.map((detail, index) => {
                                            return (
                                                <>
                                                    <tr className="table-naiyo table-column">
                                                        <td className="naiyo td-cell yotei">
                                                            {detail.staffData.staff_type === 0 ? <input type="number" className="input-enable" name='this_year_04_plan'
                                                                value={detail.planActualData.this_year_04_plan} onChange={(e) => { editPlan(e, index) }}></input> : ''}
                                                        </td>
                                                        <td className="naiyo td-cell yotei">
                                                            {detail.staffData.staff_type === 1 ?
                                                                <input type="number" className="input-enable" name='this_year_04_plan' value={detail.planActualData.this_year_04_plan} onChange={(e) => { editPlan(e, index) }}></input>
                                                                : detail.planActualData.this_year_04_plan * data.projectData.internal_unit_price}
                                                        </td>
                                                        <td className="naiyo td-cell yotei">
                                                            {detail.staffData.staff_type === 0 ? <input type="number" className="input-enable" name='this_year_05_plan'
                                                                value={detail.planActualData.this_year_05_plan} onChange={(e) => { editPlan(e, index) }}></input> : ''}
                                                        </td>
                                                        <td className="naiyo td-cell yotei">
                                                            {detail.staffData.staff_type === 1 ?
                                                                <input type="number" className="input-enable" name='this_year_05_plan' value={detail.planActualData.this_year_05_plan} onChange={(e) => { editPlan(e, index) }}></input>
                                                                : detail.planActualData.this_year_05_plan * data.projectData.internal_unit_price}
                                                        </td>
                                                        <td className="naiyo td-cell yotei">
                                                            {detail.staffData.staff_type === 0 ? <input className="input-enable" name='this_year_06_plan'
                                                                value={detail.planActualData.this_year_06_plan} onChange={(e) => { editPlan(e, index) }}></input> : ''}
                                                        </td>
                                                        <td className="naiyo td-cell yotei">
                                                            {detail.staffData.staff_type === 1 ?
                                                                <input type="number" className="input-enable" name='this_year_06_plan' value={detail.planActualData.this_year_06_plan} onChange={(e) => { editPlan(e, index) }}></input>
                                                                : detail.planActualData.this_year_06_plan * data.projectData.internal_unit_price}
                                                        </td>
                                                        <td className="naiyo td-cell yotei">
                                                            {detail.staffData.staff_type === 0 ? <input type="number" className="input-enable" name='this_year_07_plan'
                                                                value={detail.planActualData.this_year_07_plan} onChange={(e) => { editPlan(e, index) }}></input> : ''}
                                                        </td>
                                                        <td className="naiyo td-cell yotei">
                                                            {detail.staffData.staff_type === 1 ?
                                                                <input type="number" className="input-enable" name='this_year_07_plan' value={detail.planActualData.this_year_07_plan} onChange={(e) => { editPlan(e, index) }}></input>
                                                                : detail.planActualData.this_year_07_plan * data.projectData.internal_unit_price}
                                                        </td>
                                                        <td className="naiyo td-cell yotei">
                                                            {detail.staffData.staff_type === 0 ? <input type="number" className="input-enable" name='this_year_08_plan'
                                                                value={detail.planActualData.this_year_08_plan} onChange={(e) => { editPlan(e, index) }}></input> : ''}
                                                        </td>
                                                        <td className="naiyo td-cell yotei">
                                                            {detail.staffData.staff_type === 1 ?
                                                                <input type="number" className="input-enable" name='this_year_08_plan' value={detail.planActualData.this_year_08_plan} onChange={(e) => { editPlan(e, index) }}></input>
                                                                : detail.planActualData.this_year_08_plan * data.projectData.internal_unit_price}
                                                        </td>
                                                        <td className="naiyo td-cell yotei">
                                                            {detail.staffData.staff_type === 0 ? <input type="number" className="input-enable" name='this_year_09_plan'
                                                                value={detail.planActualData.this_year_09_plan} onChange={(e) => { editPlan(e, index) }}></input> : ''}
                                                        </td>
                                                        <td className="naiyo td-cell yotei">
                                                            {detail.staffData.staff_type === 1 ?
                                                                <input type="number" className="input-enable" name='this_year_09_plan' value={detail.planActualData.this_year_09_plan} onChange={(e) => { editPlan(e, index) }}></input>
                                                                : detail.planActualData.this_year_09_plan * data.projectData.internal_unit_price}
                                                        </td>
                                                        <td className="naiyo td-cell yotei">
                                                            {detail.staffData.staff_type === 0 ? <input type="number" className="input-enable" name='this_year_10_plan'
                                                                value={detail.planActualData.this_year_10_plan} onChange={(e) => { editPlan(e, index) }}></input> : ''}
                                                        </td>
                                                        <td className="naiyo td-cell yotei">
                                                            {detail.staffData.staff_type === 1 ?
                                                                <input type="number" className="input-enable" name='this_year_10_plan' value={detail.planActualData.this_year_10_plan} onChange={(e) => { editPlan(e, index) }}></input>
                                                                : detail.planActualData.this_year_10_plan * data.projectData.internal_unit_price}
                                                        </td>
                                                        <td className="naiyo td-cell yotei">
                                                            {detail.staffData.staff_type === 0 ? <input type="number" className="input-enable" name='this_year_11_plan'
                                                                value={detail.planActualData.this_year_11_plan} onChange={(e) => { editPlan(e, index) }}></input> : ''}
                                                        </td>
                                                        <td className="naiyo td-cell yotei">
                                                            {detail.staffData.staff_type === 1 ?
                                                                <input type="number" className="input-enable" name='this_year_11_plan' value={detail.planActualData.this_year_11_plan} onChange={(e) => { editPlan(e, index) }}></input>
                                                                : detail.planActualData.this_year_11_plan * data.projectData.internal_unit_price}
                                                        </td>
                                                        <td className="naiyo td-cell yotei">
                                                            {detail.staffData.staff_type === 0 ? <input type="number" className="input-enable" name='this_year_12_plan'
                                                                value={detail.planActualData.this_year_12_plan} onChange={(e) => { editPlan(e, index) }}></input> : ''}
                                                        </td>
                                                        <td className="naiyo td-cell yotei">
                                                            {detail.staffData.staff_type === 1 ?
                                                                <input type="number" className="input-enable" name='this_year_12_plan' value={detail.planActualData.this_year_12_plan} onChange={(e) => { editPlan(e, index) }}></input>
                                                                : detail.planActualData.this_year_12_plan * data.projectData.internal_unit_price}
                                                        </td>
                                                        <td className="naiyo td-cell yotei">
                                                            {detail.staffData.staff_type === 0 ? <input type="number" className="input-enable" name='nextyear_01_plan'
                                                                value={detail.planActualData.nextyear_01_plan} onChange={(e) => { editPlan(e, index) }}></input> : ''}
                                                        </td>
                                                        <td className="naiyo td-cell yotei">
                                                            {detail.staffData.staff_type === 1 ?
                                                                <input type="number" className="input-enable" name='nextyear_01_plan' value={detail.planActualData.nextyear_01_plan} onChange={(e) => { editPlan(e, index) }}></input>
                                                                : detail.planActualData.nextyear_01_plan * data.projectData.internal_unit_price}
                                                        </td>
                                                        <td className="naiyo td-cell yotei">
                                                            {detail.staffData.staff_type === 0 ? <input type="number" className="input-enable" name='nextyear_02_plan'
                                                                value={detail.planActualData.nextyear_02_plan} onChange={(e) => { editPlan(e, index) }}></input> : ''}
                                                        </td>
                                                        <td className="naiyo td-cell yotei">
                                                            {detail.staffData.staff_type === 1 ?
                                                                <input type="number" className="input-enable" name='nextyear_02_plan' value={detail.planActualData.nextyear_02_plan} onChange={(e) => { editPlan(e, index) }}></input>
                                                                : detail.planActualData.nextyear_02_plan * data.projectData.internal_unit_price}
                                                        </td>
                                                        <td className="naiyo td-cell yotei">
                                                            {detail.staffData.staff_type === 0 ? <input type="number" className="input-enable" name='nextyear_03_plan'
                                                                value={detail.planActualData.nextyear_03_plan} onChange={(e) => { editPlan(e, index) }}></input> : ''}
                                                        </td>
                                                        <td className="naiyo td-cell yotei">
                                                            {detail.staffData.staff_type === 1 ?
                                                                <input type="number" className="input-enable" name='nextyear_03_plan' value={detail.planActualData.nextyear_03_plan} onChange={(e) => { editPlan(e, index) }}></input>
                                                                : detail.planActualData.nextyear_03_plan * data.projectData.internal_unit_price}
                                                        </td>
                                                    </tr >
                                                    <tr className="table-naiyo jisseki table-colum">
                                                        <td className="naiyo td-cell jisseki">
                                                            {detail.staffData.staff_type === 0 ? <input type="number" className="input-enable" name='this_year_04_actual'
                                                                value={detail.planActualData.this_year_04_actual} onChange={(e) => { editPlan(e, index) }}></input> : ''}</td>
                                                        <td className="naiyo td-cell jisseki">
                                                            {detail.staffData.staff_type === 1 ?
                                                                <input type="number" className="input-enable" name='this_year_04_actual' value={detail.planActualData.this_year_04_actual} onChange={(e) => { editPlan(e, index) }}></input>
                                                                : detail.planActualData.this_year_04_actual * data.projectData.internal_unit_price}
                                                        </td>
                                                        <td className="naiyo td-cell jisseki">
                                                            {detail.staffData.staff_type === 0 ? <input type="number" className="input-enable" name='this_year_05_actual'
                                                                value={detail.planActualData.this_year_05_actual} onChange={(e) => { editPlan(e, index) }}></input> : ''}
                                                        </td>
                                                        <td className="naiyo td-cell jisseki">
                                                            {detail.staffData.staff_type === 1 ?
                                                                <input type="number" className="input-enable" name='this_year_05_actual' value={detail.planActualData.this_year_05_actual} onChange={(e) => { editPlan(e, index) }}></input>
                                                                : detail.planActualData.this_year_05_actual * data.projectData.internal_unit_price}
                                                        </td>
                                                        <td className="naiyo td-cell jisseki">
                                                            {detail.staffData.staff_type === 0 ? <input type="number" className="input-enable" name='this_year_06_actual'
                                                                value={detail.planActualData.this_year_06_actual} onChange={(e) => { editPlan(e, index) }}></input> : ''}
                                                        </td>
                                                        <td className="naiyo td-cell jisseki">
                                                            {detail.staffData.staff_type === 1 ?
                                                                <input type="number" className="input-enable" name='this_year_06_actual' value={detail.planActualData.this_year_06_actual} onChange={(e) => { editPlan(e, index) }}></input>
                                                                : detail.planActualData.this_year_06_actual * data.projectData.internal_unit_price}
                                                        </td>
                                                        <td className="naiyo td-cell jisseki">
                                                            {detail.staffData.staff_type === 0 ? <input type="number" className="input-enable" name='this_year_07_actual'
                                                                value={detail.planActualData.this_year_07_actual} onChange={(e) => { editPlan(e, index) }}></input> : ''}
                                                        </td>
                                                        <td className="naiyo td-cell jisseki">
                                                            {detail.staffData.staff_type === 1 ?
                                                                <input type="number" className="input-enable" name='this_year_07_actual' value={detail.planActualData.this_year_07_actual} onChange={(e) => { editPlan(e, index) }}></input>
                                                                : detail.planActualData.this_year_07_actual * data.projectData.internal_unit_price}
                                                        </td>
                                                        <td className="naiyo td-cell jisseki">
                                                            {detail.staffData.staff_type === 0 ? <input type="number" className="input-enable" name='this_year_08_actual'
                                                                value={detail.planActualData.this_year_08_actual} onChange={(e) => { editPlan(e, index) }}></input> : ''}
                                                        </td>
                                                        <td className="naiyo td-cell jisseki">
                                                            {detail.staffData.staff_type === 1 ?
                                                                <input type="number" className="input-enable" name='this_year_08_actual' value={detail.planActualData.this_year_08_actual} onChange={(e) => { editPlan(e, index) }}></input>
                                                                : detail.planActualData.this_year_08_actual * data.projectData.internal_unit_price}
                                                        </td>
                                                        <td className="naiyo td-cell jisseki">
                                                            {detail.staffData.staff_type === 0 ? <input type="number" className="input-enable" name='this_year_09_actual'
                                                                value={detail.planActualData.this_year_09_actual} onChange={(e) => { editPlan(e, index) }}></input> : ''}
                                                        </td>
                                                        <td className="naiyo td-cell jisseki">
                                                            {detail.staffData.staff_type === 1 ?
                                                                <input type="number" className="input-enable" name='this_year_09_actual' value={detail.planActualData.this_year_09_actual} onChange={(e) => { editPlan(e, index) }}></input>
                                                                : detail.planActualData.this_year_09_actual * data.projectData.internal_unit_price}
                                                        </td>
                                                        <td className="naiyo td-cell jisseki">
                                                            {detail.staffData.staff_type === 0 ? <input type="number" className="input-enable" name='this_year_10_actual'
                                                                value={detail.planActualData.this_year_10_actual} onChange={(e) => { editPlan(e, index) }}></input> : ''}
                                                        </td>
                                                        <td className="naiyo td-cell jisseki">
                                                            {detail.staffData.staff_type === 1 ?
                                                                <input type="number" className="input-enable" name='this_year_10_actual' value={detail.planActualData.this_year_10_actual} onChange={(e) => { editPlan(e, index) }}></input>
                                                                : detail.planActualData.this_year_10_actual * data.projectData.internal_unit_price}
                                                        </td>
                                                        <td className="naiyo td-cell jisseki">
                                                            {detail.staffData.staff_type === 0 ? <input type="number" className="input-enable" name='this_year_11_actual'
                                                                value={detail.planActualData.this_year_11_actual} onChange={(e) => { editPlan(e, index) }}></input> : ''}
                                                        </td>
                                                        <td className="naiyo td-cell jisseki">
                                                            {detail.staffData.staff_type === 1 ?
                                                                <input type="number" className="input-enable" name='this_year_11_actual' value={detail.planActualData.this_year_11_actual} onChange={(e) => { editPlan(e, index) }}></input>
                                                                : detail.planActualData.this_year_11_actual * data.projectData.internal_unit_price}
                                                        </td>
                                                        <td className="naiyo td-cell jisseki">
                                                            {detail.staffData.staff_type === 0 ? <input type="number" className="input-enable" name='this_year_12_actual'
                                                                value={detail.planActualData.this_year_12_actual} onChange={(e) => { editPlan(e, index) }}></input> : ''}
                                                        </td>
                                                        <td className="naiyo td-cell jisseki">
                                                            {detail.staffData.staff_type === 1 ?
                                                                <input type="number" className="input-enable" name='this_year_12_actual' value={detail.planActualData.this_year_12_actual} onChange={(e) => { editPlan(e, index) }}></input>
                                                                : detail.planActualData.this_year_12_actual * data.projectData.internal_unit_price}
                                                        </td>
                                                        <td className="naiyo td-cell jisseki">
                                                            {detail.staffData.staff_type === 0 ? <input type="number" className="input-enable" name='nextyear_01_actual'
                                                                value={detail.planActualData.nextyear_01_actual} onChange={(e) => { editPlan(e, index) }}></input> : ''}
                                                        </td>
                                                        <td className="naiyo td-cell jisseki">
                                                            {detail.staffData.staff_type === 1 ?
                                                                <input type="number" className="input-enable" name='nextyear_01_actual' value={detail.planActualData.nextyear_01_actual} onChange={(e) => { editPlan(e, index) }}></input>
                                                                : detail.planActualData.nextyear_01_actual * data.projectData.internal_unit_price}
                                                        </td>
                                                        <td className="naiyo td-cell jisseki">
                                                            {detail.staffData.staff_type === 0 ? <input type="number" className="input-enable" name='nextyear_02_actual'
                                                                value={detail.planActualData.nextyear_02_actual} onChange={(e) => { editPlan(e, index) }}></input> : ''}
                                                        </td>
                                                        <td className="naiyo td-cell jisseki">
                                                            {detail.staffData.staff_type === 1 ?
                                                                <input type="number" className="input-enable" name='nextyear_02_actual' value={detail.planActualData.nextyear_02_actual} onChange={(e) => { editPlan(e, index) }}></input>
                                                                : detail.planActualData.nextyear_02_actual * data.projectData.internal_unit_price}
                                                        </td>
                                                        <td className="naiyo td-cell jisseki">
                                                            {detail.staffData.staff_type === 0 ? <input type="number" className="input-enable" name='nextyear_03_actual'
                                                                value={detail.planActualData.nextyear_03_actual} onChange={(e) => { editPlan(e, index) }}></input> : ''}
                                                        </td>
                                                        <td className="naiyo td-cell jisseki">
                                                            {detail.staffData.staff_type === 1 ?
                                                                <input type="number" className="input-enable" name='nextyear_03_actual' value={detail.planActualData.nextyear_03_actual} onChange={(e) => { editPlan(e, index) }}></input>
                                                                : detail.planActualData.nextyear_03_actual * data.projectData.internal_unit_price}
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })}
                                        <tr className="table-cell-gap"></tr>
                                        <tr className="table-naiyo table-column">
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiJikan04gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiGenka04gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiJikan05gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiGenka05gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiJikan06gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiGenka06gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiJikan07gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiGenka07gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiJikan08gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiGenka08gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiJikan09gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiGenka09gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiJikan10gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiGenka10gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiJikan11gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiGenka11gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiJikan12gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiGenka12gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiJikan01gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiGenka01gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiJikan02gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiGenka02gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiJikan03gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiGenka03gatu : ''}</td>
                                        </tr>
                                        <tr className="table-naiyo jisseki table-colum">
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiJikan04gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiGenka04gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiJikan05gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiGenka05gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiJikan06gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiGenka06gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiJikan07gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiGenka07gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiJikan08gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiGenka08gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiJikan09gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiGenka09gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiJikan10gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiGenka10gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiJikan11gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiGenka11gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiJikan12gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiGenka12gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiJikan01gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiGenka01gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiJikan02gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiGenka02gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiJikan03gatu : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiGenka03gatu : ''}</td>
                                        </tr>
                                    </tbody>}
                                </table>
                                <table>
                                    <thead className="show-scroll-bar">
                                        <tr className="gatu-cell">
                                            <td colSpan={2} className="gatu-cell">合計</td>
                                        </tr>
                                        <tr className="table-column">
                                            <td className="jikan-cell">作業 <br />時間</td>
                                            <td className="genka-cell">社内  <br />原価</td>
                                        </tr>
                                    </thead>
                                    {<tbody className="vertical-scroll-table" onScroll={(e) => { onSc(e) }}>
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
                                        <tr className="gap-row table-naiyo table-column" >
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiJikanGoukei : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.yoteiGenkaGoukei : ''}</td>
                                        </tr >
                                        <tr className="gap-row table-naiyo jisseki table-colum">
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiJikanGoukei : ''}</td>
                                            <td className="naiyo td-cell">{data.goukei ? data.goukei.jissekiGenkaGoukei : ''}</td>
                                        </tr>
                                    </tbody>}
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="text-center div-button">
                        <button type="button" id="change" className="btn btn-primary" onClick={() => handleSubmit()}>登録</button>
                        <button type="button" id="cancel" className="btn btn-primary" onClick={() => { setShowModal(true) }}>キャンセル</button>
                    </div>
                    {data.projectData && data.goukei && <div className="tables-flex d-flex justify-content-between">
                        <table className="table-top">
                            <thead>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={4} className="table-blue col-shadow">予定</td>
                                    <td className="table-blue td-cell-2">受注額（A）</td>
                                    <td className="td-cell-2">{data.projectData.order_income}</td>
                                </tr>
                                <tr>
                                    <td className="table-blue td-cell-2">実行予算(B)</td>
                                    <td className="td-cell-2">{data.projectData.order_income * 0.9}</td>
                                </tr>
                                <tr>
                                    <td className="table-blue td-cell-2">計画済予算(C)</td>
                                    <td className="td-cell-2">{data.goukei ? data.goukei.yoteiJikanGoukei : 0 * data.projectData.internal_unit_price}</td>
                                </tr>
                                <tr>
                                    <td className="table-blue td-cell-2">計画粗利(D)</td>
                                    <td className="td-cell-2">{(data.projectData.order_income * 0.9) - data.goukei ? data.goukei.yoteiJikanGoukei : 0 * data.projectData.internal_unit_price}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="table-top">
                            <thead>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={4} className="table-orange col-shadow">予定</td>
                                    <td className="table-orange">使用済工数 (E)</td>
                                    <td className="td-cell-2">{data.goukei ? data.goukei.jissekiJikanGoukei : 0 * data.projectData.internal_unit_price}</td>
                                </tr>
                                <tr>
                                    <td className="table-orange">計画比(F)</td>
                                    <td className="td-cell-2">{data.ritu.keikakubi}</td>
                                </tr>
                                <tr>
                                    <td className="table-orange">予定工数残(G)</td>
                                    <td className="td-cell-2">{data.ritu.kousuuZan}</td>
                                </tr>
                                <tr>
                                    <td className="table-orange">実行予算残(H)</td>
                                    <td className="td-cell-2">{data.projectData.order_income * 0.9 - (data.goukei ? data.goukei.jissekiJikanGoukei : 0 * data.projectData.internal_unit_price) + data.ritu.kousuuZan}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>}
                </div>
            </div>
            <ReactModal isOpen={showModal} style={customStyles} ariaHideApp={false} >
                <p>Do you want to save edited data?</p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary" onClick={() => setShowModal(false)}>yes</button>
                    <button className="btn btn-secondary" onClick={() => navigate('/order/list')}>No</button>
                </div>
            </ReactModal>
        </Fragment >
    )
}