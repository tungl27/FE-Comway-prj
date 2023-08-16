import { Fragment, useState } from "react";
import Input from "../Input/Input";
import './FormCreate.css'
import InputCalenda from "../Input/InputCalenda";
import Selection from "../Selection/Selection";
import iskanji from "../../utils/validateKanji";
import checkDate from "../../utils/checkDate";
import checkNumber from "../../utils/checkNumber";
import axios from "axios";
import { CREATE_ORDER } from "../../theme/configApi";
import addComma from "../../utils/addComma";



const options = [{ label: '社員', value: 1 }]

export default function CreateOrder() {
    const [name, setName] = useState("全社支払合算機能");
    const [orderNo, setOrderNo] = useState("CIS2023–020");
    const [customerName, setCustomeName] = useState("トーテス");
    const [orderDate, setOrderDate] = useState("2023-08-04");
    const [status, setStatus] = useState('');
    const [price, setPrice] = useState("4854000");
    const [unit, setUnit] = useState("4573");
    const [message, setMessage] = useState("");
    const [error, setError] = useState({
        name: "",
        orderNo: "",
        customerName: "",
        orderDate: "",
        status: "",
        price: "",
        unit: "",
    });

    const submitHandler = async () => {
        let errorName = ''
        let errorOrderNo = ''
        let errorCustomerName = ''
        let errorOrderDate = ''
        let errorStatus = ''
        let errorPrice = ''
        let errorUnit = ''
        console.log(!iskanji(name), 'kajiname')
        if (name === '') {
            errorName = process.env.REACT_APP_REQUIRED_FIELD_ERROR
        } else if (!iskanji(name)) {
            errorName = process.env.REACT_APP_REQUIRED_2_BYTE_KANJI_ERROR
        } else {
            errorName = ""
        }
        if (orderNo === '') {
            errorOrderNo = process.env.REACT_APP_REQUIRED_FIELD_ERROR
        } else {
            errorOrderNo = ""
        }
        if (customerName === '') {
            errorCustomerName = process.env.REACT_APP_REQUIRED_FIELD_ERROR
        } else {
            errorCustomerName = ""
        }
        if (orderDate === '' || !checkDate(orderDate)) {
            errorOrderDate = process.env.REACT_APP_ERROR_MESS_08
        } else {
            errorOrderDate = ""
        }
        if (status === '') {
            errorStatus = process.env.REACT_APP_REQUIRED_SELECTED_ERROR
        } else {
            errorStatus = ""
        }
        if (price === '') {
            errorPrice = process.env.REACT_APP_REQUIRED_FIELD_ERROR
        } else if (!checkDate(orderDate)) {
            errorPrice = process.env.REACT_APP_REQUIRED_2_BYTE_HIRAGANA_ERRORs
        } else {
            errorPrice = ""
        }
        if (unit === '') {
            errorUnit = process.env.REACT_APP_REQUIRED_FIELD_ERROR
        } else if (!checkNumber(orderDate)) {
            errorUnit = process.env.REACT_APP_REQUIRED_2_BYTE_HIRAGANA_ERRORs
        } else {
            errorUnit = ""
        }
        setError({
            ...error, name: errorName, orderNo: errorOrderNo,
            customerName: errorCustomerName, orderDate: errorOrderDate, status: errorStatus, price: errorPrice, unit: errorUnit
        })
        if (!(errorName ?? errorOrderNo ?? errorCustomerName ?? errorOrderDate ?? errorStatus ?? errorPrice ?? errorUnit) !== '') {
            const formdata = new FormData()
            formdata.append('project_name', name)
            formdata.append('order_number', orderNo)
            formdata.append('client_name', customerName)
            formdata.append('order_date', orderDate)
            formdata.append('status', status)
            formdata.append('order_income', price)
            formdata.append('internal_unit_price', unit)
            formdata.append('IDLoginUser', localStorage.getItem('IDLoginUser'))
            await axios.post(CREATE_ORDER, formdata).then((respone) => {
                if (respone.data === 'New Staff is created') {
                    setMessage(process.env.REACT_APP_CREATE_ORDER_SUCCESS)
                    setName('')
                    setOrderNo('')
                    setCustomeName('')
                    setOrderDate('')
                    setStatus('')
                    setPrice('')
                    setUnit('')
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }
    return (
        <Fragment>
            <div className="container">
                <div className="form-create-order">
                    <div>
                        <p className="form-title">
                            オーダー登録画面
                        </p>
                        <div className="order-inputs-group">
                            <Input id={'order-name'} value={name} required={true} setValue={setName} title={'案件名'} editable={true} errorMsg={error.name}></Input>
                            <Input id={'create-orderNo'} value={orderNo} required={true} setValue={setOrderNo} title={'オーダーNo.'} editable={true} errorMsg={error.orderNo}></Input>
                            <Input id={'order-customerName'} value={customerName} required={false} setValue={setCustomeName} title={'顧客名'} editable={true} errorMsg={error.customerName}></Input>
                            <InputCalenda id={'orderDate'} value={orderDate} required={false} setValue={setOrderDate} title={'オーダー日付'} editable={true} errorMsg={error.orderDate}></InputCalenda>
                            <Selection id={'status'} title={'ステータス'} options={options} required={true} value={status} errorMsg={error.status} setValue={setStatus} ></Selection>
                            <Input id={'order-price'} value={addComma(price)} required={false} setValue={setPrice} title={'受注額'} editable={true} errorMsg={error.price}></Input> <span id="unit1">円</span>
                            <Input id={'unit'} value={addComma(unit)} required={false} setValue={setUnit} title={'社内単金'} editable={true} errorMsg={error.unit}></Input><span id="unit2">円/Manhour</span>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="button" id="regist" className="btn btn-primary" onClick={() => submitHandler()}>登録</button>
                    </div>
                    <p className="message">
                        {message}
                    </p>
                </div>
            </div>
        </Fragment>
    )
}