import React, { Fragment, useEffect, useRef, useState } from "react";
import "./staffTable.css";
import { Link } from "react-router-dom";

export default function StaffTable({ activePage, tableData, pageSize }) {
  // const ref = useRef(tableData);
  // const startIndexData = (activePage - 1) * pageSize;
  // const endIndexData = activePage * pageSize;
  // ref.current = tableData.slice(startIndexData, endIndexData);
  // console.log(activePage);

  // const ref = useRef([]);
  const [curentData, setCurent] = useState([]);

  useEffect(() => {
    const startIndexData = (activePage - 1) * pageSize;
    const endIndexData = activePage * pageSize;
    // ref.current = tableData.slice(startIndexData, endIndexData);
    setCurent(tableData.slice(startIndexData, endIndexData));
    // console.log(ref.current);
  }, [activePage, tableData]);

  function staffTypeConvert(typeId) {
    // 0: staff , 1: partner
    switch (typeId) {
      case 0:
        return "社員";
      case 1:
        return "パートナー";
      default:
        return "";
    }
  }

  return (
    <Fragment>
      <div className="mt-4">
        <table className="tableList" style={{ width: "100%" }}>
          <thead className="table-head">
            <tr>
              <th style={{ width: "10%" }}>No</th>
              <th style={{ width: "25%" }}>氏名</th>
              <th style={{ width: "30%" }}>氏名（振り）</th>
              <th style={{ width: "15%" }}>職制</th>
              <th style={{ width: "20%" }}></th>
            </tr>
          </thead>
          <tbody>
            {/* {ref.current.map((row, index) => ( */}
            {curentData.map((row, index) => (
              <tr key={row.id} className={index % 2 === 0 ? "even-row2" : ""}>
                <td>{(activePage - 1) * pageSize + index + 1}</td>
                <td>{`${row.last_name}${row.first_name}`}</td>
                <td>{`${row.first_name_furigana}${row.last_name_furigana}`}</td>
                <td>{staffTypeConvert(row.staff_type)}</td>
                <td>
                  <div className="d-flex justify-content-center  ">
                    <Link to={"/staff/detail?id=" + row.id}>
                      <span className="edit-o-link">詳細</span>
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
