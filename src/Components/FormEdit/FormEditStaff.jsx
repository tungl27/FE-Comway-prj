import { Fragment, useEffect, useRef, useState } from "react";
import Input from "../Input/Input";
import Selection from "../Selection/Selection";
import './FormEdit.css'
import iskanji from "../../utils/validateKanji";
import isHiragana from "../../utils/validataHiragana";
import axios from "axios";
import { CREATE_STAFF, EDIT_STAFF, GET_STAFF_BY_ID } from "../../theme/configApi";
import { useNavigate } from "react-router-dom";
import ReactModal from "react-modal";

const options = [{ label: '一般', value: 0 }, { label: 'パートナー', value: 1 }]

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

export default function FormEdit({ staffId }) {
    const refButton = useRef(null)
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)

    const [staffInfo, setStaffInfo] = useState({})


    useEffect(() => {
        const staffInfo = async () => {
            console.log(staffId)
            await axios.post(GET_STAFF_BY_ID, { "StaffID": staffId, IDLoginUser: localStorage.getItem('IDLoginUser') }).then(respone => {
                setStaffInfo(respone.data)
                console.log(respone.data)
            })
        }
        staffInfo()
    }, [])

    useEffect(() => {
        setId(staffInfo.id)
        setLastName(staffInfo.last_name)
        setFirstName(staffInfo.first_name)
        setLastNameFurigana(staffInfo.last_name_furigana)
        setFirstNameFurigana(staffInfo.first_name_furigana)
        setStaff_type(staffInfo.staff_type)
    }, [staffInfo])

    const [id, setId] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastNameFurigana, setLastNameFurigana] = useState("");
    const [firstNameFurigana, setFirstNameFurigana] = useState("");
    const [staff_type, setStaff_type] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState({
        id: "",
        lastName: "",
        firstName: "",
        lastNameFurigana: "",
        firstNameFurigana: "",
        staff_type: ""
    });

    const submitHandler = async () => {
        let errorLastName = ''
        let errorFirstName = ''
        let errorLastNameFurigana = ''
        let errorFirstNameFurigana = ''
        let errorstaff_type = ''
        if (lastName === '') {
            errorLastName = process.env.REACT_APP_REQUIRED_FIELD_ERROR
        } else if (!iskanji(lastName)) {
            errorLastName = process.env.REACT_APP_REQUIRED_2_BYTE_KANJI_ERROR
        } else {
            errorLastName = ""
        }
        if (firstName === '') {
            errorFirstName = process.env.REACT_APP_REQUIRED_FIELD_ERROR
        } else if (!iskanji(firstName)) {
            errorFirstName = process.env.REACT_APP_REQUIRED_2_BYTE_KANJI_ERROR
        } else {
            errorFirstName = ""
        }

        if (lastNameFurigana === '') {
            errorLastNameFurigana = process.env.REACT_APP_REQUIRED_FIELD_ERROR
        } else if (!isHiragana(lastNameFurigana)) {
            errorLastNameFurigana = process.env.REACT_APP_REQUIRED_2_BYTE_HIRAGANA_ERRORs
        } else {
            errorLastNameFurigana = ""
        }
        if (firstNameFurigana === '') {
            errorFirstNameFurigana = process.env.REACT_APP_REQUIRED_FIELD_ERROR
        } else if (!isHiragana(firstNameFurigana)) {
            errorFirstNameFurigana = process.env.REACT_APP_REQUIRED_2_BYTE_HIRAGANA_ERRORs
        } else {
            errorFirstNameFurigana = ""
        }
        if (staff_type === '') {
            errorstaff_type = process.env.REACT_APP_REQUIRED_SELECTED_ERROR
        } else {
            errorstaff_type = ""
        }
        setError({
            ...error, lastName: errorLastName, firstName: errorFirstName,
            lastNameFurigana: errorLastNameFurigana, firstNameFurigana: errorFirstNameFurigana, staff_type: errorstaff_type
        })
        if (!(errorLastName ?? errorFirstName ?? errorLastNameFurigana ?? errorLastNameFurigana ?? errorstaff_type) !== '') {
            await axios.post(EDIT_STAFF, {
                "last_name": lastName,
                "first_name": firstName,
                "last_name_furigana": lastNameFurigana,
                "first_name_furigana": firstNameFurigana,
                "staff_type": staff_type,
                "Condtion_verify": false,
                "Condition_menu": false,
                "Condition_Staff_List": true,
                "IDLoginUser": localStorage.getItem("IDLoginUser"),
                "ID_Staff_Edit": staffId,
                "Condition_verify": true,
                "Condition_menu": false,
                "Condition_staff_list": false
            }).then((respone) => {
                if (respone.data === 'Staff is edited') {
                    setMessage(process.env.REACT_APP_CREATE_STAFF_SUCCESS)
                    refButton.current.disabled = true
                    setTimeout(() => {
                        setMessage('')
                        refButton.current.disabled = false
                        navigate('/staff/list')
                    }, 5000);
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }

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
                            <Selection id={'staff_type'} title={'職制'} options={options} required={true} value={staff_type}
                                setValue={setStaff_type} errorMsg={error.staff_type}></Selection>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="button" id="change" className="btn btn-primary" onClick={() => submitHandler()} ref={refButton}>更新</button>
                        <button type="button" id="cancel" className="btn btn-primary" onClick={() => setShowModal(true)}>キャンセル</button>
                    </div>
                    <p className="message">
                        {message}
                    </p>
                </div>
            </div>
            <ReactModal isOpen={showModal} style={customStyles} ariaHideApp={false} >
                <p>Do you want to save edited data?</p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary" onClick={() => setShowModal(false)}>yes</button>
                    <button className="btn btn-secondary" onClick={() => navigate('/staff/list')}>No</button>
                </div>
            </ReactModal>
        </Fragment>
    )
}