import React,{useState,useEffect, useRef} from "react";

import Text from '../../atoms/Text';

interface SelectOption {
    label: string
    value: string
}

interface SelectProps{

    onOptionSelected?: (option:SelectOption,optionIndex:number)=> void
    options?: SelectOption[]
    label?: string

}

const Select:React.FunctionComponent<SelectProps> = ({options=[],label="Please Select",onOptionSelected:handler})=> {
    const [isOpen,setIsOpen]=useState<boolean>(false)
    const [selectedIndex,setSelectedIndex]=useState<null|number>(null)

    const labelRef = useRef<HTMLButtonElement>(null);
    const [overlayTop,setOverlayTop] = useState<number>(0);

    const onLabelClick = () => {
        setIsOpen(!isOpen);
    };


    const onOptionSelected = (option:SelectOption,optionIndex:number) =>{
        if(handler){
            handler(option,optionIndex);
        }
        setSelectedIndex(optionIndex)
        setIsOpen(false)
        
    }

    useEffect(()=>{
        setOverlayTop(
            (labelRef.current?.offsetHeight||0)+10
        )

    },[labelRef.current?.offsetHeight]);

    let selectedOption = null;

    if(selectedIndex!=null){
        selectedOption= options[selectedIndex];
    }


    return <div className='dsyse-select'>
        <button
            ref={labelRef} 
            className='dsyse-select__label'
            onClick={onLabelClick}>

                <Text>{selectedOption==null?label:selectedOption.label}</Text>

                <svg 
                    className={`dsyse-select__caret ${isOpen?'dsyse-select__caret--open':'dsyse-select__caret--closed'}`}
                    height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>

        </button>

        {
        
            isOpen?(
                <ul style={{top:overlayTop}} className='dsyse-select__overlay'>
                    {options.map((option,optionIndex)=>{
                        const isSelected= optionIndex===selectedIndex
                        return <li 
                                    className={
                                        `dsyse-select__option
                                        ${isSelected? 'dsyse-select__option--selected':''}
                                        `
                                    }
                                    onClick={()=>onOptionSelected(option,optionIndex)}
                                    key={option.value}
                                    >

                                        <Text>
                                            {option.label}
                                        </Text>

                                        {
                                            isSelected?(
                                                <svg 
                                                    width='1rem' height='1rem' xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>

                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    
                                                </svg>
                                            ):null

                                        }
                                </li>
                    })}
                </ul>

            ):null
        
        }
        

    </div>
}

export default Select
