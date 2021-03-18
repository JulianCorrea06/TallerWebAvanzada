import React, { Fragment } from "react";
import { Menu } from "../../components/Menu/Menu";
import { MenuForm } from "../../components/Menu/MenuForm/MenuForm";
import "./App.css";

const initialMenus = [
  {
    section: "Phisycal",
    optionsArray: ["Skin" , "Color", "Eyes"],
    colorOptionsArray: ["#FFC8A5"],
    imgUrlArray: ["No existente todavía"],
    sectionSelected: true,
    skinSelected: true,
    eyesSelected: false,
  },
  {
    section: "Clothes",
    optionsArray: ["Hat", "Shirt", "Pants"],
    colorOptionsArray: [
      "Este arreglo se obtiene de la cantidad de colores que se obtengan del svg",
    ],
    imgUrlArray: ["Arreglo de Url de las 9 imagenes que se ven"],
    hatSelected: true,
    shirtSelected: false,
    pantsSelected: false,
  },
];

export const App = () => {
  const [menus, setMenus] = React.useState(initialMenus);

  const handleNewElement = (
    section: string,
    url: string,
    selected: boolean,
    array: string[]
  ) => {
    const copy = menus.slice();
    const newObj = {
      section: section,
      optionsArray: array,
      colorOptionsArray: array,
      imgUrlArray: array,
      sectionSelected: selected,
      skinSelected: selected,
      eyesSelected: selected,
    };
    copy.push(newObj);
    setMenus(copy);
  };

  return (
    <Fragment>
      <h2 className="mainTitle">Create your pokemon trainer</h2>
      <div className="circulo circulo--first"></div>
      <div className="circulo circulo--second"></div>
      <div className="circulo circulo--third"></div>

      <body>

        

        <MenuForm onNewItem={handleNewElement} />

        {menus.map(
          ({
            section,
            optionsArray,
            colorOptionsArray,
            imgUrlArray,
            sectionSelected,
            skinSelected,
            eyesSelected,
          }) => {
            return (
              <Menu
                section={section}
                optionsArray={optionsArray}
                colorOptionsArray={colorOptionsArray}
                imgUrlArray={imgUrlArray}
                sectionSelected={sectionSelected}
                skinSelected={skinSelected}
                eyesSelected={eyesSelected}
              />
            );
          }
        )}
      </body>
    </Fragment>
  );
};

export default App;
