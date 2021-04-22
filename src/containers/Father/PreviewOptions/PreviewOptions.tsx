import React, { useContext } from "react";
import './PreviewOptions.css'
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import PokeBody from '../../../utils/images/cuerpo.svg';
import { previewContext } from "../../../utils/previewContext";

interface PreviewOptionsProps{
    //Parte 1 donde salen las opciones
    //Parte 2 donde salen los elementos de personalización de color e imagen
}

export const PreviewOptions: React.FC<PreviewOptionsProps> =({}) =>{

    const context=React.useContext(previewContext);
    console.log(context);
    

    return(
            
            
                <div className='previewSection'>
                    <h1>Previsualización</h1>
                    <img className='skinstyle' src={PokeBody} alt=""/>
                </div>

            
            
        
    );
}

