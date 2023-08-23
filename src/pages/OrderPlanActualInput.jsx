import { Fragment, useContext, useEffect, useState } from "react";
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb'
import OrderPlan from "../Components/OrderPlan/OrderPlan";
import { BreadcrumbsContext } from "../State/BreadcrumbContext";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { GET_ACTUAL_PLAN } from "../theme/configApi";

const data = [
    {
        'sutaffushimei': '浦川',
        'office': '一般',
        'jouhou': [{
            'gatu': 4,
            'yotei': {
                'sagyoujikan': '100',
                'naisyagenka': '457300'
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 5,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '85',
                'naisyagenka': '388705'
            }
        }, {
            'gatu': 6,
            'yotei': {
                'sagyoujikan': '20',
                'naisyagenka': '91460'
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 7,
            'yotei': {
                'sagyoujikan': '10',
                'naisyagenka': '45730'
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 8,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 9,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 10,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 11,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 12,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 1,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 2,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 3,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }]
    },
    {
        'sutaffushimei': '高原',
        'office': '一般',
        'jouhou': [{
            'gatu': 4,
            'yotei': {
                'sagyoujikan': '100',
                'naisyagenka': '457300'
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 5,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '85',
                'naisyagenka': '388705'
            }
        }, {
            'gatu': 6,
            'yotei': {
                'sagyoujikan': '20',
                'naisyagenka': '91460'
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 7,
            'yotei': {
                'sagyoujikan': '10',
                'naisyagenka': '45730'
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 8,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 9,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 10,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 11,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 12,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 1,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 2,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 3,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }]
    },
    {
        'sutaffushimei': '高原',
        'office': '一般',
        'jouhou': [{
            'gatu': 4,
            'yotei': {
                'sagyoujikan': '100',
                'naisyagenka': '457300'
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 5,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '85',
                'naisyagenka': '388705'
            }
        }, {
            'gatu': 6,
            'yotei': {
                'sagyoujikan': '20',
                'naisyagenka': '91460'
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 7,
            'yotei': {
                'sagyoujikan': '10',
                'naisyagenka': '45730'
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 8,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 9,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 10,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 11,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 12,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 1,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 2,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 3,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }]
    },
    {
        'sutaffushimei': '高原',
        'office': '一般',
        'jouhou': [{
            'gatu': 4,
            'yotei': {
                'sagyoujikan': '100',
                'naisyagenka': '457300'
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 5,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '85',
                'naisyagenka': '388705'
            }
        }, {
            'gatu': 6,
            'yotei': {
                'sagyoujikan': '20',
                'naisyagenka': '91460'
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 7,
            'yotei': {
                'sagyoujikan': '10',
                'naisyagenka': '45730'
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 8,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 9,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 10,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 11,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 12,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 1,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 2,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 3,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }]
    },
    {
        'sutaffushimei': '高原',
        'office': '一般',
        'jouhou': [{
            'gatu': 4,
            'yotei': {
                'sagyoujikan': '100',
                'naisyagenka': '457300'
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 5,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '85',
                'naisyagenka': '388705'
            }
        }, {
            'gatu': 6,
            'yotei': {
                'sagyoujikan': '20',
                'naisyagenka': '91460'
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 7,
            'yotei': {
                'sagyoujikan': '10',
                'naisyagenka': '45730'
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 8,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 9,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 10,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 11,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 12,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 1,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 2,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 3,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }]
    },
    {
        'sutaffushimei': '稲田',
        'office': '一般',
        'jouhou': [{
            'gatu': 4,
            'yotei': {
                'sagyoujikan': '100',
                'naisyagenka': '457300'
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 5,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '85',
                'naisyagenka': '388705'
            }
        }, {
            'gatu': 6,
            'yotei': {
                'sagyoujikan': '20',
                'naisyagenka': '91460'
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 7,
            'yotei': {
                'sagyoujikan': '10',
                'naisyagenka': '45730'
            },
            'jisseki': {
                'sagyoujikan': '15',
                'naisyagenka': '685950'
            }
        }, {
            'gatu': 8,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 9,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 10,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 11,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 12,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 1,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 2,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 3,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }]
    },
    {
        'sutaffushimei': '東田',
        'office': 'BP',
        'jouhou': [{
            'gatu': 4,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': '100000'
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 5,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': '100000'
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 6,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 7,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': '100000'
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 8,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 9,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': '100000'
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 10,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 11,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 12,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 1,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 2,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 3,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }]
    }, {
        'sutaffushimei': '宮城',
        'office': '一般',
        'jouhou': [{
            'gatu': 4,
            'yotei': {
                'sagyoujikan': '100',
                'naisyagenka': '457300'
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 5,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '85',
                'naisyagenka': '388705'
            }
        }, {
            'gatu': 6,
            'yotei': {
                'sagyoujikan': '20',
                'naisyagenka': '91460'
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 7,
            'yotei': {
                'sagyoujikan': '10',
                'naisyagenka': '45730'
            },
            'jisseki': {
                'sagyoujikan': '15',
                'naisyagenka': '685950'
            }
        }, {
            'gatu': 8,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 9,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 10,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 11,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 12,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 1,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 2,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }, {
            'gatu': 3,
            'yotei': {
                'sagyoujikan': '',
                'naisyagenka': ''
            },
            'jisseki': {
                'sagyoujikan': '',
                'naisyagenka': ''
            }
        }]
    },
]
export default function OrderPlanActualInput() {
    const params = useLocation().search
    const [projectData, setProjectData] = useState([])
    // const [projectID, setProjectID] = useState([])
    const projectID = new URLSearchParams(params).get("id");
    useEffect(() => {
        const sumHorizontalData = (data) => {
            data.details.map((detail, index) => {
                let yoteiJikan = detail.planActualData.this_year_04_plan + detail.planActualData.this_year_05_plan + detail.planActualData.this_year_06_plan + detail.planActualData.this_year_07_plan
                    + detail.planActualData.this_year_08_plan + detail.planActualData.this_year_09_plan + detail.planActualData.this_year_10_plan + detail.planActualData.this_year_11_plan
                    + detail.planActualData.this_year_12_plan + detail.planActualData.nextyear_01_plan + detail.planActualData.nextyear_02_plan + detail.planActualData.nextyear_03_plan;
                let yoteiGenka =
                    (detail.planActualData.this_year_04_plan
                        + detail.planActualData.this_year_05_plan
                        + detail.planActualData.this_year_06_plan
                        + detail.planActualData.this_year_07_plan
                        + detail.planActualData.this_year_08_plan
                        + detail.planActualData.this_year_09_plan
                        + detail.planActualData.this_year_10_plan
                        + detail.planActualData.this_year_11_plan
                        + detail.planActualData.this_year_12_plan
                        + detail.planActualData.nextyear_01_plan
                        + detail.planActualData.nextyear_02_plan
                        + detail.planActualData.nextyear_03_plan) * data.projectData.internal_unit_price;
                let jissekiJikan =
                    detail.planActualData.this_year_04_actual
                    + detail.planActualData.this_year_05_actual
                    + detail.planActualData.this_year_06_actual
                    + detail.planActualData.this_year_07_actual
                    + detail.planActualData.this_year_08_actual
                    + detail.planActualData.this_year_09_actual
                    + detail.planActualData.this_year_10_actual
                    + detail.planActualData.this_year_11_actual
                    + detail.planActualData.this_year_12_actual
                    + detail.planActualData.nextyear_01_actual
                    + detail.planActualData.nextyear_02_actual
                    + detail.planActualData.nextyear_03_actual;
                let jissekiGenka =
                    (detail.planActualData.this_year_04_actual
                        + detail.planActualData.this_year_05_actual
                        + detail.planActualData.this_year_06_actual
                        + detail.planActualData.this_year_07_actual
                        + detail.planActualData.this_year_08_actual
                        + detail.planActualData.this_year_09_actual
                        + detail.planActualData.this_year_10_actual
                        + detail.planActualData.this_year_11_actual
                        + detail.planActualData.this_year_12_actual
                        + detail.planActualData.nextyear_01_actual
                        + detail.planActualData.nextyear_02_actual
                        + detail.planActualData.nextyear_03_actual) * data.projectData.internal_unit_price;
                data.details[index] = { ...detail, 'goukei': { yoteiGenka, yoteiJikan, jissekiJikan, jissekiGenka } }
                return detail
            })
            data = sumVertical(data)
            return data
        }

        const sumVertical = (data) => {
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
            let yoteiJikanGoukei = 0;
            let jissekiJikanGoukei = 0;
            data.details.map((detail) => {
                yoteiJikan04gatu += detail.planActualData.this_year_04_plan
                yoteiJikan05gatu += detail.planActualData.this_year_05_plan
                yoteiJikan06gatu += detail.planActualData.this_year_06_plan
                yoteiJikan07gatu += detail.planActualData.this_year_07_plan
                yoteiJikan08gatu += detail.planActualData.this_year_08_plan
                yoteiJikan09gatu += detail.planActualData.this_year_09_plan
                yoteiJikan10gatu += detail.planActualData.this_year_10_plan
                yoteiJikan11gatu += detail.planActualData.this_year_11_plan
                yoteiJikan12gatu += detail.planActualData.this_year_12_plan
                yoteiJikan01gatu += detail.planActualData.nextyear_01_plan
                yoteiJikan02gatu += detail.planActualData.nextyear_02_plan
                yoteiJikan03gatu += detail.planActualData.nextyear_03_plan
                jissekiJikan04gatu += detail.planActualData.this_year_04_actual
                jissekiJikan05gatu += detail.planActualData.this_year_05_actual
                jissekiJikan06gatu += detail.planActualData.this_year_06_actual
                jissekiJikan07gatu += detail.planActualData.this_year_07_actual
                jissekiJikan08gatu += detail.planActualData.this_year_08_actual
                jissekiJikan09gatu += detail.planActualData.this_year_09_actual
                jissekiJikan10gatu += detail.planActualData.this_year_10_actual
                jissekiJikan11gatu += detail.planActualData.this_year_11_actual
                jissekiJikan12gatu += detail.planActualData.this_year_12_actual
                jissekiJikan01gatu += detail.planActualData.nextyear_01_actual
                jissekiJikan02gatu += detail.planActualData.nextyear_02_actual
                jissekiJikan03gatu += detail.planActualData.nextyear_03_actual
                yoteiJikanGoukei += detail.goukei.yoteiJikan
                jissekiJikanGoukei += detail.goukei.jissekiJikan
                return detail
            })
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
                    jissekiJikan03gatu, yoteiJikanGoukei,
                    jissekiJikanGoukei
                }
            }
            return data
        }
        const getProjectData = async (projectID) => {
            await axios.get(GET_ACTUAL_PLAN + '/' + projectID)
                .then(response => {
                    const proData = sumHorizontalData(response.data)
                    console.log(response.data)
                    console.log(proData)
                    setProjectData(proData)
                })
        }
        getProjectData(projectID)
    }, [projectID, params])


    const breadcrumbs = useContext(BreadcrumbsContext)
    return (
        <Fragment>
            <Header></Header>
            <BreadCrumb breadcrumbs={breadcrumbs}></BreadCrumb>
            <OrderPlan data={projectData}></OrderPlan>
            <Footer></Footer>
        </Fragment>
    )
}