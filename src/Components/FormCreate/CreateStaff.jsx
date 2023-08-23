import { Fragment, useEffect, useState } from "react";
import Input from "../Input/Input";
import "./FormCreate.css";
import Selection from "../Selection/Selection";
import iskanji from "../../utils/validateKanji";
import isHiragana from "../../utils/validataHiragana";
import axios from "axios";
import { CREATE_STAFF } from "../../theme/configApi";

const options = [
  { label: "社員", value: 1 },
  { label: "社員", value: 12 },
];
export default function FormCreate() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastNameFurigana, setLastNameFurigana] = useState("");
  const [firstNameFurigana, setFirstNameFurigana] = useState("");
  const [staff_type, setstaff_type] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({
    lastName: "",
    firstName: "",
    lastNameFurigana: "",
    firstNameFurigana: "",
    staff_type: "",
  });

  const submitHandler = async () => {
    let errorLastName = "";
    let errorFirstName = "";
    let errorLastNameFurigana = "";
    let errorFirstNameFurigana = "";
    let errorStaff_type = "";
    if (lastName === "") {
      errorLastName = process.env.REACT_APP_REQUIRED_FIELD_ERROR;
    } else if (!iskanji(lastName)) {
      errorLastName = process.env.REACT_APP_REQUIRED_2_BYTE_KANJI_ERROR;
    } else {
      errorLastName = "";
    }
    if (firstName === "") {
      errorFirstName = process.env.REACT_APP_REQUIRED_FIELD_ERROR;
    } else if (!iskanji(firstName)) {
      errorFirstName = process.env.REACT_APP_REQUIRED_2_BYTE_KANJI_ERROR;
    } else {
      errorFirstName = "";
    }

    if (lastNameFurigana === "") {
      errorLastNameFurigana = process.env.REACT_APP_REQUIRED_FIELD_ERROR;
    } else if (!isHiragana(lastNameFurigana)) {
      errorLastNameFurigana =
        process.env.REACT_APP_REQUIRED_2_BYTE_HIRAGANA_ERRORs;
    } else {
      errorLastNameFurigana = "";
    }
    if (firstNameFurigana === "") {
      errorFirstNameFurigana = process.env.REACT_APP_REQUIRED_FIELD_ERROR;
    } else if (!isHiragana(firstNameFurigana)) {
      errorFirstNameFurigana =
        process.env.REACT_APP_REQUIRED_2_BYTE_HIRAGANA_ERRORs;
    } else {
      errorFirstNameFurigana = "";
    }
    if (staff_type === "") {
      errorStaff_type = process.env.REACT_APP_REQUIRED_SELECTED_ERROR;
    } else {
      errorStaff_type = "";
    }
    setError({
      ...error,
      lastName: errorLastName,
      firstName: errorFirstName,
      lastNameFurigana: errorLastNameFurigana,
      firstNameFurigana: errorFirstNameFurigana,
      staff_type: errorStaff_type,
    });
    if (
      !(
        errorLastName ??
        errorFirstName ??
        errorLastNameFurigana ??
        errorLastNameFurigana ??
        errorStaff_type
      ) !== ""
    ) {
      await axios
        .post(CREATE_STAFF, {
          last_name: lastName,
          first_name: firstName,
          last_name_furigana: lastNameFurigana,
          first_name_furigana: firstNameFurigana,
          staff_type: staff_type,
          Condtion_verify: false,
          Condition_menu: false,
          Condition_Staff_List: true,
          IDLoginUser: localStorage.getItem("IDLoginUser"),
        })
        .then((respone) => {
          if (respone.data === "New Staff is created") {
            setMessage(process.env.REACT_APP_CREATE_STAFF_SUCCESS);
            setLastName("");
            setFirstName("");
            setLastNameFurigana("");
            setFirstNameFurigana("");
            setstaff_type("");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    const id = setTimeout(() => {
      setMessage("");
    }, 5000);
    return () => clearTimeout(id);
  }, [message]);
  return (
    <Fragment>
      <div className="container">
        <div className="form-create">
          <div>
            <p className="form-title-create">スタッフ登録画面</p>
            <div className="staff-create-inputs-group">
              <Input
                id={"lastname-create"}
                value={lastName}
                required={true}
                setValue={setLastName}
                title={"苗字"}
                editable={true}
                errorMsg={error.lastName}
              ></Input>
              <Input
                id={"firstname-create"}
                value={firstName}
                required={true}
                setValue={setFirstName}
                title={"名前"}
                editable={true}
                errorMsg={error.firstName}
              ></Input>
              <Input
                id={"lastnamefurigana-create"}
                value={lastNameFurigana}
                required={false}
                setValue={setLastNameFurigana}
                title={"苗字（ふりがな）"}
                editable={true}
                errorMsg={error.lastNameFurigana}
              ></Input>
              <Input
                id={"firstnamefurigana-create"}
                value={firstNameFurigana}
                required={false}
                setValue={setFirstNameFurigana}
                title={"名前（ふりがな）"}
                editable={true}
                errorMsg={error.firstNameFurigana}
              ></Input>
              <Selection
                id={"staff_type-create"}
                title={"職制"}
                options={options}
                required={true}
                value={staff_type}
                setValue={setstaff_type}
                errorMsg={error.staff_type}
              ></Selection>
            </div>
          </div>
          <div className="text-center">
            <button
              type="button"
              id="regist"
              className="btn btn-primary"
              onClick={() => submitHandler()}
            >
              登録
            </button>
          </div>
          <p className="message">{message}</p>
        </div>
      </div>
    </Fragment>
  );
}
