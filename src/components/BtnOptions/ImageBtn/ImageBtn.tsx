import * as React from 'react'
import './imageBtn.css'
import { Link } from 'react-router-dom';

interface ImageBtnProps{
    id:string;
    id2?:string;
    id3?:string;
}

export const ImageBtn: React.FC<ImageBtnProps> =({id,id2,id3}) =>{


    return(

        <div className='imgSection'>
            <Link to="/background/back1"><img src="../../../utils/images/back1.png" alt=""/></Link>
            <Link to="/background/back1"><img src="../../../utils/images/back2.jpg" alt=""/></Link>
            <Link to="/background/back1"><img src="../../../utils/images/back3.jpg" alt=""/></Link>
        </div>
    );
}