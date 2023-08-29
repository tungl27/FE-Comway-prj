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
  const [currentData, setCurent] = useState([]);

  const sortedData = sortData(currentData, sortConfig);
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

  function sortData(data, config) {
    if (!config) {
      return data;
    }

    const { key, direction } = config;

    const sortedData = [...data];
    sortedData.sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "asc" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });

    return sortedData;
  }

  const [sortConfig, setSortConfig] = useState(null);

  function sortTableRequire(key) {
    let direction = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  }

  return (
    <Fragment>
      <div className="mt-4">
        <table className="tableList" style={{ width: "100%" }}>
          <thead className="table-head">
            <tr>
              <th style={{ width: "5%" }}>No</th>
              <th
                style={{ width: "15%" }}
                onClick={() => sortTableRequire("order_number")}
              >
                オーダーNo.
              </th>
              <th
                style={{ width: "30%" }}
                onClick={() => sortTableRequire("project_name")}
              >
                案件名
              </th>
              <th
                style={{ width: "20%" }}
                onClick={() => sortTableRequire("client_name")}
              >
                顧客名
              </th>
              <th style={{ width: "10%" }}>ステータス</th>
              <th style={{ width: "20%" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                ></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "even-row2" : ""}>
                <td>{(activePage - 1) * pageSize + index + 1}</td>
                <td>{row.order_number}</td>
                <td>{row.project_name}</td>
                <td>{row.client_name}</td>
                <td> {statusConvert(row.status)}</td>
                <td>
                  <div className="d-flex justify-content-between px-2">
                    <Link to={"/order/detail?id=" + row.id}>
                      <span className="edit-o-link">詳細</span>
                    </Link>
                    <span
                      className="delete-o-link"
                      onClick={() => handlDeleteSeleted(row.id)}
                    >
                      削除
                    </span>
                    <Link to={"/order/actual?id=" + row.id}>
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
        title="Confirm"
        body="Do you want to delete selected order info?"
      ></DialogConfirm>
    </Fragment>
  );
}
