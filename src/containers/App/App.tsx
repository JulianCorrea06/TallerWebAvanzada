import { stringify } from "node:querystring";
import React, { Fragment } from "react";
import { Navigation } from '../Nav/Navigation';
import {Father} from '../Father/Father';
import { Route } from 'react-router';

import "./App.css";
import {HashRouter, MemoryRouter, BrowserRouter} from 'react-router-dom';

import ColorPicker from "react-pick-color";

const initialNavs ={
    item1: "Body",
    item2: "Clothes",
    item3: "Background",
    item4: "Pokemon",
}

export const App = () => {

  const [navs, setNavs] = React.useState(initialNavs);

  const [color, setColor] = React.useState("#fff");

  const HandleNewNav = (
    item: string,

  ) => {
    
    const newNav = {
      item1: item,
      item2: item,
      item3: item,
      item4: item,
    };
    
    setNavs(newNav);
  };

  return (
    <BrowserRouter>
      <h2 className="mainTitle">Create your pokemon trainer</h2>
      <div className="circulo circulo--first"></div>
      <div className="circulo circulo--second"></div>
      <div className="circulo circulo--third"></div>

      <body>
        <Navigation
          //Navegación para escoger editor
          item1={navs.item1}
          item2={navs.item2}
          item3={navs.item3}
          item4={navs.item4}
        />

        <Route path="/body" render={()=>
            <Father/>}
        />
        <Route path="/clothes" render={()=>
            <Father/>}
        />
        <Route path="/background" render={()=>
            <Father/>}
        />
        <Route path="/pokemon" render={()=>
            <Father/>}
        />


      </body>

      
    </BrowserRouter>

    //arribita en el body colocar
    //<ColorPicker color={color} hideAlpha={true} onChange={(color) => setColor(color.hex) } />
  );
};

export default App;
