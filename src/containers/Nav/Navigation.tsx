import * as React from 'react';
import './Nav.css';

interface NavProps{
    item1: string;
    item2: string;
    item3: string;
    item4: string;

}

export const Navigation: React.FC<NavProps> =({item1, item2, item3, item4})=>{

    return(

        <div className='navigation'>
            <button className={'btn1'}>{item1}</button>
            <button className={'btn1'}>{item2}</button>
            <button className={'btn1'}>{item3}</button>
            <button className={'btn1'}>{item4}</button>
        </div>

    );

}