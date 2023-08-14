import React, { Fragment, useEffect, useRef } from "react";
import "./staffTable.css";
import { Link } from "react-router-dom";



export default function StaffTable({ activePage, tableData, pageSize }) {

  const ref = useRef(tableData)
  const startIndexData = (activePage - 1) * pageSize
  const endIndexData = (activePage * pageSize)
  ref.current = tableData.slice(startIndexData, endIndexData)
  console.log(activePage)

  return (
    <Fragment>
      <div className="mt-4">
        <table id="tableList" className="" style={{ width: "100%" }}>
          <thead className="table-head">
            <tr>
              <th>No</th>
              <th>氏名</th>
              <th>氏名（振り）</th>
              <th>職制</th>
              <th>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                ></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {ref.current.map((row, index) => (
              <tr key={row.id} className={index % 2 === 0 ? "even-row2" : ""}>
                <td style={{ width: "10%" }}>{row.id}</td>
                <td style={{ width: "25%" }}>{row.name}</td>
                <td style={{ width: "30%" }}>{row.fullName}</td>
                <td style={{ width: "15%" }}>{row.office}</td>
                <td style={{ width: "20%" }}>
                  <div className="d-flex justify-content-center  ">
                    <Link to={"/staff/detail"}>
                      <span
                        // onClick={() => {
                        //   console.log("Sddddddddd");
                        // }}
                        className="edit-o-link"
                      >
                        詳細
                      </span>
                    </Link>

                    <span className="delete-link">削除</span>
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
