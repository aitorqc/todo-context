import React, { useContext } from 'react'
import { useState } from 'react';
import { ContextTask } from '../context/GlobalContext';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { IoMdContrast } from 'react-icons/io';

export default function TaskForm() {
    const { state, addTask, editTask } = useContext(ContextTask);
    const navigate = useNavigate();
    const param = useParams();
    const [task, setTask] = useState({
        title: "",
        description: "",
        done: false
    });

    useEffect(() => {
        if(param.id){
            const itemID = state.find((item) => item.id === param.id);
            setTask({
                title: itemID.title,
                description: itemID.description,
                done: itemID.done
            })
        }
    }, [param.id, state])

    function handdleSubmit() {
        if (param.id) {
            editTask(param.id, task);
        } else {
            addTask(task);
        }
        navigate("/");
    }

    return (
        <div className="flex justify-center items-center h-2/4">
            <form className='bg-gray-900 p-10'>
                <h2 className='mb-7 text-3xl'>{param.id ? "Edit Task" : "Add Task"}</h2>
                <div className="mb-5">
                    <input type="text" name='title' placeholder='Write a Title' className='py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full'
                        value={task.title}
                        onChange={(e) => setTask({ ...task, title: e.target.value })} />
                </div>
                <div className="mb-5">
                    <textarea name='description' placeholder='Write a Description' className='py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full'
                        value={task.description}
                        onChange={(e) => setTask({ ...task, description: e.target.value })} />
                </div>
                <button type='button' className='bg-green-600 w-full hover:bg-green-400 py-2 px-4 mt-5' onClick={handdleSubmit}>
                    {param.id ? "Edit" : "Create Task"}
                </button>
            </form>
        </div >
    )
}
