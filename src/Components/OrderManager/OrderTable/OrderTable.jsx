import React, { Fragment } from "react";
import "./orderTable.css";
import { Link } from "react-router-dom";

export default function OrderTableComponent({ orderList }) {
  return (
    <Fragment>
      <div className="mt-4">
        <table id="tableList" className="" style={{ width: "100%" }}>
          <thead className="table-head">
            <tr>
              <th>No</th>
              <th>オーダーNo.</th>
              <th>案件名</th>
              <th>顧客名</th>
              <th>ステータス</th>
              <th>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                ></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "even-row2" : ""}>
                <td style={{ width: "5%" }}>{row.no}</td>
                <td style={{ width: "15%" }}>{row.orderNo}</td>
                <td style={{ width: "30%" }}>{row.projectName}</td>
                <td style={{ width: "20%" }}>{row.customerName}</td>
                <td style={{ width: "10%" }}>{row.status}</td>
                <td style={{ width: "20%" }}>
                  <div className="d-flex justify-content-between px-2">
                    <Link to={"/order/detail"}>
                      <span
                        // onClick={() => {
                        //   console.log("Sddddddddd");
                        // }}
                        className="edit-o-link"
                      >
                        詳細
                      </span>
                    </Link>
                    <span className="delete-o-link">削除</span>
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
    </Fragment>
  );
}
