import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdAdd } from "react-icons/io";

export default function Heading() {
    return (
        <div>
            <div className="flex justify-center mb-10">
                <Link to="/">
                    <h5 className="text-gray-100 font-bold text-2xl">Task App</h5>
                </Link>
                <div className="flex-grow text-right px-4 py-2 m-2">
                    <Link to="/add">
                        <button className='bg-green-600 hover:bg-green-400 text-white font-semibold py-2 px-4 rounded inline-flex items-center'>
                            <IoMdAdd className='text-xl'/>
                            Add Task
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
