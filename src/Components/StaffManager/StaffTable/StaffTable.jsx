import React, { Fragment } from "react";
import "./staffTable.css";
import { Link } from "react-router-dom";
export default function StaffTable() {
  const tableData = [
    { id: 1, name: "山田太郎", fullName: "やまだたろう", office: "社員" },
    { id: 2, name: "弘黒金", fullName: "ひろしくろがね", office: "London" },
    { id: 3, name: "大山崎", fullName: "おおやまみさき", office: "London" },
    { id: 4, name: "Jane dsddsadad", fullName: 30, office: "London" },
    { id: 5, name: "Jane", fullName: 30, office: "London" },
    { id: 6, name: "Jane", fullName: 30, office: "London" },
    { id: 7, name: "Jane", fullName: 30, office: "London" },
    { id: 8, name: "John", fullName: 25, office: "New York" },
    { id: 9, name: "Jane", fullName: 30, office: "London" },
    { id: 10, name: "Jane", fullName: 30, office: "London" },
  ];
  return (
    <Fragment>
      <div className="mt-4">
        <table className="" style={{ width: "100%" }}>
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
            {tableData.map((row, index) => (
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
