import * as React from 'react'
import './PreviewSelections.css'
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import Hat from '../../../utils/images/gorra1.svg';
import Hat2 from '../../../utils/images/gorra2.svg';
import Hat3 from '../../../utils/images/gorra3.svg';

import Shirt from '../../../utils/images/camisa1.svg';
import Shirt2 from '../../../utils/images/camisa2.svg';
import Shirt3 from '../../../utils/images/camisa3.svg';

import Pants from '../../../utils/images/pant1.svg';
import Pants2 from '../../../utils/images/pant2.svg';
import Pants3 from '../../../utils/images/pant3.svg';

interface PreviewSelectionsProps{
    //Parte 1 donde salen las opciones
    //Parte 2 donde salen los elementos de personalización de color e imagen
}

export const PreviewSelections: React.FC<PreviewSelectionsProps> =({}) =>{

    return(
            
            <div>


            <Route path="/body" render={()=>
            <div className="backgroundMenu">
            <Link to="/clothes/hat/1"><img src={Hat} alt=""/></Link>
            
            

            </div>}
            />


                <Route path="/clothes/hat" render={()=>
            <div className="backgroundMenu">
            <Link to="/clothes/hat/1"><img src={Hat} alt=""/></Link>
            <Link to="/clothes/hat/2"><img src={Hat2} alt=""/></Link>
            <Link to="/clothes/hat/3"><img src={Hat3} alt=""/></Link>
            
            
            </div>}
            />

        <Route path="/clothes/shirt" render={()=>
            <div className="backgroundMenu">
            <Link to="/clothes/shirt/1"><img src={Shirt} alt=""/></Link>
            <Link to="/clothes/shirt/2"><img src={Shirt2} alt=""/></Link>
            <Link to="/clothes/shirt/3"><img src={Shirt3} alt=""/></Link>
            </div>}
            />

        <Route path="/clothes/pants" render={()=>
            <div className="backgroundMenu">
            <Link to="/clothes/pants/1"><img src={Pants} alt=""/></Link>
            <Link to="/clothes/pants/2"><img src={Pants2} alt=""/></Link>
            <Link to="/clothes/pants/3"><img src={Pants3} alt=""/></Link>
            </div>}

            
            />

            </div>
    );
}