import { useState } from "react";
import "./App.css";
import Task from "./Task";

let taskCount = 0;

const App = () => {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  console.log("App Called");
  console.log(`taskCount outside: ${taskCount}`);

  function handleTaskAddition() {
    taskCount++;
    console.log(`taskCount: ${taskCount}`);
    setNewTask(newTask);
    console.log(`newTask: ${newTask} id: ${taskCount}`);
    setTaskList([...taskList, { content: newTask, id: taskCount }]);
    console.log([...taskList, { content: newTask, id: taskCount }]);
    setNewTask("");
  }

  function handleTaskDeletion(taskID) {
    console.log("called");
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
            if (e.key === "Enter") {
              handleTaskAddition();
            }
          }}
        />
        <button onClick={handleTaskAddition}>Add Task</button>
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
