import React, { useContext } from "react";
import './PreviewOptions.css'
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import PokeBody from '../../../utils/images/cuerpo.png';
import { previewContext } from "../../../utils/previewContext";

interface PreviewOptionsProps{
    //Parte 1 donde salen las opciones
    //Parte 2 donde salen los elementos de personalización de color e imagen
    background?: string;
    pokemon?: string;
    clothes?: string;
}

export const PreviewOptions: React.FC<PreviewOptionsProps> =({background, pokemon, clothes}) =>{

    const context=React.useContext(previewContext);
    console.log(context);
    
    const backgroundTheme = localStorage.getItem('background');
    var poke = localStorage.getItem('pokemon');
    var clotheTheme = localStorage.getItem('clothes');

    console.log(localStorage.getItem('pokemon'));

    // if(localStorage.hasOwnProperty('pokemon')){
    //     poke = localStorage.getItem('pokemon');
    // }else{
    //     poke = 'holis'
    // }

    

    if(poke != undefined && clotheTheme != undefined ){
        return(
            <div className='previewSection' style={{background:  `url(${backgroundTheme}`}}>
                <h1>Previsualización</h1>
                <div className='characters'>
                <img className='clothestyle' src={clotheTheme} />
                <img className='skinstyle' src={PokeBody} alt=""/>
                {/* Aquí hacer una img donde vaya el pokemon src={pokemon} */}
                {/* */}
                <img className='pokestyle' src={poke}></img>
                </div>
            </div>
        )
    }else{
        return(
            <div className='previewSection' style={{background:  `url(${backgroundTheme}`}}>    
                <h1>Previsualización</h1>
                <div className='characters'>
                    <img className='clothestyle' />
                <img className='skinstyle' src={PokeBody} alt=""/>
                {/* Aquí hacer una img donde vaya el pokemon src={pokemon} */}
                {/* */}
                <img className='pokestyle'></img>
                </div>
                
            </div>
        )
    }
    
   
    
}

