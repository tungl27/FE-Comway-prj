import { Fragment, useContext, useEffect, useState } from "react";
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb'
import OrderPlan from "../Components/OrderPlan/OrderPlan";
import { BreadcrumbsContext } from "../State/BreadcrumbContext";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { GET_ACTUAL_PLAN } from "../theme/configApi";
import { SetEdited } from "../State/editContext";


export default function OrderPlanActualInput() {
    const params = useLocation().search
    const [projectData, setProjectData] = useState([])
    // const [projectID, setProjectID] = useState([])
    const projectID = new URLSearchParams(params).get("id");
    const setEdited = useContext(SetEdited)
    const rituF = (data) => {
        if(!data.details){
            return ''
        }
        let kongetu = new Date().getMonth() + 2
        let keikakubi = 0
        do {
            kongetu--
            if (kongetu === 0) {
                kongetu = 12
            }
            let formattedNumber = kongetu.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            })
            keikakubi += parseInt(data.goukei['yoteiGenka' + formattedNumber + 'gatu'] - data.goukei['jissekiGenka' + formattedNumber + 'gatu'])
        } while (kongetu !== 4)
        return keikakubi
    }

    const rituG = (data) => {
        if(!data.details){
            return ''
        }
        let kongetu = new Date().getMonth() + 1
        let keikakubi = 0
        do {
            kongetu++
            if (kongetu === 13) {
                kongetu = 1
            }
            let formattedNumber = kongetu.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            })
            keikakubi += parseInt(data.goukei['yoteiGenka' + formattedNumber + 'gatu'])
        } while (kongetu !== 3)
        return keikakubi
    }
    const sumHorizontalData = (data) => {
        if (data.details) {
            data.details.map((detail, index) => {
                let yoteiJikan = 0
                if (parseInt(detail.staffData.staff_type) === 0) {
                    yoteiJikan =
                        parseInt(detail.planActualData.this_year_04_plan === '' ? 0 : detail.planActualData.this_year_04_plan)
                        + parseInt(detail.planActualData.this_year_05_plan === '' ? 0 : detail.planActualData.this_year_05_plan)
                        + parseInt(detail.planActualData.this_year_06_plan === '' ? 0 : detail.planActualData.this_year_06_plan)
                        + parseInt(detail.planActualData.this_year_07_plan === '' ? 0 : detail.planActualData.this_year_07_plan)
                        + parseInt(detail.planActualData.this_year_08_plan === '' ? 0 : detail.planActualData.this_year_08_plan)
                        + parseInt(detail.planActualData.this_year_09_plan === '' ? 0 : detail.planActualData.this_year_09_plan)
                        + parseInt(detail.planActualData.this_year_10_plan === '' ? 0 : detail.planActualData.this_year_10_plan)
                        + parseInt(detail.planActualData.this_year_11_plan === '' ? 0 : detail.planActualData.this_year_11_plan)
                        + parseInt(detail.planActualData.this_year_12_plan === '' ? 0 : detail.planActualData.this_year_12_plan)
                        + parseInt(detail.planActualData.nextyear_01_plan === '' ? 0 : detail.planActualData.nextyear_01_plan)
                        + parseInt(detail.planActualData.nextyear_02_plan === '' ? 0 : detail.planActualData.nextyear_02_plan)
                        + parseInt(detail.planActualData.nextyear_03_plan === '' ? 0 : detail.planActualData.nextyear_03_plan);
                } else {
                    yoteiJikan = ''
                }
                let yoteiGenka = 0
                if (parseInt(detail.staffData.staff_type) === 0) {
                    yoteiGenka =
                        (parseInt(detail.planActualData.this_year_04_plan === '' ? 0 : detail.planActualData.this_year_04_plan)
                            + parseInt(detail.planActualData.this_year_05_plan === '' ? 0 : detail.planActualData.this_year_05_plan)
                            + parseInt(detail.planActualData.this_year_06_plan === '' ? 0 : detail.planActualData.this_year_06_plan)
                            + parseInt(detail.planActualData.this_year_07_plan === '' ? 0 : detail.planActualData.this_year_07_plan)
                            + parseInt(detail.planActualData.this_year_08_plan === '' ? 0 : detail.planActualData.this_year_08_plan)
                            + parseInt(detail.planActualData.this_year_09_plan === '' ? 0 : detail.planActualData.this_year_09_plan)
                            + parseInt(detail.planActualData.this_year_10_plan === '' ? 0 : detail.planActualData.this_year_10_plan)
                            + parseInt(detail.planActualData.this_year_11_plan === '' ? 0 : detail.planActualData.this_year_11_plan)
                            + parseInt(detail.planActualData.this_year_12_plan === '' ? 0 : detail.planActualData.this_year_12_plan)
                            + parseInt(detail.planActualData.nextyear_01_plan === '' ? 0 : detail.planActualData.nextyear_01_plan)
                            + parseInt(detail.planActualData.nextyear_02_plan === '' ? 0 : detail.planActualData.nextyear_02_plan)
                            + parseInt(detail.planActualData.nextyear_03_plan === '' ? 0 : detail.planActualData.nextyear_03_plan)) * data.projectData.internal_unit_price;
                } else {
                    yoteiGenka =
                        (parseInt(detail.planActualData.this_year_04_plan === '' ? 0 : detail.planActualData.this_year_04_plan)
                            + parseInt(detail.planActualData.this_year_05_plan === '' ? 0 : detail.planActualData.this_year_05_plan)
                            + parseInt(detail.planActualData.this_year_06_plan === '' ? 0 : detail.planActualData.this_year_06_plan)
                            + parseInt(detail.planActualData.this_year_07_plan === '' ? 0 : detail.planActualData.this_year_07_plan)
                            + parseInt(detail.planActualData.this_year_08_plan === '' ? 0 : detail.planActualData.this_year_08_plan)
                            + parseInt(detail.planActualData.this_year_09_plan === '' ? 0 : detail.planActualData.this_year_09_plan)
                            + parseInt(detail.planActualData.this_year_10_plan === '' ? 0 : detail.planActualData.this_year_10_plan)
                            + parseInt(detail.planActualData.this_year_11_plan === '' ? 0 : detail.planActualData.this_year_11_plan)
                            + parseInt(detail.planActualData.this_year_12_plan === '' ? 0 : detail.planActualData.this_year_12_plan)
                            + parseInt(detail.planActualData.nextyear_01_plan === '' ? 0 : detail.planActualData.nextyear_01_plan)
                            + parseInt(detail.planActualData.nextyear_02_plan === '' ? 0 : detail.planActualData.nextyear_02_plan)
                            + parseInt(detail.planActualData.nextyear_03_plan === '' ? 0 : detail.planActualData.nextyear_03_plan));
                }
                let jissekiJikan = 0
                if (parseInt(detail.staffData.staff_type) === 0) {
                    jissekiJikan =
                        parseInt(detail.planActualData.this_year_04_actual === '' ? 0 : detail.planActualData.this_year_04_actual)
                        + parseInt(detail.planActualData.this_year_05_actual === '' ? 0 : detail.planActualData.this_year_05_actual)
                        + parseInt(detail.planActualData.this_year_06_actual === '' ? 0 : detail.planActualData.this_year_06_actual)
                        + parseInt(detail.planActualData.this_year_07_actual === '' ? 0 : detail.planActualData.this_year_07_actual)
                        + parseInt(detail.planActualData.this_year_08_actual === '' ? 0 : detail.planActualData.this_year_08_actual)
                        + parseInt(detail.planActualData.this_year_09_actual === '' ? 0 : detail.planActualData.this_year_09_actual)
                        + parseInt(detail.planActualData.this_year_10_actual === '' ? 0 : detail.planActualData.this_year_10_actual)
                        + parseInt(detail.planActualData.this_year_11_actual === '' ? 0 : detail.planActualData.this_year_11_actual)
                        + parseInt(detail.planActualData.this_year_12_actual === '' ? 0 : detail.planActualData.this_year_12_actual)
                        + parseInt(detail.planActualData.nextyear_01_actual === '' ? 0 : detail.planActualData.nextyear_01_actual)
                        + parseInt(detail.planActualData.nextyear_02_actual === '' ? 0 : detail.planActualData.nextyear_02_actual)
                        + parseInt(detail.planActualData.nextyear_03_actual === '' ? 0 : detail.planActualData.nextyear_03_actual);
                } else {
                    jissekiJikan = ''
                }
                let jissekiGenka = 0
                if (parseInt(detail.staffData.staff_type) === 0) {
                    jissekiGenka =
                        (parseInt(detail.planActualData.this_year_04_actual === '' ? 0 : detail.planActualData.this_year_04_actual)
                            + parseInt(detail.planActualData.this_year_05_actual === '' ? 0 : detail.planActualData.this_year_05_actual)
                            + parseInt(detail.planActualData.this_year_06_actual === '' ? 0 : detail.planActualData.this_year_06_actual)
                            + parseInt(detail.planActualData.this_year_07_actual === '' ? 0 : detail.planActualData.this_year_07_actual)
                            + parseInt(detail.planActualData.this_year_08_actual === '' ? 0 : detail.planActualData.this_year_08_actual)
                            + parseInt(detail.planActualData.this_year_09_actual === '' ? 0 : detail.planActualData.this_year_09_actual)
                            + parseInt(detail.planActualData.this_year_10_actual === '' ? 0 : detail.planActualData.this_year_10_actual)
                            + parseInt(detail.planActualData.this_year_11_actual === '' ? 0 : detail.planActualData.this_year_11_actual)
                            + parseInt(detail.planActualData.this_year_12_actual === '' ? 0 : detail.planActualData.this_year_12_actual)
                            + parseInt(detail.planActualData.nextyear_01_actual === '' ? 0 : detail.planActualData.nextyear_01_actual)
                            + parseInt(detail.planActualData.nextyear_02_actual === '' ? 0 : detail.planActualData.nextyear_02_actual)
                            + parseInt(detail.planActualData.nextyear_03_actual === '' ? 0 : detail.planActualData.nextyear_03_actual)) * data.projectData.internal_unit_price;
                } else {
                    jissekiGenka =
                        (parseInt(detail.planActualData.this_year_04_actual === '' ? 0 : detail.planActualData.this_year_04_actual)
                            + parseInt(detail.planActualData.this_year_05_actual === '' ? 0 : detail.planActualData.this_year_05_actual)
                            + parseInt(detail.planActualData.this_year_06_actual === '' ? 0 : detail.planActualData.this_year_06_actual)
                            + parseInt(detail.planActualData.this_year_07_actual === '' ? 0 : detail.planActualData.this_year_07_actual)
                            + parseInt(detail.planActualData.this_year_08_actual === '' ? 0 : detail.planActualData.this_year_08_actual)
                            + parseInt(detail.planActualData.this_year_09_actual === '' ? 0 : detail.planActualData.this_year_09_actual)
                            + parseInt(detail.planActualData.this_year_10_actual === '' ? 0 : detail.planActualData.this_year_10_actual)
                            + parseInt(detail.planActualData.this_year_11_actual === '' ? 0 : detail.planActualData.this_year_11_actual)
                            + parseInt(detail.planActualData.this_year_12_actual === '' ? 0 : detail.planActualData.this_year_12_actual)
                            + parseInt(detail.planActualData.nextyear_01_actual === '' ? 0 : detail.planActualData.nextyear_01_actual)
                            + parseInt(detail.planActualData.nextyear_02_actual === '' ? 0 : detail.planActualData.nextyear_02_actual)
                            + parseInt(detail.planActualData.nextyear_03_actual === '' ? 0 : detail.planActualData.nextyear_03_actual));
                }
                data.details[index] = { ...detail, 'goukei': { yoteiGenka, yoteiJikan, jissekiJikan, jissekiGenka } }
                return detail
            })
        }
        data = sumVertical(data)
        return data
    }

    const sumVertical = (data) => {
        if (data.details) {
            let yoteiJikan04gatu = 0;
            let yoteiJikan05gatu = 0;
            let yoteiJikan06gatu = 0;
            let yoteiJikan07gatu = 0;
            let yoteiJikan08gatu = 0;
            let yoteiJikan09gatu = 0;
            let yoteiJikan10gatu = 0;
            let yoteiJikan11gatu = 0;
            let yoteiJikan12gatu = 0;
            let yoteiJikan01gatu = 0;
            let yoteiJikan02gatu = 0;
            let yoteiJikan03gatu = 0;
            let yoteiGenka04gatu = 0;
            let yoteiGenka05gatu = 0;
            let yoteiGenka06gatu = 0;
            let yoteiGenka07gatu = 0;
            let yoteiGenka08gatu = 0;
            let yoteiGenka09gatu = 0;
            let yoteiGenka10gatu = 0;
            let yoteiGenka11gatu = 0;
            let yoteiGenka12gatu = 0;
            let yoteiGenka01gatu = 0;
            let yoteiGenka02gatu = 0;
            let yoteiGenka03gatu = 0;
            let jissekiJikan04gatu = 0;
            let jissekiJikan05gatu = 0;
            let jissekiJikan06gatu = 0;
            let jissekiJikan07gatu = 0;
            let jissekiJikan08gatu = 0;
            let jissekiJikan09gatu = 0;
            let jissekiJikan10gatu = 0;
            let jissekiJikan11gatu = 0;
            let jissekiJikan12gatu = 0;
            let jissekiJikan01gatu = 0;
            let jissekiJikan02gatu = 0;
            let jissekiJikan03gatu = 0;
            let jissekiGenka04gatu = 0;
            let jissekiGenka05gatu = 0;
            let jissekiGenka06gatu = 0;
            let jissekiGenka07gatu = 0;
            let jissekiGenka08gatu = 0;
            let jissekiGenka09gatu = 0;
            let jissekiGenka10gatu = 0;
            let jissekiGenka11gatu = 0;
            let jissekiGenka12gatu = 0;
            let jissekiGenka01gatu = 0;
            let jissekiGenka02gatu = 0;
            let jissekiGenka03gatu = 0;
            let yoteiJikanGoukei = 0;
            let yoteiGenkaGoukei = 0;
            let jissekiJikanGoukei = 0;
            let jissekiGenkaGoukei = 0;
            data.details.map((detail) => {
                yoteiJikan04gatu += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.planActualData.this_year_04_plan === '' ? 0 : detail.planActualData.this_year_04_plan) : 0
                yoteiJikan05gatu += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.planActualData.this_year_05_plan === '' ? 0 : detail.planActualData.this_year_05_plan) : 0
                yoteiJikan06gatu += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.planActualData.this_year_06_plan === '' ? 0 : detail.planActualData.this_year_06_plan) : 0
                yoteiJikan07gatu += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.planActualData.this_year_07_plan === '' ? 0 : detail.planActualData.this_year_07_plan) : 0
                yoteiJikan08gatu += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.planActualData.this_year_08_plan === '' ? 0 : detail.planActualData.this_year_08_plan) : 0
                yoteiJikan09gatu += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.planActualData.this_year_09_plan === '' ? 0 : detail.planActualData.this_year_09_plan) : 0
                yoteiJikan10gatu += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.planActualData.this_year_10_plan === '' ? 0 : detail.planActualData.this_year_10_plan) : 0
                yoteiJikan11gatu += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.planActualData.this_year_11_plan === '' ? 0 : detail.planActualData.this_year_11_plan) : 0
                yoteiJikan12gatu += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.planActualData.this_year_12_plan === '' ? 0 : detail.planActualData.this_year_12_plan) : 0
                yoteiJikan01gatu += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.planActualData.nextyear_01_plan === '' ? 0 : detail.planActualData.nextyear_01_plan) : 0
                yoteiJikan02gatu += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.planActualData.nextyear_02_plan === '' ? 0 : detail.planActualData.nextyear_02_plan) : 0
                yoteiJikan03gatu += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.planActualData.nextyear_03_plan === '' ? 0 : detail.planActualData.nextyear_03_plan) : 0
                yoteiGenka04gatu += parseInt(detail.staffData.staff_type) === 1 ? parseFloat(detail.planActualData.this_year_04_plan === '' ? 0 : detail.planActualData.this_year_04_plan) : 0
                yoteiGenka05gatu += parseInt(detail.staffData.staff_type) === 1 ? parseFloat(detail.planActualData.this_year_05_plan === '' ? 0 : detail.planActualData.this_year_05_plan) : 0
                yoteiGenka06gatu += parseInt(detail.staffData.staff_type) === 1 ? parseFloat(detail.planActualData.this_year_06_plan === '' ? 0 : detail.planActualData.this_year_06_plan) : 0
                yoteiGenka07gatu += parseInt(detail.staffData.staff_type) === 1 ? parseFloat(detail.planActualData.this_year_07_plan === '' ? 0 : detail.planActualData.this_year_07_plan) : 0
                yoteiGenka08gatu += parseInt(detail.staffData.staff_type) === 1 ? parseFloat(detail.planActualData.this_year_08_plan === '' ? 0 : detail.planActualData.this_year_08_plan) : 0
                yoteiGenka09gatu += parseInt(detail.staffData.staff_type) === 1 ? parseFloat(detail.planActualData.this_year_09_plan === '' ? 0 : detail.planActualData.this_year_09_plan) : 0
                yoteiGenka10gatu += parseInt(detail.staffData.staff_type) === 1 ? parseFloat(detail.planActualData.this_year_10_plan === '' ? 0 : detail.planActualData.this_year_10_plan) : 0
                yoteiGenka11gatu += parseInt(detail.staffData.staff_type) === 1 ? parseFloat(detail.planActualData.this_year_11_plan === '' ? 0 : detail.planActualData.this_year_11_plan) : 0
                yoteiGenka12gatu += parseInt(detail.staffData.staff_type) === 1 ? parseFloat(detail.planActualData.this_year_12_plan === '' ? 0 : detail.planActualData.this_year_12_plan) : 0
                yoteiGenka01gatu += parseInt(detail.staffData.staff_type) === 1 ? parseFloat(detail.planActualData.nextyear_01_plan === '' ? 0 : detail.planActualData.nextyear_01_plan) : 0
                yoteiGenka02gatu += parseInt(detail.staffData.staff_type) === 1 ? parseFloat(detail.planActualData.nextyear_02_plan === '' ? 0 : detail.planActualData.nextyear_02_plan) : 0
                yoteiGenka03gatu += parseInt(detail.staffData.staff_type) === 1 ? parseFloat(detail.planActualData.nextyear_03_plan === '' ? 0 : detail.planActualData.nextyear_03_plan) : 0
                jissekiJikan04gatu += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.planActualData.this_year_04_actual === '' ? 0 : detail.planActualData.this_year_04_actual) : 0
                jissekiJikan05gatu += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.planActualData.this_year_05_actual === '' ? 0 : detail.planActualData.this_year_05_actual) : 0
                jissekiJikan06gatu += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.planActualData.this_year_06_actual === '' ? 0 : detail.planActualData.this_year_06_actual) : 0
                jissekiJikan07gatu += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.planActualData.this_year_07_actual === '' ? 0 : detail.planActualData.this_year_07_actual) : 0
                jissekiJikan08gatu += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.planActualData.this_year_08_actual === '' ? 0 : detail.planActualData.this_year_08_actual) : 0
                jissekiJikan09gatu += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.planActualData.this_year_09_actual === '' ? 0 : detail.planActualData.this_year_09_actual) : 0
                jissekiJikan10gatu += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.planActualData.this_year_10_actual === '' ? 0 : detail.planActualData.this_year_10_actual) : 0
                jissekiJikan11gatu += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.planActualData.this_year_11_actual === '' ? 0 : detail.planActualData.this_year_11_actual) : 0
                jissekiJikan12gatu += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.planActualData.this_year_12_actual === '' ? 0 : detail.planActualData.this_year_12_actual) : 0
                jissekiJikan01gatu += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.planActualData.nextyear_01_actual === '' ? 0 : detail.planActualData.nextyear_01_actual) : 0
                jissekiJikan02gatu += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.planActualData.nextyear_02_actual === '' ? 0 : detail.planActualData.nextyear_02_actual) : 0
                jissekiJikan03gatu += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.planActualData.nextyear_03_actual === '' ? 0 : detail.planActualData.nextyear_03_actual) : 0
                jissekiGenka04gatu += parseInt(detail.staffData.staff_type) === 1 ? parseFloat(detail.planActualData.this_year_04_actual === '' ? 0 : detail.planActualData.this_year_04_actual) : 0
                jissekiGenka05gatu += parseInt(detail.staffData.staff_type) === 1 ? parseFloat(detail.planActualData.this_year_05_actual === '' ? 0 : detail.planActualData.this_year_05_actual) : 0
                jissekiGenka06gatu += parseInt(detail.staffData.staff_type) === 1 ? parseFloat(detail.planActualData.this_year_06_actual === '' ? 0 : detail.planActualData.this_year_06_actual) : 0
                jissekiGenka07gatu += parseInt(detail.staffData.staff_type) === 1 ? parseFloat(detail.planActualData.this_year_07_actual === '' ? 0 : detail.planActualData.this_year_07_actual) : 0
                jissekiGenka08gatu += parseInt(detail.staffData.staff_type) === 1 ? parseFloat(detail.planActualData.this_year_08_actual === '' ? 0 : detail.planActualData.this_year_08_actual) : 0
                jissekiGenka09gatu += parseInt(detail.staffData.staff_type) === 1 ? parseFloat(detail.planActualData.this_year_09_actual === '' ? 0 : detail.planActualData.this_year_09_actual) : 0
                jissekiGenka10gatu += parseInt(detail.staffData.staff_type) === 1 ? parseFloat(detail.planActualData.this_year_10_actual === '' ? 0 : detail.planActualData.this_year_10_actual) : 0
                jissekiGenka11gatu += parseInt(detail.staffData.staff_type) === 1 ? parseFloat(detail.planActualData.this_year_11_actual === '' ? 0 : detail.planActualData.this_year_11_actual) : 0
                jissekiGenka12gatu += parseInt(detail.staffData.staff_type) === 1 ? parseFloat(detail.planActualData.this_year_12_actual === '' ? 0 : detail.planActualData.this_year_12_actual) : 0
                jissekiGenka01gatu += parseInt(detail.staffData.staff_type) === 1 ? parseFloat(detail.planActualData.nextyear_01_actual === '' ? 0 : detail.planActualData.nextyear_01_actual) : 0
                jissekiGenka02gatu += parseInt(detail.staffData.staff_type) === 1 ? parseFloat(detail.planActualData.nextyear_02_actual === '' ? 0 : detail.planActualData.nextyear_02_actual) : 0
                jissekiGenka03gatu += parseInt(detail.staffData.staff_type) === 1 ? parseFloat(detail.planActualData.nextyear_03_actual === '' ? 0 : detail.planActualData.nextyear_03_actual) : 0
                yoteiJikanGoukei += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.goukei.yoteiJikan) : 0
                jissekiJikanGoukei += parseInt(detail.staffData.staff_type) === 0 ? parseFloat(detail.goukei.jissekiJikan) : 0
                yoteiGenkaGoukei += parseInt(detail.goukei.yoteiGenka)
                jissekiGenkaGoukei += parseInt(detail.goukei.jissekiGenka)
            })
            yoteiGenka04gatu += yoteiJikan04gatu * data.projectData.internal_unit_price
            yoteiGenka05gatu += yoteiJikan05gatu * data.projectData.internal_unit_price
            yoteiGenka06gatu += yoteiJikan06gatu * data.projectData.internal_unit_price
            yoteiGenka07gatu += yoteiJikan07gatu * data.projectData.internal_unit_price
            yoteiGenka08gatu += yoteiJikan08gatu * data.projectData.internal_unit_price
            yoteiGenka09gatu += yoteiJikan09gatu * data.projectData.internal_unit_price
            yoteiGenka10gatu += yoteiJikan10gatu * data.projectData.internal_unit_price
            yoteiGenka11gatu += yoteiJikan11gatu * data.projectData.internal_unit_price
            yoteiGenka12gatu += yoteiJikan12gatu * data.projectData.internal_unit_price
            yoteiGenka01gatu += yoteiJikan01gatu * data.projectData.internal_unit_price
            yoteiGenka02gatu += yoteiJikan02gatu * data.projectData.internal_unit_price
            yoteiGenka03gatu += yoteiJikan03gatu * data.projectData.internal_unit_price
            jissekiGenka04gatu += jissekiJikan04gatu * data.projectData.internal_unit_price
            jissekiGenka05gatu += jissekiJikan05gatu * data.projectData.internal_unit_price
            jissekiGenka06gatu += jissekiJikan06gatu * data.projectData.internal_unit_price
            jissekiGenka07gatu += jissekiJikan07gatu * data.projectData.internal_unit_price
            jissekiGenka08gatu += jissekiJikan08gatu * data.projectData.internal_unit_price
            jissekiGenka09gatu += jissekiJikan09gatu * data.projectData.internal_unit_price
            jissekiGenka10gatu += jissekiJikan10gatu * data.projectData.internal_unit_price
            jissekiGenka11gatu += jissekiJikan11gatu * data.projectData.internal_unit_price
            jissekiGenka12gatu += jissekiJikan12gatu * data.projectData.internal_unit_price
            jissekiGenka01gatu += jissekiJikan01gatu * data.projectData.internal_unit_price
            jissekiGenka02gatu += jissekiJikan02gatu * data.projectData.internal_unit_price
            jissekiGenka03gatu += jissekiJikan03gatu * data.projectData.internal_unit_price
            data = {
                ...data, goukei: {
                    yoteiJikan04gatu,
                    yoteiJikan05gatu,
                    yoteiJikan06gatu,
                    yoteiJikan07gatu,
                    yoteiJikan08gatu,
                    yoteiJikan09gatu,
                    yoteiJikan10gatu,
                    yoteiJikan11gatu,
                    yoteiJikan12gatu,
                    yoteiJikan01gatu,
                    yoteiJikan02gatu,
                    yoteiJikan03gatu,
                    yoteiGenka04gatu,
                    yoteiGenka05gatu,
                    yoteiGenka06gatu,
                    yoteiGenka07gatu,
                    yoteiGenka08gatu,
                    yoteiGenka09gatu,
                    yoteiGenka10gatu,
                    yoteiGenka11gatu,
                    yoteiGenka12gatu,
                    yoteiGenka01gatu,
                    yoteiGenka02gatu,
                    yoteiGenka03gatu,
                    jissekiJikan04gatu,
                    jissekiJikan05gatu,
                    jissekiJikan06gatu,
                    jissekiJikan07gatu,
                    jissekiJikan08gatu,
                    jissekiJikan09gatu,
                    jissekiJikan10gatu,
                    jissekiJikan11gatu,
                    jissekiJikan12gatu,
                    jissekiJikan01gatu,
                    jissekiJikan02gatu,
                    jissekiJikan03gatu,
                    jissekiGenka04gatu,
                    jissekiGenka05gatu,
                    jissekiGenka06gatu,
                    jissekiGenka07gatu,
                    jissekiGenka08gatu,
                    jissekiGenka09gatu,
                    jissekiGenka10gatu,
                    jissekiGenka11gatu,
                    jissekiGenka12gatu,
                    jissekiGenka01gatu,
                    jissekiGenka02gatu,
                    jissekiGenka03gatu,
                    yoteiJikanGoukei,
                    jissekiJikanGoukei,
                    yoteiGenkaGoukei,
                    jissekiGenkaGoukei
                }
            }
            console.log(data)
            const keikakubi = rituF(data)
            const kousuuZan = rituG(data)
            data = { ...data, ritu: { keikakubi: keikakubi, kousuuZan: kousuuZan } }
        }
        else {
            data = {
                ...data, goukei: {
                    yoteiJikan04gatu: '',
                    yoteiJikan05gatu: '',
                    yoteiJikan06gatu: '',
                    yoteiJikan07gatu: '',
                    yoteiJikan08gatu: '',
                    yoteiJikan09gatu: '',
                    yoteiJikan10gatu: '',
                    yoteiJikan11gatu: '',
                    yoteiJikan12gatu: '',
                    yoteiJikan01gatu: '',
                    yoteiJikan02gatu: '',
                    yoteiJikan03gatu: '',
                    yoteiGenka04gatu: '',
                    yoteiGenka05gatu: '',
                    yoteiGenka06gatu: '',
                    yoteiGenka07gatu: '',
                    yoteiGenka08gatu: '',
                    yoteiGenka09gatu: '',
                    yoteiGenka10gatu: '',
                    yoteiGenka11gatu: '',
                    yoteiGenka12gatu: '',
                    yoteiGenka01gatu: '',
                    yoteiGenka02gatu: '',
                    yoteiGenka03gatu: '',
                    jissekiJikan04gatu: '',
                    jissekiJikan05gatu: '',
                    jissekiJikan06gatu: '',
                    jissekiJikan07gatu: '',
                    jissekiJikan08gatu: '',
                    jissekiJikan09gatu: '',
                    jissekiJikan10gatu: '',
                    jissekiJikan11gatu: '',
                    jissekiJikan12gatu: '',
                    jissekiJikan01gatu: '',
                    jissekiJikan02gatu: '',
                    jissekiJikan03gatu: '',
                    jissekiGenka04gatu: '',
                    jissekiGenka05gatu: '',
                    jissekiGenka06gatu: '',
                    jissekiGenka07gatu: '',
                    jissekiGenka08gatu: '',
                    jissekiGenka09gatu: '',
                    jissekiGenka10gatu: '',
                    jissekiGenka11gatu: '',
                    jissekiGenka12gatu: '',
                    jissekiGenka01gatu: '',
                    jissekiGenka02gatu: '',
                    jissekiGenka03gatu: '',
                    yoteiJikanGoukei: '',
                    jissekiJikanGoukei: '',
                    yoteiGenkaGoukei: '',
                    jissekiGenkaGoukei: ''
                }
            }
            console.log(data)
            const keikakubi = rituF(data)
            const kousuuZan = rituG(data)
            data = { ...data, ritu: { keikakubi: keikakubi, kousuuZan: kousuuZan } }
        }
        return data
    }
    useEffect(() => {
        setEdited(false)
        const getProjectData = async (projectID) => {
            await axios.post(GET_ACTUAL_PLAN, { selectedProjectId: projectID, 'IDLoginUser': localStorage.getItem('IDLoginUser') })
                .then(response => {
                    const proData = sumHorizontalData(response.data)
                    setProjectData(proData)
                })
        }
        getProjectData(projectID)
    }, [projectID])


    const breadcrumbs = useContext(BreadcrumbsContext)
    return (
        <Fragment>
            <Header></Header>
            <BreadCrumb breadcrumbs={breadcrumbs}></BreadCrumb>
            <OrderPlan data={projectData} setData={setProjectData} sumHorizontalData={sumHorizontalData} sumVertical={sumVertical} rituF={rituF} rituG={rituG}></OrderPlan>
            <Footer></Footer>
        </Fragment>
    )
}