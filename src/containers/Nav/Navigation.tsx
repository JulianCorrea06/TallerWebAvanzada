import * as React from 'react';
import './Nav.css';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Father } from '../Father/Father';

interface NavProps{
    item1: string;
    item2: string;
    item3: string;
    item4: string;

}

export const Navigation: React.FC<NavProps> =({item1, item2, item3, item4})=>{


    return(

        <div className='navigation'>

            <Link to="/body"><button className={'btn1'}>{item1}</button></Link>
            <Link to="/clothes"><button className={'btn1'}>{item2}</button></Link>
            <Link to="/background"><button className={'btn1'}>{item3}</button></Link>
            <Link to="/pokemon"><button className={'btn1'}>{item4}</button></Link>
            
            
            <Route path="/clothes" render={()=> <button className={'btn1'}>{item2}</button>}/>
            <Route path="/background" render={()=> <button className={'btn1'}>{item3}</button>}/>
            <Route path="/pokemon" render={()=> <button className={'btn1'}>{item4}</button>}/>
            
        </div>

    );

}