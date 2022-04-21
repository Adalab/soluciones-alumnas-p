import './App.scss';

import { useState } from 'react';

function App() {
  const [ingridient, setIngridient] = useState('');

  const handleIngridients = (event) => {
    console.log(event);
    let cebollaChecked = event.target.form.elements.cebolla.checked;
    let patatasChecked = event.target.form.elements.patatas.checked;
    let huevosChecked = event.target.form.elements.huevos.checked;
    if (cebollaChecked && patatasChecked && huevosChecked) {
      setIngridient('Eres una persona concebollista. Aberración!');
    } else {
      setIngridient('Eres un robot sin paladar.');
    }
  };

  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>

      <form className="ingredients">
        <div className="ingredient">
          <input
            type="checkbox"
            name="macarrones"
            value="macarrones"
            onChange={handleIngridients}
          />
          <label htmlFor="macarrones">Macarrones</label>
        </div>
        <div className="ingredient">
          <input
            type="checkbox"
            name="patatas"
            value="patatas"
            onChange={handleIngridients}
          />
          <label htmlFor="patatas">Patatas</label>
        </div>
        <div className="ingredient">
          <input
            type="checkbox"
            name="nueces"
            value="nueces"
            onChange={handleIngridients}
          />
          <label htmlFor="nueces">Nueces</label>
        </div>
        <div className="ingredient">
          <input
            type="checkbox"
            name="huevos"
            value="huevos"
            onChange={handleIngridients}
          />
          <label htmlFor="huevos">Huevos</label>
        </div>
        <div className="ingredient">
          <input
            type="checkbox"
            name="cebolla"
            value="cebolla"
            onChange={handleIngridients}
          />
          <label htmlFor="cebolla">Cebolla</label>
        </div>
        <div className="ingredient">
          <input
            type="checkbox"
            name="cerveza"
            value="cerveza"
            onChange={handleIngridients}
          />
          <label htmlFor="cerveza">Cerveza</label>
        </div>
      </form>
      <p>{ingridient}</p>
    </div>
  );
}
export default App;
