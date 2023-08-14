import { Fragment, useState } from "react";
import Input from "../Input/Input";
import './FormCreate.css'
import Selection from "../Selection/Selection";

const options = [{ label: '社員', value: 1 }]
export default function FormCreate() {
    const [lastName, setLastName] = useState("山田");
    const [firstName, setFirstName] = useState("太郎");
    const [lastNameFurigana, setLastNameFurigana] = useState("やまだ");
    const [firstNameFurigana, setFirstNameFurigana] = useState("たろう");
    const [office, setOffice] = useState(0);
    const [error, setError] = useState({
        lastName: "エラーメッセージXXXX",
        firstName: "エラーメッセージXXXX",
        lastNameFurigana: "エラーメッセージXXXX",
        firstNameFurigana: "エラーメッセージXXXX",
        office: "エラーメッセージXXXX"
    });
    return (
        <Fragment>
            <div className="container">
                <div className="form-create">
                    <div>
                        <p className="form-title-create">
                            スタッフ登録画面
                        </p>
                        <div className="staff-create-inputs-group">
                            <Input id={'lastname-create'} value={lastName} required={true} setValue={setLastName} 
                            title={'苗字'} editable={true} errorMsg={error.lastName}></Input>
                            <Input id={'firstname-create'} value={firstName} required={true} setValue={setFirstName} 
                            title={'名前'} editable={true} errorMsg={error.firstName}></Input>
                            <Input id={'lastnamefurigana-create'} value={lastNameFurigana} required={false} setValue={setLastNameFurigana} 
                            title={'苗字（ふりがな）'} editable={true} errorMsg={error.lastNameFurigana}></Input>
                            <Input id={'firstnamefurigana-create'} value={firstNameFurigana} required={false} setValue={setFirstNameFurigana} 
                            title={'名前（ふりがな）'} editable={true} errorMsg={error.firstNameFurigana}></Input>
                            <Selection id={'office-create'} title={'職制'} options={options} required={true} value={office} 
                            setValue={setOffice} errorMsg={error.office}></Selection>
                        </div>
                    </div>
                    <div className="text-center"> 
                        <button type="button" id="regist" className="btn btn-primary">登録</button>
                    </div>
                    <p className="message">
                        スタッフ登録が完了できました！
                    </p>
                </div>
            </div>
        </Fragment>
    )
}