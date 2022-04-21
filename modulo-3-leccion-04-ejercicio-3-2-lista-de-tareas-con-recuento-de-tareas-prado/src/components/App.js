import "../styles/App.scss";
import { useState } from "react";

function App() {
  let doneTasks = [];
  const [searchTask, setSearchTask] = useState("");
  const [tasks, setTasks] = useState([
    { task: "Comprar harina, jamón y pan rallado", completed: true },
    { task: "Hacer croquetas ricas", completed: true },
    { task: "Ir a la puerta de un gimnasio", completed: false },
    {
      task: "Comerme las croquetas mirando a la gente que entra en el gimnasio",
      completed: false,
    },
  ]);
  const handleTask = (ev) => {
    const idtarget = ev.currentTarget.id;
    tasks[idtarget].completed = !tasks[idtarget].completed;
    setTasks([...tasks]);
  };

  const handleInput = (ev) => {
    setSearchTask(ev.target.value);
  };

  const renderTasks = () => {
    tasks.filter((item) => {
      if (item.completed) {
        doneTasks.push(item);
        console.log(doneTasks);
      }
    });

    return tasks
      .filter((item) => {
        return item.task.toLowerCase().includes(searchTask.toLowerCase());
      })

      .map((task, index) => {
        let doneTask = "";
        if (task.completed === true) {
          doneTask = "cross";
        }
        return (
          <li className={doneTask} key={index} onClick={handleTask} id={index}>
            {task.task}
          </li>
        );
      });
  };

  return (
    <>
      <h1>Mi lista de tareas</h1>
      <ol>{renderTasks()}</ol>
      <input type="text" onChange={handleInput} value={searchTask} />
      <ul>
        <li>Tareas Totales: {tasks.length}</li>
        <li>Tareas completadas: {doneTasks.length}</li>
        <li>Tareas pendientes: {tasks.length - doneTasks.length}</li>
      </ul>
    </>
  );
}

export default App;
