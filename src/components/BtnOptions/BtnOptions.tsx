import * as React from 'react';
import './BtnOptions.css'
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

interface BtnOptionsProps{
    text: string;
    text2?:string;
    text3?:String;
    selected?: boolean;
}


export const BtnOptions: React.FC<BtnOptionsProps> = ({text,text2,text3, selected})=>{

    return(
        <div>
            <Route path="/body" render={()=>
            
            <Link to="/body/skincolor"><button className='btn2'>{text}</button></Link>}
        />

            <Route path="/clothes" render={()=>
            <div>
                <Link to="/clothes/hat"><button className='btn2'>{text}</button></Link>
                <Link to="/clothes/shirt"><button className='btn2'>{text2}</button></Link>
                <Link to="/clothes/pants"><button className='btn2'>{text3}</button></Link>
            </div>}
        />
        
        </div>
    );

}