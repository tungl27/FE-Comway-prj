import React, { Fragment, useEffect ,useState } from "react";
import "./staffTable.css";
import {  useNavigate } from "react-router-dom";
import DialogConfirm from "../../Popup/DialogConfirm";
import staffTypeConvert from "../../../utils/staffTypeConvert";

export default function StaffTable({
  activePage,
  tableData,
  pageSize,
  deleteStaff,
  sortTableRequire,
}) {
  const navigate = useNavigate();
  const [currentData, setCurent] = useState([]);

  // state delelte
  const [showPopup, setShowPopup] = useState(false);
  const [deletedStaffId, setDeletedStaffId] = useState();

  const handlDeleteSeleted = (id) => {
    setDeletedStaffId(id);
    setShowPopup(true);
  };

  useEffect(() => {
    const startIndexData = (activePage - 1) * pageSize;
    const endIndexData = activePage * pageSize;
    setCurent(tableData.slice(startIndexData, endIndexData));
  }, [activePage, tableData]);

  return (
    <Fragment>
      <div className="mt-4">
        <table className="tableList" style={{ width: "100%" }}>
          <thead className="table-head">
            <tr>
              <th style={{ width: "10%" }}>No</th>
              <th
                style={{ width: "25%" }}
                onClick={() => sortTableRequire("last_name")}
              >
                氏名
              </th>
              <th
                style={{ width: "30%" }}
                onClick={() => sortTableRequire("last_name_furigana")}
              >
                氏名（振り）
              </th>
              <th style={{ width: "15%" }}>職制</th>
              <th style={{ width: "20%" }}></th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr key={row.id} className={index % 2 === 0 ? "even-row2" : ""}>
                <td>{(activePage - 1) * pageSize + index + 1}</td>
                <td>{`${row.last_name}${row.first_name}`}</td>
                <td>{`${row.last_name_furigana}${row.first_name_furigana}`}</td>
                <td>{staffTypeConvert(row.staff_type)}</td>
                <td>
                  <div className="d-flex justify-content-center  ">
                    <span
                      className="edit-link"
                      onClick={() => navigate("/staff/detail?id=" + row.id , {state: { prePage: activePage }} )}
                    >
                      詳細
                    </span>

                    <span
                      className="delete-link"
                      onClick={() => handlDeleteSeleted(row.id)}
                    >
                      削除
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <DialogConfirm
        show={showPopup}
        onClose={() => setShowPopup(false)}
        acceptAction={() => deleteStaff(deletedStaffId)}
        title="確認"
        body={process.env.REACT_APP_CONFIRM_DELETE_STAFF}
      ></DialogConfirm>
    </Fragment>
  );
}
