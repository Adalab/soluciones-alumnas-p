import { useState } from 'react';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    return setCount(count + 1);
  }

  function decrement() {
    return setCount(count - 1);
  }

  return (
    <div>
      <p>Hiciste click {count} veces</p>
      <button onClick={increment}>incrementar</button>
      <button onClick={decrement}>decrementar</button>
    </div>
  );
}

/*const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Hiciste click {count} veces</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};*/
export default App;
