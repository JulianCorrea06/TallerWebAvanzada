import * as React from 'react';
import './BtnOptions.css'
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

interface BtnOptionsProps{
    text: string;
    text2?:string;
    text3?:String;
    selected?: boolean;
}


export const BtnOptions: React.FC<BtnOptionsProps> = ({text,text2,text3, selected})=>{


    const setBackground =() =>{


    }

    return(
        <div className="buttons">
            <Route path="/body" render={()=>
            
            <Link to="/body/skincolor"><button className='btn2'>{text}</button></Link>}
        />

            <Route path="/clothes" render={()=>
            <div className="buttons">
                <Link to="/clothes/hat"><button className='btn2'>{text}</button></Link>
                <Link to="/clothes/shirt"><button className='btn2'>{text2}</button></Link>
                <Link to="/clothes/pants"><button className='btn2'>{text3}</button></Link>
            </div>}
        />

            <Route path="/background" render={()=>
            <div className="backgroundMenu">
            <button onClick={setBackground} ><img src={"https://i.ibb.co/myvxs1Y/back2.png"} /></button>
            <button onClick={setBackground}><img src={"https://i.ibb.co/hgJQGRt/back3.png"} /></button>
            <button onClick={setBackground}><img src={'https://i.ibb.co/jTKRdzB/back1.png'} /></button>
            
            </div>}
            />

            <Route path="/pokemon" render={()=>
            <div className="pokeMenu">
            <Link to="/pokemon/poke1"><img src={"https://i.ibb.co/xmbhZp9/imagen-2021-04-08-122722.png"}  /></Link>
            <Link to="/pokemon/poke2"><img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"}   /></Link>
            <Link to="/pokemon/poke3"><img src={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png'}   /></Link>
            
            </div>}
            />
        
        </div>
    );

}