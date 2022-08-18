/* eslint-disable import/no-anonymous-default-export */

import water from '../Assets/Images/prod_images/bacteriostatic_water.png';
import b12 from '../Assets/Images/prod_images/b12.png';

export default [
    {
        title: "OTHER INJECTIBLES",
        data: [{
            id: 1,
            name: "BACTERIOSTATIC WATER",
            power: "10ml | 10ml",
            Images: [water],
            quantity1: "1 VIALS",
            quantity2: "5+ VIALS",
            quantity3: "10+ VIALS",
            price1: 10.00,
            price2: 8.00,
            price3: 6.05,
        },
        {
            id: 2,
            name: "VITAMIN B12",
            power: "2000mcg10ml | 2000mcg/ml",
            Images: [b12],
            quantity1: "1 VIALS",
            quantity2: "5+ VIALS",
            quantity3: "10+ VIALS",
            price1: 15.00,
            price2: 12.00,
            price3: 9.75,
        }
    ]
    }
]