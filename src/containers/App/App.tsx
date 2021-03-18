import { stringify } from "node:querystring";
import React, { Fragment } from "react";
import { Navigation } from '../Nav/Navigation';
import "./App.css";

const initialNavs ={
    item1: "Body",
    item2: "Clothes",
    item3: "Background",
    item4: "Pokemon",
}

export const App = () => {

  const [navs, setNavs] = React.useState(initialNavs);

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
    <Fragment>

      

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
      />;






      </body>
    </Fragment>
  );
};

export default App;
