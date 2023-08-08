import { Fragment, useState } from "react";
import './Pagination.css'
import preB from '../../images/u68.svg'
import forwardButton from '../../images/u67.svg'

export default function Pagination({ activepage, totalRecords, pageSize, setActive }) {

    const totalPage = Math.ceil(totalRecords/pageSize)
    let startPage = 0;
    let endPage = 0;
    if(totalPage < 3){
        startPage = 1;
        endPage = totalPage;
    } if(activepage === totalPage ){
        startPage = activepage - 2
        endPage = activepage
    }else if(activepage === 1){
        startPage = activepage
        endPage = activepage + 2
    }else{
        startPage = activepage - 1
        endPage = activepage + 1
    }
    const increPage = () => {
        console.log('increasing')
        if (activepage < totalPage) {
            setActive(activepage + 1)
        }
    }
    const reducePage = () => {
        console.log('decreasing')
        if (activepage > 1) {
            setActive(activepage - 1)
        }
    }
    return (
        <Fragment>
            <div className="pagination-group text-center mt-3">
                {/* <div className="button-group"> */}
                <img id="preButton" src={preB} alt="" srcSet="" onClick={() => reducePage()} />
                <button type="button" className={'stepButton' + (activepage === startPage ? ' active' : '')} value={startPage}>{startPage}</button>
                <button type="button" className={'stepButton' + (activepage === startPage + 1 ? ' active' : '')} value={startPage - 1}>{startPage + 1}</button>
                <button type="button" className={'stepButton' + (activepage === endPage ? ' active' : '')} value={endPage}>{endPage}</button>
                <img src={forwardButton} alt="" srcSet="" onClick={() => increPage()} />
                {/* </div> */}
            </div>
        </Fragment>
    )
}