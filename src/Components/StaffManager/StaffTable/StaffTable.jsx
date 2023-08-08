import React, { Fragment } from "react";
import "./staffTable.css";
export default function StaffTable() {
  const tableData = [
    { id: 1, name: "John", age: 25, city: "New York", country: "USA" },
    { id: 2, name: "Jane", age: 30, city: "London", country: "UK" },
    { id: 3, name: "Jane", age: 30, city: "London", country: "UK" },
    { id: 4, name: "Jane dsddsadad", age: 30, city: "London", country: "UK" },
    { id: 5, name: "Jane", age: 30, city: "London", country: "UK" },
    { id: 6, name: "Jane", age: 30, city: "London", country: "UK" },
    { id: 7, name: "Jane", age: 30, city: "London", country: "UK" },
    { id: 8, name: "John", age: 25, city: "New York", country: "USA" },
    { id: 9, name: "Jane", age: 30, city: "London", country: "UK" },
    { id: 10, name: "Jane", age: 30, city: "London", country: "UK" },
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={row.id}
                className={index % 2 === 0 ? "even-row2" : ""}
                // style={{ backgroundColor: "#80FFFF" }}
              >
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.city}</td>
                <td>{row.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
