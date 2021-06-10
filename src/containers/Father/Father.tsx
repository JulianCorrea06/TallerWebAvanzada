import * as React from 'react'
import './Father.css'
import { Selections } from "../Father/Selections/Selections";
import { Route } from 'react-router';
import { PreviewOptions } from './PreviewOptions/PreviewOptions';
import { PreviewSelections } from './PreviewSelections/PreviewSelection';
import { createSemicolonClassElement } from 'typescript';

interface FatherProps{
    //Parte 1 donde salnen las opciones
    //Parte 2 donde salen los elementos de personalización de color e imagen
}

export const Father: React.FC<FatherProps> =({}) =>{

    const [background, setBackground] = React.useState("");
    const [pokemon, setPokemon] = React.useState("");
    const [clothes, setClothes] = React.useState("");

    console.log(background);
    console.log(pokemon);

    return(

        <div className='subsection'>

            <PreviewOptions background={background} pokemon={pokemon} clothes={clothes}/>
            
            

        <Route path="/clothes" render={()=>
            <div className="prueba">
                
            <Selections setClothes={setClothes}/>
            <PreviewSelections/>
        </div>
        
        }
        />

        <Route path="/background" render={()=>
            <Selections setBackground={setBackground}/>}
        />

        <Route path="/pokemon" render={()=>
            <Selections setPokemon={setPokemon}/>}
        />
        
        </div>
    );
}