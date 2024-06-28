import React from "react";


interface ButtonProps {

    label: string

}

const Button : React.FunctionComponent<ButtonProps> = ({ label })=>{
    
    return <button className='dsyse-button-container'>{label || 'Button'}</button>

}

export default Button