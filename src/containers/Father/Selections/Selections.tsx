import * as React from 'react'
import './Selections.css'
import { Route } from 'react-router';
import { BtnOptions } from '../../../components/BtnOptions/BtnOptions';

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

export const Selections: React.FC<SelectionsProps> =({}) =>{

    const [selects, setSelects] = React.useState(allSelectionsText);

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
                        />
            }

            />
        </div>
    );
}