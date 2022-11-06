import React, { useContext } from 'react'
import { ContextTask } from '../context/GlobalContext';
import { Link } from 'react-router-dom';

export default function TaskList() {
    const { state, removeTask } = useContext(ContextTask);

    return (
        <div className="flex justify-center">
            <div className="w-10/12">
                {
                    state.sort((a, b) => { return a.title < b.title }).map((task) => (
                        <div className="relative bg-gray-900 p-5 text-white shadow-lg mb-4 flex justify-between" key={task.id}>
                            <div className='mr-4'>
                                <div className='bg-slate-500 py-1 px-2'>{task.id}</div>
                                <h1 className='uppercase font-bold py-4'>{task.title}</h1>
                                <p className='font-serif'>{task.description}</p>
                            </div>
                            <div className='flex items-start'>
                                <Link className='bg-green-600 hover:bg-green-500 py-2 px-4 mr-2 rounded'
                                    to={`/edit/${task.id}`}>Edit</Link>
                                <button className='bg-red-600 hover:bg-red-500 py-2 px-4 mr-2 rounded' onClick={() => removeTask(task)}>Delete</button>
                            </div>
                            <button className='absolute bottom-0 right-0 bg-purple-600 hover:bg-purple-500 py-2 px-4 mt-2' onClick={() => removeTask(task)}>{task.done ? "Undone" : "Done"}</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
