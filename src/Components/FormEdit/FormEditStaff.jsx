import { Fragment, useState } from "react";
import Input from "../Input/Input";
import Selection from "../Selection/Selection";
import './FormEdit.css'

const options = [{ label: '社員', value: 1 }]

export default function FormEdit() {
    const [id, setId] = useState("０００１２３");
    const [lastName, setLastName] = useState("山田");
    const [firstName, setFirstName] = useState("太郎");
    const [lastNameFurigana, setLastNameFurigana] = useState("やまだ");
    const [firstNameFurigana, setFirstNameFurigana] = useState("たろう");
    const [office, setOffice] = useState(0);
    const [error, setError] = useState({
        id: "エラーメッセージXXXX",
        lastName: "エラーメッセージXXXX",
        firstName: "エラーメッセージXXXX",
        lastNameFurigana: "エラーメッセージXXXX",
        firstNameFurigana: "エラーメッセージXXXX",
        office: "エラーメッセージXXXX"
    });
    return (
        <Fragment>
            <div className="container">
                <div className="form-edit">
                    <div>
                        <p className="form-title">
                            スタッフ情報編集画面
                        </p>
                        <div className="inputs-group">
                            <Input value={id} required={true} setValue={setId} title={'スタッフID'}
                                editable={false} ></Input>
                            <Input id={'lastname'} value={lastName} required={true} setValue={setLastName}
                                title={'苗字'} editable={true} errorMsg={error.lastName}></Input>
                            <Input id={'firstname'} value={firstName} required={true} setValue={setFirstName}
                                title={'名前'} editable={true} errorMsg={error.firstName}></Input>
                            <Input id={'lastnamefurigana'} value={lastNameFurigana} required={false} setValue={setLastNameFurigana}
                                title={'苗字（ふりがな）'} editable={true} errorMsg={error.lastNameFurigana}></Input>
                            <Input id={'firstnamefurigana'} value={firstNameFurigana} required={false} setValue={setFirstNameFurigana}
                                title={'名前（ふりがな）'} editable={true} errorMsg={error.firstNameFurigana}></Input>
                            <Selection id={'office'} title={'職制'} options={options} required={true} value={office}
                                setValue={setOffice} errorMsg={error.office}></Selection>
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