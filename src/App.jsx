
import Taskform from "./Components/Taskform"
import TaskList from "./Components/TaskList"
import Progresstracker from "./Components/Progresstracker"

export default function App() {
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

