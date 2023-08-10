import React, { Fragment } from "react";
import "./styles.css";

export default function OrderTableComponent({ orderList }) {
  return (
    <Fragment>
      <div className="mt-4">
        <table className="" style={{ width: "100%" }}>
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
                    <span
                      onClick={() => {
                        console.log("Sddddddddd");
                      }}
                      className="edit-o-link"
                    >
                      詳細
                    </span>
                    <span className="delete-o-link">削除</span>
                    <span className="result-o-link">実績入力</span>
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
