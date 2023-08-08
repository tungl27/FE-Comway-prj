import { Fragment, useState } from "react";
import './Pagination.css'
import preB from '../../images/u68.svg'
import forwardButton from '../../images/u67.svg'

export default function Pagination({ activepage, startPage, endPage, setActive }) {

    const increPage = () => {
        console.log('increasing')
        if (activepage < endPage) {
            setActive(activepage + 1)
        }
    }
    const reducePage = () => {
        console.log('decreasing')
        if (activepage > startPage) {
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