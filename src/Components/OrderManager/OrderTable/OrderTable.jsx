import React, { Fragment, useEffect, useRef, useState } from "react";
import "./orderTable.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { DELETE_ORDER } from "../../../theme/configApi";
import Dialog from "../../Popup/DialogConfirm";
import { Button, Modal } from "react-bootstrap";
import DialogConfirm from "../../Popup/DialogConfirm";
import statusConvert from "../../../utils/convertStatus";

export default function OrderTableComponent({
  activePage,
  tableData,
  pageSize,
  deleteOrder,
}) {
  const [curentData, setCurent] = useState([]);

  useEffect(() => {
    const startIndexData = (activePage - 1) * pageSize;
    const endIndexData = activePage * pageSize;
    setCurent(tableData.slice(startIndexData, endIndexData));
  }, [activePage, tableData]);

  // state delelte
  const [showPopup, setShowPopup] = useState(false);
  const [deletedId, setDeletedId] = useState();

  const handlDeleteSeleted = (id) => {
    setDeletedId(id);
    setShowPopup(true);
  };


  return (
    <Fragment>
      <div className="mt-4">
        <table className="tableList" style={{ width: "100%" }}>
          <thead className="table-head">
            <tr>
              <th style={{ width: "5%" }}>No</th>
              <th style={{ width: "15%" }}>オーダーNo.</th>
              <th style={{ width: "30%" }}>案件名</th>
              <th style={{ width: "20%" }}>顧客名</th>
              <th style={{ width: "10%" }}>ステータス</th>
              <th style={{ width: "20%" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                ></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {curentData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "even-row2" : ""}>
                <td>{(activePage - 1) * pageSize + index + 1}</td>
                <td>{row.order_number}</td>
                <td>{row.project_name}</td>
                <td>{row.client_name}</td>
                <td> {statusConvert(row.status)}</td>
                <td>
                  <div className="d-flex justify-content-between px-2">
                    <Link to={"/order/detail"}>
                      <span className="edit-o-link">詳細</span>
                    </Link>
                    <span
                      className="delete-o-link"
                      onClick={() => handlDeleteSeleted(row.id)}
                    >
                      削除
                    </span>
                    <Link to={"/order/actual"}>
                      <span className="result-o-link">実績入力</span>
                    </Link>
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
        acceptAction={() => deleteOrder(deletedId)}
        title="Confirm Transaction"
        body="選択した注文情報を削除しますか"
      ></DialogConfirm>
    </Fragment>
  );
}
