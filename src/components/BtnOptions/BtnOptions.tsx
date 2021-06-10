import * as React from 'react';
import './BtnOptions.css'
import { Route } from 'react-router';

import Set1 from '../../utils/images/conjunto1.png';
import Set2 from '../../utils/images/conjunto2.png';
import Set3 from '../../utils/images/conjunto3.png';

import { Link } from 'react-router-dom';

interface BtnOptionsProps{
    text: string;
    text2?:string;
    text3?:String;
    selected?: boolean;
    setBackground?: any;
    setPokemon?: any;
    setClothes?:any;
}


export const BtnOptions: React.FC<BtnOptionsProps> = ({text,text2,text3,setBackground,setPokemon,setClothes})=>{

    const setBackground1 = () =>{
        setBackground("https://i.ibb.co/myvxs1Y/back2.png");
        localStorage.setItem('background','https://i.ibb.co/myvxs1Y/back2.png');
    }

    const setBackground2 = () =>{
        setBackground("https://i.ibb.co/hgJQGRt/back3.png");
        localStorage.setItem('background','https://i.ibb.co/hgJQGRt/back3.png');
    }

    const setBackground3 = () =>{
        setBackground("https://i.ibb.co/jTKRdzB/back1.png");
        localStorage.setItem('background','https://i.ibb.co/jTKRdzB/back1.png');
    }

    const pokemon1 = () =>{
        setPokemon("https://i.ibb.co/xmbhZp9/imagen-2021-04-08-122722.png");
        localStorage.setItem('pokemon',"https://i.ibb.co/xmbhZp9/imagen-2021-04-08-122722.png");
    }

    const pokemon2 = () =>{
        setPokemon("https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png");
        localStorage.setItem('pokemon',"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png");
    }

    const pokemon3 = () =>{
        setPokemon("https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png");
        localStorage.setItem('pokemon',"https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png");
    }

    const setClothes1 = () =>{
        setClothes(Set1);
        localStorage.setItem('clothes',Set1);
    }

    const setClothes2 = () =>{
        setClothes(Set2);
        localStorage.setItem('clothes',Set2);
    }

    const setClothes3 = () =>{
        setClothes(Set3);
        localStorage.setItem('clothes',Set3);
    }


    return(
        <div className="buttons">
            
            <Route path="/clothes" render={()=>
            <div className="buttons">
            <button className="btn2" onClick={()=>setClothes1()}>Set1</button>
            <button className="btn2" onClick={()=>setClothes2()}>Set2</button>
            <button className="btn2" onClick={()=>setClothes3()}>Set3</button>
            </div>}
        />

            <Route path="/background" render={()=>
            <div className="backgroundMenu">
            <button className="nonebtn" onClick={()=>setBackground1()} ><img src={"https://i.ibb.co/myvxs1Y/back2.png"} /></button>
            <button className="nonebtn" onClick={()=>setBackground2()}><img src={"https://i.ibb.co/hgJQGRt/back3.png"} /></button>
            <button className="nonebtn" onClick={()=>setBackground3()}><img src={'https://i.ibb.co/jTKRdzB/back1.png'} /></button>
            
            </div>}
            />

            <Route path="/pokemon" render={()=>
            <div className="pokeMenu">

            <button className="nonebtn" onClick={()=>pokemon1()} ><img src={"https://i.ibb.co/xmbhZp9/imagen-2021-04-08-122722.png"} /></button>
            <button className="nonebtn" onClick={()=>pokemon2()} ><img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"} /></button>
            <button className="nonebtn" onClick={()=>pokemon3()} ><img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png"} /></button>
            
            </div>}
            />
        
        </div>
    );

}