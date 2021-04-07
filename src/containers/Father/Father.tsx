import * as React from 'react'
import './Father.css'

interface FatherProps{
    //Parte 1 donde salen las opciones
    //Parte 2 donde salen los elementos de personalización de color e imagen
}

export const Father: React.FC<FatherProps> =({}) =>{


    return(

        <div className='section'>
            <label htmlFor=""> Objeto 1 - Optiones</label>
            <label htmlFor=""> Objeto 2 - Optiones</label>
        </div>
    );
}