import '../styles/App.scss';

function App() {
  const handleInput = (ev) => {
    console.log('la última letra pulsada es:', ev.key);
  };

  return (
    <form>
      <label>Escribe:</label>
      <input type="text" onKeyUp={handleInput} />
    </form>
  );
}

export default App;
