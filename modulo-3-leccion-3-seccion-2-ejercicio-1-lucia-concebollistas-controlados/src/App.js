import './App.scss';

import { useState } from 'react';

function App() {
  const [resultMessage, setResultMessage] = useState('');

  const handleresultMessages = (event) => {
    console.log(event);
    let cebollaChecked = event.target.form.elements.cebolla.checked;
    let patatasChecked = event.target.form.elements.patatas.checked;
    let huevosChecked = event.target.form.elements.huevos.checked;
    if (cebollaChecked && patatasChecked && huevosChecked) {
      setResultMessage('Eres una persona concebollista. Aberración!');
    } else {
      setResultMessage('Eres un robot sin paladar.');
    }
  };

  const handleCheckAll = (event) => {
    event.preventDefault();
    console.log(event);
    event.target.form.elements.cebolla.checked = true;
    event.target.form.elements.patatas.checked = true;
    event.target.form.elements.huevos.checked = true;
    event.target.form.elements.cerveza.checked = true;
    event.target.form.elements.nueces.checked = true;
    event.target.form.elements.macarrones.checked = true;
  };
  const handleUncheckAll = (event) => {
    event.preventDefault();
    event.target.form.elements.cebolla.checked = false;
    event.target.form.elements.patatas.checked = false;
    event.target.form.elements.huevos.checked = false;
    event.target.form.elements.cerveza.checked = false;
    event.target.form.elements.nueces.checked = false;
    event.target.form.elements.macarrones.checked = false;
  };

  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <form className="ingredients">
        <button onClick={handleCheckAll}>Marcar todos</button>
        <button onClick={handleUncheckAll}>Desmarcar todos</button>
        <div className="ingredient">
          <input
            type="checkbox"
            name="macarrones"
            value="macarrones"
            onChange={handleresultMessages}
          />
          <label htmlFor="macarrones">Macarrones</label>
        </div>
        <div className="ingredient">
          <input
            type="checkbox"
            name="patatas"
            value="patatas"
            onChange={handleresultMessages}
          />
          <label htmlFor="patatas">Patatas</label>
        </div>
        <div className="ingredient">
          <input
            type="checkbox"
            name="nueces"
            value="nueces"
            onChange={handleresultMessages}
          />
          <label htmlFor="nueces">Nueces</label>
        </div>
        <div className="ingredient">
          <input
            type="checkbox"
            name="huevos"
            value="huevos"
            onChange={handleresultMessages}
          />
          <label htmlFor="huevos">Huevos</label>
        </div>
        <div className="ingredient">
          <input
            type="checkbox"
            name="cebolla"
            value="cebolla"
            onChange={handleresultMessages}
          />
          <label htmlFor="cebolla">Cebolla</label>
        </div>
        <div className="ingredient">
          <input
            type="checkbox"
            name="cerveza"
            value="cerveza"
            onChange={handleresultMessages}
          />
          <label htmlFor="cerveza">Cerveza</label>
        </div>
      </form>
      <p>{resultMessage}</p>
    </div>
  );
}
export default App;
