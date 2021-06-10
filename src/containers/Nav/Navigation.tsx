import * as React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';


interface NavProps{
    
    item2: string;
    item3: string;
    item4: string;

}

export const Navigation: React.FC<NavProps> =({ item2, item3, item4})=>{


    return(

        <div className='navigation'>

            
            <Link to="/clothes"><button className={'btn1'}>{item2}</button></Link>
            <Link to="/background"><button className={'btn1'}>{item3}</button></Link>
            <Link to="/pokemon"><button className={'btn1'}>{item4}</button></Link>
            
        </div>

    );

}