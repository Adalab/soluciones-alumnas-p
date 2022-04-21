import "../styles/App.scss";

function App() {
  const tasks = [
    { task: "Comprar harina, jamón y pan rallado", completed: true },
    { task: "Hacer croquetas ricas", completed: true },
    { task: "Ir a la puerta de un gimnasio", completed: false },
    {
      task: "Comerme las croquetas mirando a la gente que entra en el gimnasio",
      completed: false,
    },
  ];

  const renderTasks = () => {
    return tasks.map((task, index) => {
      let crossed = "";
      if (task.completed === true) {
        crossed = "cross";
      }
      return (
        <li className={crossed} key={index}>
          {task.task}
        </li>
      );
    });
  };
  return (
    <>
      <h1>Mi lista de tareas</h1>
      <ol>{renderTasks()}</ol>
    </>
  );
}

export default App;
