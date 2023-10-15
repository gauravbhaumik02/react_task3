import React, { useState } from 'react';
import './App.css';

const Colorbutton = ({ color, onClick }) => {
  return (
    <button onClick={() => onClick(color)} style={{ backgroundColor: color }}>
      &nbsp;
    </button>
  );
};

const App = () => {
  const [color, setColor] = useState('white');
  const [showColorButtons, setShowColorButtons] = useState(false);

  const changeBackgroundColor = (value) => {
    setColor(value);
    setShowColorButtons(false);
  };

  const showColorPicker = () => {
    setShowColorButtons(true);
  };

  return (
    <div className="main" style={{ backgroundColor: color, minHeight: '100vh'}}>
      <h1>Color Picker</h1>
      {showColorButtons && (
        <div className="buttons">
          <Colorbutton color="#FF0000" onClick={changeBackgroundColor} />
          <Colorbutton color="#02FE01" onClick={changeBackgroundColor} />
          <Colorbutton color="#0000FF" onClick={changeBackgroundColor} />
          <Colorbutton color="#FFFF00" onClick={changeBackgroundColor} />
          <Colorbutton color="#FF00FE" onClick={changeBackgroundColor} />
          <Colorbutton color="#00FEFE" onClick={changeBackgroundColor} />
          <Colorbutton color="#FEA500" onClick={changeBackgroundColor} />
          <Colorbutton color="#81007F" onClick={changeBackgroundColor} />
          <Colorbutton color="#FFC0CB" onClick={changeBackgroundColor} />
          <Colorbutton color="#008000" onClick={changeBackgroundColor} />
          <Colorbutton color="#FE6245" onClick={changeBackgroundColor} />
          <Colorbutton color="#01CDD1" onClick={changeBackgroundColor} />
          <Colorbutton color="#8B4512" onClick={changeBackgroundColor} />
          <Colorbutton color="#FF8B00" onClick={changeBackgroundColor} />
          <Colorbutton color="#4682B4" onClick={changeBackgroundColor} />
          <Colorbutton color="#FED700" onClick={changeBackgroundColor} />
        </div>
      )}
      <button className="pick" onClick={showColorPicker}>Pick Color</button>
    </div>
  );
}

export default App;
