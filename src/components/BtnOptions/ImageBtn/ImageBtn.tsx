import * as React from 'react'
import './imageBtn.css'
import { Route } from 'react-router';
import { Link } from 'react-router-dom';


interface ImageBtnProps{
    id:string;
    id2?:string;
    id3?:string;
}



export const ImageBtn: React.FC<ImageBtnProps> =({id,id2,id3}) =>{


    return(

        <div className='imgSection'>

            <Route path="/background" render={()=>
            <div>
            <Link to="/background/back1"><img src="./back1.png" alt={id}/></Link>
            <Link to="/background/back2"><img src="./back2.jpg" alt={id}/></Link>
            <Link to="/background/back3"><img src="./back3.jpg" alt={id}/></Link>

            <p>ayuda</p>
            </div>}
            />


            

            
        </div>
    );
}