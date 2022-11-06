import { Routes, Route, Navigate } from "react-router-dom";
import GlobalContext from './context/GlobalContext';

import Heading from "./components/Heading";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <GlobalContext>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <Heading></Heading>
          <Routes>
            <Route exact path="/" element={<TaskList />}></Route>
            <Route exact path="/add" element={<TaskForm />}></Route>
            <Route exact path="/edit/:id" element={<TaskForm />}></Route>
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </GlobalContext>
  );
}

export default App;
