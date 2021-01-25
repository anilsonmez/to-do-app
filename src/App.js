import { useState } from "react";
import "./App.css";

let taskCount = 0;

const App = () => {
  const [newTask, setNewTask] = useState({ id: 0, content: "" });
  const [taskList, setTaskList] = useState([]);
  console.log("App Called");
  console.log(`taskCount outside: ${taskCount}`);

  function handleTaskAddition() {
    taskCount++;
    console.log(`taskCount: ${taskCount}`);
    setNewTask({ ...newTask, id: taskCount });
    console.log(newTask);
    setTaskList([...taskList, newTask]);
    console.log(taskList);
  }

  function handleTaskDeletion(taskID) {
    console.log("called");
    setTaskList(taskList.filter((task) => taskID !== task.id));
  }

  return (
    <div className="App">
      <label htmlFor="new-task">
        <input
          id="new-task"
          value={newTask.content}
          placeholder="Add a new task"
          onChange={(e) =>
            setNewTask({ ...newTask, content: `${e.target.value}` })
          }
        />
        <button onClick={handleTaskAddition}>Add Task</button>
      </label>
      <label htmlFor="task-list">
        <ul>
          {taskList.map((task) => (
            <li key={task.id}>
              <div className="task-content">{task.content}</div>
              <button onClick={() => handleTaskDeletion(task.id)}>
                Delete Task
              </button>
            </li>
          ))}
        </ul>
      </label>
    </div>
  );
};

export default App;
