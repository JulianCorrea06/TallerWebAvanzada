import * as React from 'react';
import ColorPicker from "react-pick-color";

interface ColorOptionProps{
    colorValue: string;
}

export const ColorOption: React.FC<ColorOptionProps>=({colorValue}) =>{

return(
    <div>
    <button className="colorpickerbtn" id="Cbtn" ></button>
    </div>
);

}