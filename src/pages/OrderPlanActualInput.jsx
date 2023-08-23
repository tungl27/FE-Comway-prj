import { Fragment, useContext } from "react";
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb'
import OrderPlan from "../Components/OrderPlan/OrderPlan";
import { BreadcrumbsContext } from "../State/BreadcrumbContext";

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
    },{
        'gatu': 6,
        'yotei': {
            'sagyoujikan': '20',
            'naisyagenka': '91460'
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 7,
        'yotei': {
            'sagyoujikan': '10',
            'naisyagenka': '45730'
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 8,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 9,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 10,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 11,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 12,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 1,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 2,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
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
    },{
        'gatu': 6,
        'yotei': {
            'sagyoujikan': '20',
            'naisyagenka': '91460'
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 7,
        'yotei': {
            'sagyoujikan': '10',
            'naisyagenka': '45730'
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 8,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 9,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 10,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 11,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 12,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 1,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 2,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
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
    },{
        'gatu': 6,
        'yotei': {
            'sagyoujikan': '20',
            'naisyagenka': '91460'
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 7,
        'yotei': {
            'sagyoujikan': '10',
            'naisyagenka': '45730'
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 8,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 9,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 10,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 11,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 12,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 1,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 2,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
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
    },{
        'gatu': 6,
        'yotei': {
            'sagyoujikan': '20',
            'naisyagenka': '91460'
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 7,
        'yotei': {
            'sagyoujikan': '10',
            'naisyagenka': '45730'
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 8,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 9,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 10,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 11,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 12,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 1,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 2,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
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
    },{
        'gatu': 6,
        'yotei': {
            'sagyoujikan': '20',
            'naisyagenka': '91460'
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 7,
        'yotei': {
            'sagyoujikan': '10',
            'naisyagenka': '45730'
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 8,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 9,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 10,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 11,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 12,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 1,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 2,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
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
    },{
        'gatu': 6,
        'yotei': {
            'sagyoujikan': '20',
            'naisyagenka': '91460'
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 7,
        'yotei': {
            'sagyoujikan': '10',
            'naisyagenka': '45730'
        },
        'jisseki': {
            'sagyoujikan': '15',
            'naisyagenka': '685950'
        }
    },{
        'gatu': 8,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 9,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 10,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 11,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 12,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 1,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 2,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
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
    },{
        'gatu': 6,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 7,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': '100000'
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 8,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 9,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': '100000'
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 10,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 11,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 12,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 1,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 2,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
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
},{
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
    },{
        'gatu': 6,
        'yotei': {
            'sagyoujikan': '20',
            'naisyagenka': '91460'
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 7,
        'yotei': {
            'sagyoujikan': '10',
            'naisyagenka': '45730'
        },
        'jisseki': {
            'sagyoujikan': '15',
            'naisyagenka': '685950'
        }
    },{
        'gatu': 8,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 9,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 10,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 11,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 12,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 1,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
        'gatu': 2,
        'yotei': {
            'sagyoujikan': '',
            'naisyagenka': ''
        },
        'jisseki': {
            'sagyoujikan': '',
            'naisyagenka': ''
        }
    },{
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

    const breadcrumbs = useContext(BreadcrumbsContext)
    return (
        <Fragment>
            <Header></Header>
            <BreadCrumb breadcrumbs={breadcrumbs}></BreadCrumb>
            <OrderPlan data={data}></OrderPlan>
            <Footer></Footer>
        </Fragment>
    )
}