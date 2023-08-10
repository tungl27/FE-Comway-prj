import { Fragment, useState } from "react";
import Input from "../Input/Input";
import './FormCreate.css'
import InputCalenda from "../Input/InputCalenda";
import Selection from "../Selection/Selection";

const options = [{ label: '社員', value: 1 }]

export default function CreateOrder() {
    const [name, setName] = useState("全社支払合算システム機能");
    const [orderNo, setOrderNo] = useState("CIS2023–020");
    const [customerName, setCustomeName] = useState("トーテス");
    const [orderDate, setOrderDate] = useState("2023-08-04");
    const [status, setStatus] = useState(0);
    const [price, setPrice] = useState("4,854,000");
    const [unit, setUnit] = useState("4,573");
    const [error, setError] = useState({
        name: "エラーメッセージXXXX",
        orderNo: "エラーメッセージXXXX",
        customerName: "エラーメッセージXXXX",
        orderDate: "エラーメッセージXXXX",
        status: "エラーメッセージXXXX",
        price: "エラーメッセージXXXX",
    });
    return (
        <Fragment>
            <div className="container">
                <div className="form-create-order">
                    <div>
                        <p className="form-title">
                            オーダー登録画面
                        </p>
                        <div className="order-inputs-group">
                            <Input id={'name'} value={name} required={true} setValue={setName} title={'案件名'} editable={true}  errorMsg={error.name}></Input>
                            <Input id={'orderNo'} value={orderNo} required={true} setValue={setOrderNo} title={'オーダーNo.'} editable={true}  errorMsg={error.orderNo}></Input>
                            <Input id={'customerName'} value={customerName} required={false} setValue={setCustomeName} title={'顧客名'} editable={true}  errorMsg={error.customerName}></Input>
                            <InputCalenda id={'orderDate'}  value={orderDate} required={false} setValue={setOrderDate} title={'オーダー日付'} editable={true} errorMsg={error.status}></InputCalenda>
                            <Selection id={'status'} title={'ステータス'} options={options} required={true} value={status} errorMsg={error.status} setValue={setStatus} ></Selection>
                            <Input id={'price'} value={price} required={false} setValue={setPrice} title={'受注額'} editable={true}  errorMsg={error.price}></Input> <span id="unit1">円</span>
                            <Input id={'unit'} value={unit} required={false} setValue={setUnit} title={'社内単金'} editable={true}  errorMsg={error.unit}></Input><span id="unit2">円/Manhour</span>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="button" id="regist" className="btn btn-primary">登録</button>
                    </div>
                    <p className="message">
                        オーダー登録が完了できました！
                    </p>
                </div>
            </div>
        </Fragment>
    )
}