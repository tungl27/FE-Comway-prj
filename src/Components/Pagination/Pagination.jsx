import { Fragment, useEffect } from "react";
import "./Pagination.css";
import preB from "../../images/u68.svg";
import forwardButton from "../../images/u67.svg";

export default function Pagination({
  activepage,
  totalRecords,
  pageSize,
  setActive,
  totalPage,
}) {
  //   const totalPage = Math.ceil(totalRecords / pageSize);

  //   INSERT INTO `laravel`.`t_-- projects` (`created_at`, `project_name`, `order_number`, `client_name`, `status`, `order_income`, `internal_unit_price`, `del_flg`, `created_user`, `updated_user`) VALUES ('', '324', '32', '32', '0', '3123', '3123', '0', '0', '0');

  //   SET SQL_SAFE_UPDATES = 0;
  //   UPDATE `laravel`.`t_projects` SET `del_flg` = '0';
  //   SET SQL_SAFE_UPDATES = 1;

  let startPage = 0;
  let endPage = 0;
  if (totalPage < 3) {
    startPage = 1;
    endPage = totalPage;
  } else if (activepage === totalPage) {
    startPage = activepage - 2;
    endPage = activepage;
  } else if (activepage === 1) {
    startPage = activepage;
    endPage = activepage + 2;
  } else {
    startPage = activepage - 1;
    endPage = activepage + 1;
  }
  let pageRange = [];
  for (let i = startPage; i <= endPage; i++) {
    pageRange.push(i);
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
