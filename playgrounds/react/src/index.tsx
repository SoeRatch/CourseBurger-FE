import React from "react";
import { createRoot } from 'react-dom/client';


import {Color} from "@dsys-cb.e/react"

import "@dsys-cb.e/scss/lib/Utilities"
import { Spacing } from "@dsys-cb.e/foundation";

// import { Color,Image,Text,Margin,Select } from '@dsys-cb.e/react';
// import { Spacing } from "@dsys-cb.e/foundation";

// import "@dsys-cb.e/scss/lib/Utilities.css";
// import "@dsys-cb.e/scss/lib/Text.css";
// import "@dsys-cb.e/scss/lib/Margin.css";
// import "@dsys-cb.e/scss/lib/Select.css";
// import "@dsys-cb.e/scss/lib/global.css";

// const option =[

//     {
//         label:'Strict Black',
//         value:'strict-black'
//     },
//     {
//         label:'Heavenly Green',
//         value:'heavenly-green'
//     },
//     {
//         label:'Sweet Pink',
//         value:'sweet-pink'
//     }
// ];

const rootElement = document.querySelector('#root')

if (rootElement) {

    const root = createRoot(rootElement);

    root.render(
        <Color hexCode="#222" width="lg" height="lg"></Color>
        
    );

    // root.render(
    //     <div style={{padding:'40px'}}>
    //         <Select options={option}  />
    //         {/* <Select options={option} renderOption={({option,getOptionRecommendedProps})=><p {...getOptionRecommendedProps()}>{option.label}</p>} /> */}
    //     </div>
    // );

}



