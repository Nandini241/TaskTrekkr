
import Taskform from "./Components/Taskform"
import TaskList from "./Components/TaskList"
import Progresstracker from "./Components/Progresstracker"
import { useEffect, useState } from "react"

export default function App() {

  const [tasks, setTasks] = useState([]);

  useEffect( () => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  })
  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  return(
    <div>
      <h1>TaskTrekkr</h1>
      <p>Where clarity meets completion-One task done at a time</p>
      <Taskform />
      <TaskList />
      <Progresstracker />
      <button>Clear all tasks</button>
    </div>
  )
}

