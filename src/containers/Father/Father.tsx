import * as React from 'react'
import './Father.css'
import { Selections } from "../Father/Selections/Selections";
import { Route } from 'react-router';
import { PreviewOptions } from './PreviewOptions/PreviewOptions';
import { PreviewSelections } from './PreviewSelections/PreviewSelection';

interface FatherProps{
    //Parte 1 donde salnen las opciones
    //Parte 2 donde salen los elementos de personalización de color e imagen
}

export const Father: React.FC<FatherProps> =({}) =>{


    return(

        <div className='subsection'>

            <PreviewOptions/>
            
            <Route path="/body" render={()=>
            <div className="prueba">
                
                <Selections/>
                <PreviewSelections/>
            </div>
            }
        />

        <Route path="/clothes" render={()=>
            <div className="prueba">
                
            <Selections/>
            <PreviewSelections/>
        </div>
        
        }
        />

        <Route path="/background" render={()=>
            <Selections/>}
        />

        <Route path="/pokemon" render={()=>
            <Selections/>}
        />
        
        </div>
    );
}