import './App.scss';
import { useEffect, useState } from 'react';

function App() {
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);
  const [operation, setOperation] = useState('sum');
  const [result, setResult] = useState(0);

  useEffect(() => {
    makeOperation();
  }, [num1, num2, operation]);

  function numberOne(event) {
    let value = event.target.value;
    if (value !== '') {
      setnum1(parseInt(value));
    } else {
      setnum1(0);
    }
  }

  function numberTwo(event) {
    let value = event.target.value;
    if (value !== '') {
      setnum2(parseInt(value));
    } else {
      setnum2(0);
    }
  }

  function suma() {
    return num1 + num2;
  }
  function resta() {
    return num1 - num2;
  }
  function multiplicacion() {
    return num1 * num2;
  }
  function division() {
    return num1 / num2;
  }

  function reset(event) {
    event.preventDefault();
    setnum1(0);
    setnum2(0);
    setOperation('sum');
  }
  function handleSelect(event) {
    setOperation(event.target.value);
  }
  function makeOperation() {
    switch (operation) {
      case 'sum':
        setResult(suma());
        break;
      case 'rest':
        setResult(resta());
        break;
      case 'product':
        setResult(multiplicacion());
        break;
      default:
        setResult(division());
    }
  }

  return (
    <form>
      <div className="calc">
        <h2>CALCULADORA</h2>
        <select
          className="selectOperation"
          name="select"
          id=""
          onChange={handleSelect}
          value={operation}
        >
          <option value="sum">suma</option>
          <option value="rest">resta</option>
          <option value="product">multiplicación</option>
          <option value="division">division</option>
        </select>
        <label>
          Introduce un nº:
          <input type="number" onChange={numberOne} value={num1} />
        </label>
        <label>
          Introduce otro nº:
          <input type="number" onChange={numberTwo} value={num2} />
        </label>

        <p>Resultado: {result}</p>
        <button className="resetBtn" onClick={reset}>
          Reset
        </button>
      </div>
    </form>
  );
}

export default App;
