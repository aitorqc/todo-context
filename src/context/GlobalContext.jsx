import { useReducer } from "react";
import { createContext, useState } from "react";
import { v4 } from "uuid";

import appReducer from "./AppReducer";

export const ContextTask = createContext()

export default function GlobalContext(props) {
    const [tasks, setTasks] = useState([]);

    const [state, dispatch] = useReducer(appReducer, tasks);

    function addTask(data) {
        console.log(data)
        dispatch({
            type: "ADD_TASK",
            payload: {
                id: v4(),
                ...data
            }
        });
    }

    function removeTask(data) {
        dispatch({
            type: "REMOVE_TASK",
            payload: data.id
        })
    }

    function editTask(id, data) {
        dispatch({
            type: "EDIT_TASK",
            payload: {
                id: id,
                ...data
            }
        })
    }

    return (
        <ContextTask.Provider value={
            {
                state,
                addTask,
                removeTask,
                editTask
            }
        }>
            {props.children}
        </ContextTask.Provider>
    )
}


