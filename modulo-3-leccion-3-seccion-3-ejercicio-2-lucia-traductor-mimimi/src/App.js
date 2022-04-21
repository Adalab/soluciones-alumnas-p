import './App.scss';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const handleName = (event) => {
    event.preventDefault();
    let rawText = event.target.value;
    setName(rawText.replace(/[aeiou]/gi, 'i'));
  };
  return (
    <div>
      <form>
        <label htmlFor="name">Escribe algo: </label>
        <input type="text" onChange={handleName}></input>
      </form>
      <p>{name}</p>
    </div>
  );
}
export default App;
