import { useState } from "react"

export default function Taskform({addTask}) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [category, setCategory] = useState('General');

    const handlesubmit = (e) => {
        e.preventDefault(); // Doesn't refresh the page upon Submit
        addTask({text: task, priority, category, completed: false})
    }
    return(
        //Taskform Component
        <form onSubmit={handlesubmit}>
            <div>
                <input type="text" placeholder="Enter the task"  onChange={(e) => setTask(e.target.value)}/>
                <button type="submit">Add Task</button>
                <h1>{task} {priority} {category}</h1>
            </div>

            <div>
                <select onChange={(e) => setPriority(e.target.value)}>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>

                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="general">General</option>
                    <option value="work">Work</option>
                    <option value="school">School</option>
                    <option value="personal">Personal</option>
                </select>
            </div>
        </form>
    )
}