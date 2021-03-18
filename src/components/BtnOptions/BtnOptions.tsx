import * as React from 'react';
import './BtnOptions.css'

interface BtnOptionsProps{
    text: string;
    selected?: boolean;
}


export const BtnOptions: React.FC<BtnOptionsProps> = ({text, selected})=>{

    return(
        <button className='btn2'>{text}</button>

    );

}