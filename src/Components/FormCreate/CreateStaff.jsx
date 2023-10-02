import { Fragment, useContext, useEffect, useRef, useState } from "react";
import Input from "../Input/Input";
import './FormCreate.css'
import Selection from "../Selection/Selection";
import iskanji from "../../utils/validateKanji";
import isHiragana from "../../utils/validataHiragana";
import axios from "axios";
import { CREATE_STAFF } from "../../theme/configApi";
import { SetEdited, Edited } from "../../State/editContext";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";

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
const options = [{ label: '社員', value: 0 }, { label: 'パートナー', value: 1 }]

export default function FormCreate() {
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastNameFurigana, setLastNameFurigana] = useState("");
    const [firstNameFurigana, setFirstNameFurigana] = useState("");
    const [staff_type, setStaff_type] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState({
        lastName: "",
        firstName: "",
        lastNameFurigana: "",
        firstNameFurigana: "",
        staff_type: ""
    });

    const refButton = useRef(null)
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)

    const setEdited = useContext(SetEdited)
    const edited = useContext(Edited)
    useEffect(() => {
        if (   
            (lastName === '' || lastName === null || lastName === undefined) &&
            (firstName === '' || firstName === null || firstName === undefined) &&
            (lastNameFurigana === '' || lastNameFurigana === null || lastNameFurigana === undefined) &&
            (firstNameFurigana === '' || firstNameFurigana === null || firstNameFurigana === undefined) &&
            (staff_type === '' || staff_type === null || staff_type === undefined)
  ) {
            setEdited(false)
        } else {
            setEdited(true)
        }
      
    }, [lastName, firstName, lastNameFurigana, firstNameFurigana, staff_type])


    const submitHandler = async () => {
        let errorLastName = ''
        let errorFirstName = ''
        let errorLastNameFurigana = ''
        let errorFirstNameFurigana = ''
        let errorstaff_type = ''
        if (lastName === '') {
            errorLastName = process.env.REACT_APP_REQUIRED_FIELD_ERROR
        } else if (!iskanji(lastName)) {
            errorLastName = process.env.REACT_APP_REQUIRED_2_BYTE_ERROR
        } else {
            errorLastName = ""
        }
        if (firstName === '') {
            errorFirstName = process.env.REACT_APP_REQUIRED_FIELD_ERROR
        } else if (!iskanji(firstName)) {
            errorFirstName = process.env.REACT_APP_REQUIRED_2_BYTE_ERROR
        } else {
            errorFirstName = ""
        }

        if (lastNameFurigana === '') {
            errorLastNameFurigana = process.env.REACT_APP_REQUIRED_FIELD_ERROR
        } else if (!isHiragana(lastNameFurigana)) {
            errorLastNameFurigana = process.env.REACT_APP_REQUIRED_2_BYTE_ERROR
        } else {
            errorLastNameFurigana = ""
        }
        if (firstNameFurigana === '') {
            errorFirstNameFurigana = process.env.REACT_APP_REQUIRED_FIELD_ERROR
        } else if (!isHiragana(firstNameFurigana)) {
            errorFirstNameFurigana = process.env.REACT_APP_REQUIRED_2_BYTE_ERROR
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
            await axios.post(CREATE_STAFF, {
                "last_name": lastName,
                "first_name": firstName,
                "last_name_furigana": lastNameFurigana,
                "first_name_furigana": firstNameFurigana,
                "staff_type": staff_type,
                "Condtion_verify": false,
                "Condition_menu": false,
                "Condition_Staff_List": true,
                "IDLoginUser": localStorage.getItem("IDLoginUser")
            }).then((respone) => {
                if (respone.data === 'New Staff is created') {
                    setMessage(process.env.REACT_APP_CREATE_STAFF_SUCCESS)
                    setLastName('')
                    setFirstName('')
                    setLastNameFurigana('')
                    setFirstNameFurigana('')
                    setStaff_type('')
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
                            <Input id={'lastnamefurigana-create'} value={lastNameFurigana} required={true} setValue={setLastNameFurigana}
                                title={'苗字（ふりがな）'} editable={true} errorMsg={error.lastNameFurigana}></Input>
                            <Input id={'firstnamefurigana-create'} value={firstNameFurigana} required={true} setValue={setFirstNameFurigana}
                                title={'名前（ふりがな）'} editable={true} errorMsg={error.firstNameFurigana}></Input>
                            <Selection id={'staff_type-create'} title={'職制'} options={options} required={true} value={staff_type}
                                setValue={setStaff_type} errorMsg={error.staff_type}></Selection>
                        </div>
                    </div>
                    <div className="text-center">
                        <button ref={refButton} type="button" id="regist" className="btn btn-primary" onClick={() => submitHandler()}>登録</button>
                        <button type="button" id="cancelRegis" className="btn btn-primary" onClick={() => { edited ? setShowModal(true) : navigate('/staff/list') } }>キャンセル</button>
                        {/* <button type="button" id="cancelRegis" className="btn btn-primary" onClick={() =>   console.log(edited ) }> キャンセル</button> */}

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
                    <button className="btn btn-secondary"  onClick={() => navigate('/staff/list')}>いいえ</button>
                </div>
            </ReactModal>
        </Fragment >
    );
}
