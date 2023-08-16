import { Fragment, useEffect, useState } from "react";
import "./Pagination.css";
import preB from "../../images/u68.svg";
import forwardButton from "../../images/u67.svg";

export default function Pagination({
  activepage,
  totalRecords,
  setActive,
  pageSize,
}) {
  const [totalPage, setTotalPage] = useState(
    Math.ceil(totalRecords / pageSize)
  );

  useEffect(() => {
    setTotalPage(Math.ceil(totalRecords / pageSize));
  }, [totalRecords, pageSize]);

  useEffect(() => {
    // Kiểm tra nếu dữ liệu trên trang hiện tại không còn đủ
    if (totalRecords > 0 && activepage > totalPage && activepage > 1) {
      setActive(activepage - 1); // Nhảy về trang trước đó
    }
  }, [totalPage]);

  let pageRange = [];
  for (let i = 0; i < 3; i++) {
    if (activepage === 1 && i <= totalPage) {
      pageRange.push(i + 1);
    } else if (activepage < totalPage) {
      pageRange.push(activepage - 1 + i);
    } else if (activepage === totalPage) {
      pageRange.push(activepage - 2 + i);
    }
  }
  const increPage = () => {
    console.log("increasing");
    if (activepage < totalPage) {
      setActive(activepage + 1);
    }
  };
  const reducePage = () => {
    console.log("decreasing");
    if (activepage > 1) {
      setActive(activepage - 1);
    }
  };

  //   useEffect(() => {
  //     if (totalPage < activepage) {
  //       setActive(totalPage);
  //     }
  //   }, [totalPage]);
  return (
    <Fragment>
      {totalRecords > 10 && (
        <div className="pagination-group text-center mt-3">
          {/* <div className="button-group"> */}
          <img
            id="preButton"
            src={preB}
            alt=""
            srcSet=""
            onClick={() => reducePage()}
          />
          {pageRange.map((range, i) => {
            return (
              <button
                key={range}
                type="button"
                className={
                  "stepButton" + (activepage === range ? " active" : "")
                }
                value={range}
                onClick={() => setActive(range)}
              >
                {range}
              </button>
            );
          })}
          <img
            src={forwardButton}
            alt=""
            srcSet=""
            onClick={() => increPage()}
          />
          {/* </div> */}
        </div>
      )}
    </Fragment>
  );
}
