import { Fragment, useContext, useEffect, useRef, useState } from "react";
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
import { SetEdited } from "../../State/editContext";



const options = [{ label: '実行中', value: 0 }, { label: '非活性', value: 1 }, { label: '保留', value: 2 }, { label: '完了', value: 3 }, { label: 'キャンセル', value: 4 }]

export default function CreateOrder() {
    const refButton = useRef(null)
    const [name, setName] = useState("");
    const [orderNo, setOrderNo] = useState("");
    const [customerName, setCustomeName] = useState("");
    const [orderDate, setOrderDate] = useState("");
    const [status, setStatus] = useState('');
    const [orderIncome, setOrderIncome] = useState("");
    const [internalUnitPrice, setInternalUnitPrice] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState({
        name: "",
        orderNo: "",
        customerName: "",
        orderDate: "",
        status: "",
        orderIncome: "",
        internalUnitPrice: "",
    });

    const setEdited = useContext(SetEdited)
    useEffect(() => {
        if((name ?? orderNo ?? customerName ?? orderDate ?? status ?? orderIncome ?? internalUnitPrice) === ''){
            setEdited(false)
        }else{
            setEdited(true)
        }
    }, [name, orderNo, status, orderIncome, internalUnitPrice, customerName, orderDate])
    const submitHandler = async () => {
        let errorName = ''
        let errorOrderNo = ''
        let errorCustomerName = ''
        let errorOrderDate = ''
        let errorStatus = ''
        let errorOrderIncome = ''
        let errorInternalUnitPrice = ''
        console.log(!iskanji(name), 'kajiname')
        if (name === '') {
            errorName = process.env.REACT_APP_REQUIRED_FIELD_ERROR
        } else if (!iskanji(name)) {
            errorName = process.env.REACT_APP_REQUIRED_2_BYTE_ERROR
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
        if (orderIncome === '') {
            errorOrderIncome = process.env.REACT_APP_REQUIRED_FIELD_ERROR
        } else if (!checkDate(orderDate)) {
            errorOrderIncome = process.env.REACT_APP_REQUIRED_2_BYTE_ERROR
        } else {
            errorOrderIncome = ""
        }
        if (internalUnitPrice === '') {
            errorInternalUnitPrice = process.env.REACT_APP_REQUIRED_FIELD_ERROR
        } else if (!checkNumber(orderDate)) {
            errorInternalUnitPrice = process.env.REACT_APP_REQUIRED_1_BYTE_ERROR
        } else {
            errorInternalUnitPrice = ""
        }
        setError({
            ...error, name: errorName, orderNo: errorOrderNo,
            customerName: errorCustomerName, orderDate: errorOrderDate, status: errorStatus, orderIncome: errorOrderIncome, internalUnitPrice: errorInternalUnitPrice
        })
        if (!(errorName ?? errorOrderNo ?? errorCustomerName ?? errorOrderDate ?? errorStatus ?? errorOrderIncome ?? errorInternalUnitPrice) !== '') {
            const formdata = new FormData()
            formdata.append('project_name', name)
            formdata.append('order_number', orderNo)
            formdata.append('client_name', customerName)
            formdata.append('order_date', orderDate)
            formdata.append('status', status)
            formdata.append('order_income', orderIncome.replaceAll(',', ''))
            formdata.append('internal_unit_price', internalUnitPrice.replaceAll(',', ''))
            formdata.append('IDLoginUser', localStorage.getItem('IDLoginUser'))
            await axios.post(CREATE_ORDER, formdata).then((respone) => {
                if (respone.data.message === 'New Project ID is successfully inserted!') {
                    setMessage(process.env.REACT_APP_CREATE_ORDER_SUCCESS)
                    setName('')
                    setOrderNo('')
                    setCustomeName('')
                    setOrderDate('')
                    setStatus('')
                    setOrderIncome('')
                    setInternalUnitPrice('')
                    refButton.current.disabled = true
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    useEffect(() => {
        const id = setTimeout(() => {
            setMessage('')
            refButton.current.disabled = false
        }, 5000);
        return () => clearTimeout(id)
    }, [message])
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
                            <Input id={'order-customerName'} value={customerName} required={true} setValue={setCustomeName} title={'顧客名'} editable={true} errorMsg={error.customerName}></Input>
                            <InputCalenda id={'orderDate'} value={orderDate} required={true} setValue={setOrderDate} title={'オーダー日付'} editable={true} errorMsg={error.orderDate}></InputCalenda>
                            <Selection id={'status'} title={'ステータス'} options={options} required={true} value={status} errorMsg={error.status} setValue={setStatus} ></Selection>
                            <Input id={'order-orderIncome'} value={addComma(orderIncome)} required={true} setValue={setOrderIncome} title={'受注額'} editable={true} errorMsg={error.orderIncome}></Input> <span id="internalUnitPrice1">円</span>
                            <Input id={'internalUnitPrice'} value={addComma(internalUnitPrice)} required={true} setValue={setInternalUnitPrice} title={'社内単金'} editable={true} errorMsg={error.internalUnitPrice}></Input><span id="internalUnitPrice2">円/Manhour</span>
                        </div>
                    </div>
                    <div className="text-center">
                        <button ref={refButton} type="button" id="regist" className="btn btn-primary" onClick={() => submitHandler()}>登録</button>
                    </div>
                    <p className="message">
                        {message}
                    </p>
                </div>
            </div>
        </Fragment>
    )
}