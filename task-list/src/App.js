import { useEffect, useState } from "react";
import TaskList from "./components/Tasks/TasksList";
import TasksInput from "./components/Tasks/TasksInput";
import classes from "./App.module.css";
import HourGlass from "./components/UI/Spinners/HourGlass";

const App = () => {
  const [tasks, setNewTask] = useState({});
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const fetchTasksHandler = async (method = "GET", taskText = "") => {
    try {
      setPending(true);
      setError(null);

      let response = null

      if (method==="DELETE") {
         response = await fetch(
          "https://task-list-ef62f-default-rtdb.europe-west1.firebasedatabase.app/tasks/" +
            taskText +
            ".json",{method}
        );
      } else {
        response = await fetch(
          "https://task-list-ef62f-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
          {
            method,
            headers: {
              "Content-Type": method !== "GET" ? "application/json" : "",
            },
            body: method !== "GET" ? JSON.stringify({ title: taskText }) : null,
          }
        );
      }

      // console.log(response);

      if (response.ok) {
        const data = await response.json();
        if (method === "GET") {
          setNewTask(data);
        } else {
          fetchTasksHandler();
        }
        setNewTask(data);
        console.log(data);
      }
    } catch (error) {
      setError({
        message: error.message || "something went wrong",
      });
    }

    setPending(false);
  };

  useEffect(() => {
    fetchTasksHandler();
  }, []);

  const addTaskHandler = (enteredText) => {
    fetchTasksHandler("POST", enteredText);
  };
  
  const deleteItemHandler = (taskId) => {
    // setNewTask((prevTasks) => {
    //   const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
    //   return updatedTasks;
    // });
    fetchTasksHandler("DELETE", taskId);
  };

  return (
    <main>
      <section className={classes["task-form"]}>
        <TasksInput onAddTask={addTaskHandler} />
      </section>
      {pending === true && <HourGlass />}
      <section className={classes["tasks-content"]}>
        {!pending && tasks !== null && error === null && (
          <TaskList items={tasks} onDeleteItem={deleteItemHandler} />
        )}
        {!pending && tasks === null && !error && (
          <h2
            style={{
              textAlign: "center",
              padding: "1em",
              border: "1px solid #339900",
              backgroundColor: "#99cc33",
            }}
          >
            No tasks availables. Add one?
          </h2>
        )}
        {!pending && tasks === null && error !== null && (
          <h2
            style={{
              textAlign: "center",
              padding: "1em",
              border: "1px solid #339900",
              backgroundColor: "#99cc33",
            }}
          >
            {error.message}
          </h2>
        )}
      </section>
    </main>
  );
};

export default App;