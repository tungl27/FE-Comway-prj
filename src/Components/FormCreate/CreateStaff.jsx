import { Fragment, useEffect, useState } from "react";
import Input from "../Input/Input";
import './FormCreate.css'
import Selection from "../Selection/Selection";
import iskanji from "../../utils/validateKanji";
import isHiragana from "../../utils/validataHiragana";
import axios from "axios";

const options = [{ label: '社員', value: 1 }, { label: '社員', value: 12 }]
export default function FormCreate() {
    const [lastName, setLastName] = useState("山田");
    const [firstName, setFirstName] = useState("太郎");
    const [lastNameFurigana, setLastNameFurigana] = useState("やまだ");
    const [firstNameFurigana, setFirstNameFurigana] = useState("たろう");
    const [office, setOffice] = useState('');
    const [error, setError] = useState({
        lastName: "エラーメッセージXXXX",
        firstName: "エラーメッセージXXXX",
        lastNameFurigana: "エラーメッセージXXXX",
        firstNameFurigana: "エラーメッセージXXXX",
        office: "エラーメッセージXXXX"
    });

    const submitHandler = async () => {
        let errorLastName = ''
        let errorFirstName = ''
        let errorLastNameFurigana = ''
        let errorFirstNameFurigana = ''
        let errorOffice = ''
        if (lastName === '') {
            errorLastName = "This item is required!"
        } else if (!iskanji(lastName)) {
            errorLastName = "Only input 2byte Kanji character!"
        } else {
            errorLastName = ""
        }
        if (firstName === '') {
            errorFirstName = "This item is required!"
        } else if (!iskanji(firstName)) {
            errorFirstName = "Only input 2byte Kanji character!"
        } else {
            errorFirstName = ""
        }

        if (lastNameFurigana === '') {
            errorLastNameFurigana = "This item is required!"
        } else if (!isHiragana(lastNameFurigana)) {
            errorLastNameFurigana = "Only input 2 byte Hiragana character!"
        } else {
            errorLastNameFurigana = ""
        }
        if (firstNameFurigana === '') {
            errorFirstNameFurigana = "This item is required!"
        } else if (!isHiragana(firstNameFurigana)) {
            errorFirstNameFurigana = "Only input 2 byte Hiragana character!"
        } else {
            errorFirstNameFurigana = ""
        }
        if (office === '') {
            errorOffice = "This item must be selected!"
        } else {
            errorOffice = ""
        }
        setError({
            ...error, lastName: errorLastName, firstName: errorFirstName,
            lastNameFurigana: errorLastNameFurigana, firstNameFurigana: errorFirstNameFurigana, office: errorOffice
        })
        if ((errorLastName ?? errorFirstName ?? errorLastNameFurigana ?? errorLastNameFurigana ?? errorOffice) === '') {
            await axios.post("http://127.0.0.1:8000/Staff_Create", {
                "last_name": lastName,
                "first_name": firstName,
                "last_name_furigana": lastNameFurigana,
                "first_name_furigana": firstNameFurigana,
                "office": office,
                "Condtion_verify": false,
                "Condition_menu": false,
                "Condition_Staff_List": true,
                "IDLoginUser": localStorage.getItem("IDLoginUser")
            }).then((respone) => {
                console.log(respone)
            })
        }
    }
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
                        <button type="button" id="regist" className="btn btn-primary" onClick={() => submitHandler()}>登録</button>
                    </div>
                    <p className="message">
                        スタッフ登録が完了できました！
                    </p>
                </div>
            </div>
        </Fragment>
    )
}