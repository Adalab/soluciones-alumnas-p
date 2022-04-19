import { useState } from 'react';

const App = () => {
  const [number, setNumber] = useState(0);

  //Función que cambia a 1 el contador

  const handleNumber = (ev) => {
    const changeNumber = '1';
    setNumber(changeNumber); //A la función setNumber, le doy el valor de la nueva const.
  };

  //Función que resetea

  const resetButton = (ev) => {
    const resetNumber = '0';
    setNumber(resetNumber);
  };

  // Funcion que suma 1

  const plusButton = (ev) => {
    const plus = parseInt(number + 1);
    setNumber(plus);
  };

  return (
    <div>
      <p> Contador: {number} </p>
      <button type="button" onClick={handleNumber}>
        Cambiar a 1
      </button>{' '}
      <button type="button" onClick={resetButton}>
        Resetear
      </button>
      <button type="button" onClick={plusButton}>
        Sumar 1
      </button>
    </div>
  );
};

export default App;
