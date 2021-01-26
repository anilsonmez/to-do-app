import { useState } from "react";
import "./App.css";
import Task from "./Task";

let taskCount = 0;

const App = () => {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleTaskAddition() {
    taskCount++;
    setNewTask(newTask);
    setTaskList([...taskList, { content: newTask, id: taskCount }]);
    setNewTask("");
  }

  function handleTaskDeletion(taskID) {
    setTaskList(taskList.filter((task) => taskID !== task.id));
  }

  return (
    <div className="App">
      <header>App To-Do</header>
      <label htmlFor="new-task">
        <input
          id="new-task"
          value={newTask}
          placeholder="Add a new task"
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter" && newTask) {
              handleTaskAddition();
            }
          }}
        />
        <button disabled={!newTask} onClick={handleTaskAddition}>
          Add Task
        </button>
      </label>
      <ul>
        {taskList.map((task) => (
          <Task task={task} onDelete={handleTaskDeletion} key={task.id} />
        ))}
      </ul>
    </div>
  );
};

export default App;
