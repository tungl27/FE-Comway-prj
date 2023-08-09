import { Fragment, useState } from "react";
import Input from "../Input/Input";
import './FormCreate.css'
import InputCalenda from "../Input/InputCalenda";

const options = [{ label: '社員', value: 1 }]

export default function CreateOrder() {
    const [name, setName] = useState("全社支払合算システム機能");
    const [email, setEmail] = useState("CIS2023–020");
    const [password, setPassword] = useState("トーテス");
    const [passwordConfirm, setPasswordConfirm] = useState("08/０４/２０２３");
    const [error, setError] = useState("");
    return (
        <Fragment>
            <div className="container">
                <div className="form-create-order">
                    <div>
                        <p className="form-title">
                            オーダー登録画面
                        </p>
                        <div className="order-inputs-group">
                            <Input value={name} required={true} setValue={setName} title={'案件名'} editable={true}></Input>
                            <Input value={email} required={true} setValue={setEmail} title={'オーダーNo.'} editable={true}></Input>
                            <Input value={password} required={false} setValue={setPassword} title={'顧客名'} editable={true}></Input>
                            <InputCalenda value={passwordConfirm} required={false} setValue={setPasswordConfirm} title={'オーダー日付'} editable={true}></InputCalenda>
                            <Input value={passwordConfirm} required={false} setValue={setPasswordConfirm} title={'ステータス'} editable={true}></Input>
                            <Input value={passwordConfirm} required={false} setValue={setPasswordConfirm} title={'受注額'} editable={true}></Input> <span id="unit1">円</span>
                            <Input value={passwordConfirm} required={false} setValue={setPasswordConfirm} title={'社内単金'} editable={true}></Input><span id="unit2">円/Manhour</span>
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