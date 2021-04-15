import * as React from 'react'
import './PreviewOptions.css'
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import PokeBody from '../../../utils/images/cuerpo.svg';

interface PreviewOptionsProps{
    //Parte 1 donde salen las opciones
    //Parte 2 donde salen los elementos de personalización de color e imagen
}

export const PreviewOptions: React.FC<PreviewOptionsProps> =({}) =>{

    return(
            
            
                <div className='previewSection'>
                    <h1>Previsualización</h1>
                    <img className='skinstyle' src={PokeBody} alt=""/>
                </div>

            
            
        
    );
}