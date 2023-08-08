import { Fragment, useState } from "react";
import Input from "../Input/Input";
import Selection from "../Selection/Selection";
import './FormEdit.css'

const options = [{ label: '社員', value: 1 }]

export default function FormEdit() {
    const [id, setId] = useState("０００１２３");
    const [name, setName] = useState("山田");
    const [email, setEmail] = useState("太郎");
    const [password, setPassword] = useState("やまだ");
    const [passwordConfirm, setPasswordConfirm] = useState("たろう");
    const [error, setError] = useState("");
    return (
        <Fragment>
            <div className="container">
                <div className="form-edit">
                    <div>
                        <p className="form-title">
                            スタッフ情報編集画面
                        </p>
                        <div className="inputs-group">
                            <Input value={id} required={true} setValue={setId} title={'スタッフID'} editable={false}></Input>
                            <Input value={name} required={true} setValue={setName} title={'苗字'} editable={true}></Input>
                            <Input value={email} required={true} setValue={setEmail} title={'名前'} editable={true}></Input>
                            <Input value={email} required={false} setValue={setEmail} title={'苗字（ふりがな）'} editable={true}></Input>
                            <Input value={email} required={false} setValue={setEmail} title={'名前（ふりがな）'} editable={true}></Input>
                            <Selection title={'職制'} options={options} required={true} selected={0} ></Selection>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="button" id="change" className="btn btn-primary">更新</button>
                        <button type="button" id="cancel" className="btn btn-primary">キャンセル</button>
                    </div>
                    <p className="message">
                        スタッフ登録が完了できました！
                    </p>
                </div>
            </div>
        </Fragment>
    )
}