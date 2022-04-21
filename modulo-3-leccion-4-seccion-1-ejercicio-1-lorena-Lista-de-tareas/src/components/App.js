/*import logo from '../images/logo.svg';*/
import '../styles/App.scss';

//React-Arrays y objetos


// 1. Lista de tareas con array de strings -- 

const App = () => {
  const tasks = [
    "Comprar harina, jamón y pan rallado",
    "Hacer croquetas ricas",
    "Ir a la puerta de un gimnasio",
    "Comerme las croquetas mirando a la gente que entra en el gimnasio",
  ];

  const renderTask = () => {
    return tasks.map((task,index) => {
      return <ol key={index}>{task}</ol>;
    });
  };
  
          
return (
    <div>
      <h1>Mi lista de tareas</h1>
      <ol>{renderTask()}</ol>
    </div>
  );
};

export default App;







    

