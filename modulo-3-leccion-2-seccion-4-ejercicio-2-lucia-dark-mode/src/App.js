import './App.scss';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('');
  function changeToDark() {
    if (mode === 'dark') {
      setMode('light');
    } else {
      setMode('dark');
    }
  }

  return (
    <div className={mode}>
      <p>Pulsa y cambia el fondo de este texto</p>
      <button onClick={changeToDark}>Botón</button>
    </div>
  );
}
export default App;
