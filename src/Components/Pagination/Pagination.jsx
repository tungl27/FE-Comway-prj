import { Fragment, useEffect, useState } from "react";
import "./Pagination.css";
import preB from "../../images/u68.svg";
import forwardButton from "../../images/u67.svg";
import { useLocation } from "react-router-dom";

export default function Pagination({
  activepage,
  totalRecords,
  setActive,
  pageSize,
}) {

  const [totalPage, setTotalPage] = useState(
    Math.ceil(totalRecords / pageSize)
  );

  const location = useLocation();

  useEffect(() => {
    if ( location.state && location.state.prePage !== null  ) {
      const prePage = location.state.prePage;
      console.log(prePage);
      setActive(parseInt(prePage));
    }
  }, [location.state]);

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

  if (activepage <= totalPage) {
    if (activepage === 1) {
      for (let i = 0; i < 3 && i < totalPage; i++) {
        pageRange.push(i + 1);
      }
    } else if (activepage > 1 && activepage < totalPage) {
      for (let i = -1; i <= 1; i++) {
        if (activepage + i > 0 && activepage + i <= totalPage) {
          pageRange.push(activepage + i);
        }
      }
    } else if (activepage === totalPage && activepage === 2) {
      pageRange.push(1, 2);
    } else if (activepage === totalPage) {
      for (let i = -2; i <= 0 && activepage + i > 0; i++) {
        pageRange.push(activepage + i);
      }
    }
  }

  const increPage = () => {
    // console.log("increasing");
    if (activepage < totalPage) {
      setActive(activepage + 1);
    }
  };
  const reducePage = () => {
    // console.log("decreasing");
    if (activepage > 1) {
      setActive(activepage - 1);
    }
  };

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
                onClick={() => {
                  setActive(range);
                }}
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
