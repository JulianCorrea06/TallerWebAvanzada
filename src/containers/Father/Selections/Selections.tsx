import * as React from 'react'
import './Selections.css'
import { Route } from 'react-router';
import { BtnOptions } from '../../../components/BtnOptions/BtnOptions';
import { ImageBtn } from '../../../components/BtnOptions/ImageBtn/ImageBtn';

interface SelectionsProps{
    //Parte 1 donde salen las opciones
    //Parte 2 donde salen los elementos de personalización de color e imagen
}

const allSelectionsText ={
    text1: "Skin Color",
    text2: "Hat",
    text3: "Shirt",
    text4: "Pants"

}

const allImgId={
    id: "primerimg",
    id2: "segundoimg",
    id3: "tercerimg"
}

const allPokeId={
    id: "pikachu",
    id2: "charmander",
    id3: "chikorita"
}

export const Selections: React.FC<SelectionsProps> =({}) =>{

    const [selects, setSelects] = React.useState(allSelectionsText);
    const [imgIds, setImgIds] = React.useState(allImgId);
    const [pokeIds, setPokeIds] = React.useState(allPokeId);
    return(

        <div className='section'>
            <Route path="/body" 
            render={()=><BtnOptions
            //Texto a coloar según la ruta en la que esté es ColorSkin
            text = {selects.text1}
                />}
            />

            <Route path="/clothes" 
            render={()=><BtnOptions
            //Texto a coloar según la ruta en la que esté es Hat, Shirt, Pants
            text = {selects.text2}
            text2 = {selects.text3}
            text3 = {selects.text4}
            />}
            />

            <Route path="/background" 
            render={()=><BtnOptions
            
            text ={imgIds.id}
            text2 ={imgIds.id2}
            text3 ={imgIds.id3}
                        />
            }
            />

            <Route path="/pokemon" 
            render={()=><BtnOptions
            
            text ={imgIds.id}
            text2 ={imgIds.id2}
            text3 ={imgIds.id3}
                        />
            }
            />
        </div>
    );
}