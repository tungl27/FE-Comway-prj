import { Fragment, useContext, useEffect, useRef, useState } from "react";
import Input from "../Input/Input";
import Selection from "../Selection/Selection";
import './FormEdit.css'
import InputCalenda from '../Input/InputCalenda'
import checkDate from "../../utils/checkDate";
import iskanji from "../../utils/validateKanji";
import checkNumber from "../../utils/checkNumber";
import axios from "axios";
import { EDIT_ORDER, GET_ORDER_BY_ID } from "../../theme/configApi";
import { useLocation, useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import addComma from "../../utils/addComma";
import { SetEdited } from "../../State/editContext";

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
// const options = [{ label: '新規', value: 1 }]
const options = [{ label: '実行中', value: 0 }, { label: '非活性', value: 1 }, { label: '保留', value: 2 }, { label: '完了', value: 3 }, { label: 'キャンセル', value: 4 }]

export default function FormEditOrder({ OrderID }) {
    const [showModal, setShowModal] = useState(false)
    const [orderInfo, setOrderInfo] = useState({})

    const location = useLocation();
    const prePage = location.state.prePage || 1;

    useEffect(() => {
        const orderInfo = async () => {
            await axios.post(GET_ORDER_BY_ID, { "OrderID": OrderID, IDLoginUser: localStorage.getItem('IDLoginUser') }).then(respone => {
                setOrderInfo(respone.data)
                console.log(respone.data)
            })
        }
        orderInfo()
    }, [])

    useEffect(() => {
        if (orderInfo.order_date) {
            const date = orderInfo.order_date.toString().split(" ")[0]
            console.log(date)
            setOrderDate(date)
        }
        setId(orderInfo.id)
        setName(orderInfo.project_name)
        setOrderNo(orderInfo.order_number)
        setCustomeName(orderInfo.client_name)
        setStatus(orderInfo.status)
        setOrderIncome(addComma(orderInfo.order_income))
        setInternalUnitPrice(addComma(orderInfo.internal_unit_price))
    }, [orderInfo])

    const [id, setId] = useState("");
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
    });
    const navigate = useNavigate()
    const refButton = useRef(null)
    const setEdited = useContext(SetEdited)

    useEffect(() => {
        if ((name ?? orderNo ?? customerName ?? orderDate ?? status ?? orderIncome ?? internalUnitPrice) === '') {
            setEdited(false)
        } else {
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
            errorInternalUnitPrice = process.env.REACT_APP_REQUIRED_2_BYTE_ERROR
        } else {
            errorInternalUnitPrice = ""
        }
        setError({
            ...error, name: errorName, orderNo: errorOrderNo,
            customerName: errorCustomerName, orderDate: errorOrderDate, status: errorStatus, orderIncome: errorOrderIncome, internalUnitPrice: errorInternalUnitPrice
        })
        if (!(errorName ?? errorOrderNo ?? errorCustomerName ?? errorOrderDate ?? errorStatus ?? errorOrderIncome ?? errorInternalUnitPrice) !== '') {
            const formdata = new FormData()
            formdata.append('OrderID', OrderID)
            formdata.append('project_name', name)
            formdata.append('order_number', orderNo)
            formdata.append('client_name', customerName)
            formdata.append('order_date', orderDate)
            formdata.append('status', status)
            formdata.append('order_income', orderIncome.replaceAll(',', ''))
            formdata.append('internal_unit_price', internalUnitPrice.replaceAll(',', ''))
            formdata.append('IDLoginUser', localStorage.getItem('IDLoginUser'))
            await axios.post(EDIT_ORDER, formdata).then((respone) => {
                if (respone.data === 'Edited Project Successfully') {
                    setMessage(process.env.REACT_APP_EDIT_ORDER_SUCCESS)
                    refButton.current.disabled = true
                    setTimeout(() => {
                        refButton.current.disabled = false
                        // navigate('/order/list')
                        navigate('/order/list', {state: { prePage: prePage }})

                    }, 500);
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    return (
        <Fragment>
            <div className="container">
                <div className="form-edit-order">
                    <div>
                        <p className="form-title">
                            オーダー情報編集画面
                        </p>
                        <div className="edit-order-inputs-group">
                            <Input id={'id'} value={id} required={true} setValue={setId} title={'オーダーID'} editable={false} ></Input>
                            <Input id={'edit-order-name'} value={name} required={true} setValue={setName} title={'案件名'} editable={true} errorMsg={error.name}></Input>
                            <Input id={'edit-order-orderNo'} value={orderNo} required={true} setValue={setOrderNo} title={'オーダーNo.'} editable={true} errorMsg={error.orderNo}></Input>
                            <Input id={'edit-order-customerName'} value={customerName} required={true} setValue={setCustomeName} title={'顧客名'} editable={true} errorMsg={error.customerName}></Input>
                            <InputCalenda id={'orderDate'} value={orderDate} required={true} setValue={setOrderDate} title={'オーダー日付'} editable={true} errorMsg={error.orderDate}></InputCalenda>
                            <Selection id={'status'} title={'ステータス'} options={options} required={true} value={status} errorMsg={error.status} setValue={setStatus}></Selection>
                            <Input id={'edit-order-orderIncome'} value={addComma(orderIncome)} required={true} setValue={setOrderIncome} title={'受注額'} editable={true} errorMsg={error.orderIncome}></Input><span id="internalUnitOrderEdit1">円</span>
                            <Input id={'internalUnitPrice'} value={addComma(internalUnitPrice)} required={true} setValue={setInternalUnitPrice} title={'社内単金'} editable={true} errorMsg={error.internalUnitPrice}></Input><span id="internalUnitOrderEdit2">円/Manhour</span>
                        </div>
                    </div>
                    <div className="text-center">
                        <button ref={refButton} type="button" id="change" className="btn btn-primary" onClick={() => submitHandler()}>更新</button>
                        <button type="button" id="cancel" className="btn btn-primary" onClick={() => setShowModal(true)}>キャンセル</button>
                    </div>
                    <p className="message">
                        {message}
                    </p>
                </div>
            </div>
            <ReactModal isOpen={showModal} style={customStyles} ariaHideApp={false} >
                <p>データを保存しますか。</p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary"  onClick={() => setShowModal(false)}>はい</button>
                    <button className="btn btn-secondary"  onClick={() => navigate('/order/list' , {state: { prePage: prePage }})}>いいえ</button>
                </div>
            </ReactModal>
        </Fragment>
    )
}