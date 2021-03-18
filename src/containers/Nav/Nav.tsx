import * as React from 'react';
import './DownloadItem.css'

interface NavProps{
    item1: string;
    item2: string;
    item3: string;
    item4: string;

}

export const Nav: React.FC<NavProps> =({item1, item2, item3, item4})=>{

    return(

        <div>
            <button className={'btn1'}></button>
    
        </div>

    );

}