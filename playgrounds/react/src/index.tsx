import React, { useState } from "react";
import { createRoot } from 'react-dom/client';


import {Color,Text,Margin,Select} from "@dsys-cb.e/react"


import "@dsys-cb.e/scss/lib/Utilities.css"
import "@dsys-cb.e/scss/lib/Text.css"
import "@dsys-cb.e/scss/lib/Margin.css";
import "@dsys-cb.e/scss/lib/Select.css";
import { Spacing,FontSize } from "@dsys-cb.e/foundation";



// import "@dsys-cb.e/scss/lib/global.css";

const optionsInSelect =[

    {
        label:'Strict Black',
        value:'strict-black'
    },
    {
        label:'Heavenly Green',
        value:'heavenly-green'
    },
    {
        label:'Sweet Pink',
        value:'sweet-pink'
    }
];

const rootElement = document.querySelector('#root')

if (rootElement) {
    const root = createRoot(rootElement);


    root.render(
        <div>
            <Margin space="xxxl">
                <Color hexCode="#222" width="lg" height="sm"></Color>
                <Text size="lg">This is a text</Text>
                <Select label="Categories" options={optionsInSelect}></Select>

            </Margin>
            

        </div>
        
        
    );

    // root.render(
    //     <div style={{padding:'40px'}}>
    //         <Select options={option}  />
    //         {/* <Select options={option} renderOption={({option,getOptionRecommendedProps})=><p {...getOptionRecommendedProps()}>{option.label}</p>} /> */}
    //     </div>
    // );

}



