import * as React from 'react'
import './Selections.css'
import { Route } from 'react-router';
import { BtnOptions } from '../../../components/BtnOptions/BtnOptions';
import { ImageBtn } from '../../../components/BtnOptions/ImageBtn/ImageBtn';

interface SelectionsProps{
    setBackground?: any;
    setPokemon?: any;
    setClothes?:any;
}

const allSelectionsText ={
    
    text2: "Set 1",
    text3: "Set 2",
    text4: "Set 3"
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

export const Selections: React.FC<SelectionsProps> =({setBackground, setPokemon, setClothes}) =>{

    const [selects, setSelects] = React.useState(allSelectionsText);
    const [imgIds, setImgIds] = React.useState(allImgId);
    const [pokeIds, setPokeIds] = React.useState(allPokeId);
    return(

        <div className='section'>
            

            <Route path="/clothes" 
            render={()=><BtnOptions
            //Texto a coloar según la ruta en la que esté es Hat, Shirt, Pants
            text = {selects.text2}
            text2 = {selects.text3}
            text3 = {selects.text4} setClothes={setClothes}
            />}
            />

            <Route path="/background" 
            render={()=><BtnOptions
            
            text ={imgIds.id}
            text2 ={imgIds.id2}
            text3 ={imgIds.id3} setBackground={setBackground}
                        />
            }
            />

            <Route path="/pokemon" 
            render={()=><BtnOptions
            
            text ={pokeIds.id}
            text2 ={pokeIds.id2}
            text3 ={pokeIds.id3} setPokemon={setPokemon}
                        />
            }
            />
        </div>
    );
}