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
    clothes?: string;
}

export const PreviewSelections: React.FC<PreviewSelectionsProps> =({clothes}) =>{

    return(
            
            <div>

                <Route path="/clothes/set1" render={()=>
            <div className="backgroundMenu">
            <button className="nonebtn"><img src={Hat} alt=""/></button>
            <button className="nonebtn"><img src={Shirt} alt=""/></button>
            <button className="nonebtn"><img src={Pants} alt=""/></button>
            
            
            </div>}
            />

        <Route path="/clothes/set2" render={()=>
            <div className="backgroundMenu">
            <button className="nonebtn"><img src={Hat2} alt=""/></button>
            <button className="nonebtn"><img src={Shirt2} alt=""/></button>
            <button className="nonebtn"><img src={Pants2} alt=""/></button>
            </div>}
            />

        <Route path="/clothes/set3" render={()=>
            <div className="backgroundMenu">
            <button className="nonebtn"><img src={Hat3} alt=""/></button>
            <button className="nonebtn"><img src={Shirt3} alt=""/></button>
            <button className="nonebtn"><img src={Pants3} alt=""/></button>
            </div>}

            
            />

            </div>
    );
}