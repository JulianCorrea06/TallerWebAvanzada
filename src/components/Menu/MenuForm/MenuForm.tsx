import React from 'react';
import './../Menu.css';

interface MenuFormProps {
    onNewItem: (section: string, url: string, selected: boolean , array: string[]) => void;
  }

  export const MenuForm: React.FC<MenuFormProps> = ({ onNewItem }) => {

    const [ section, setSection ] = React.useState('');
    const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setSection(event.target.value);
    }
  
    const [ url, setUrl ] = React.useState('');
    const handleUrlChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setUrl(event.target.value);
    }
  
    const [ selected, setSelected ] = React.useState(false);
    const handleSelectedChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setSelected(event.target.checked);
    }

    const [ array, setArray] = React.useState([] as any);
    const handleArrayChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setArray(event.target.value);
    }
  
    const handleClick = () => {
      onNewItem(section, url, selected, array);
      setSection('');
      setUrl('');
      setSelected(false);
      setArray([]);
    }
  
 
    return <div>

    <button className ='btn1' onClick={handleClick}>CREA TU PERSONAJE</button>
      
      
    </div>;
  }