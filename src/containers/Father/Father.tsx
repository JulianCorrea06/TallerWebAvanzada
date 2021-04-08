import * as React from 'react'
import './Father.css'
import { Selections } from "../Father/Selections/Selections";
import { Route } from 'react-router';

interface FatherProps{
    //Parte 1 donde salen las opciones
    //Parte 2 donde salen los elementos de personalización de color e imagen
}

export const Father: React.FC<FatherProps> =({}) =>{


    return(

        <div className='section'>
            
            <Route path="/body" render={()=>
            <Selections/>}
        />

        </div>
    );
}