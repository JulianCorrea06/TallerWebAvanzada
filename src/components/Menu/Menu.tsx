import { log } from 'node:console';
import * as React from 'react';
import { getImageSrcFromFilename } from '../../utils/getImageSrcFromFilename';
import './Menu.css';

interface MenuProps{
    section?: string;
    optionsArray: Array<string>;  //Arreglo de strings tipo -Sombrero -Camisa -Pantalon
    colorOptionsArray: Array<String>; //Arreglo de string tipo #EE55345
    imgUrlArray: Array<string>; //Arreglo de botones de imagenes (camisetarayada.svg)
    sectionSelected?: boolean;
    skinSelected?: boolean;
    eyesSelected?: boolean;
    
}

export const Menu: React.FC<MenuProps> =({section, optionsArray, colorOptionsArray,imgUrlArray,sectionSelected,skinSelected,eyesSelected })=>{

    return (<div className={'selectionMenu'}>
        
        <button className='btn2' >{optionsArray}</button>




    </div>);
}