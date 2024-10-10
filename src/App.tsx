import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import SingleTodo from "./pages/SingleTodo";
import ToDoProvider from "./context/ToDoProvider";

// justify-content is from left to right
// items-center is centering the items from top to bottom

const App: FC = () => {

  return (
    <ToDoProvider>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/:todo_id" element={<SingleTodo/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </ToDoProvider>
  );
};
export default App;

// <form
//       onSubmit={(e) => {
//         e.preventDefault()
//         console.log(title, description)
//       }}
//        className="space-y-6 rounded shadow-md bg-white w-96">
//         <h1 className="text-2xl text-center">ToDo Form {title}</h1>
//         <div>
//           <input
//             name="title"
//             className="p-2 rounded outline-none border border-gray-500 w-full"
//             type="text"
//             placeholder="Add your todo here"
//             value={title}
//             onChange={(e) => {
//               setTitle(e.target.value);
//             }}
//           />
//         </div>
//         <div>
//           <textarea
//             name="description"
//             className="p-2 rounded outline-none border border-gray-500 w-full"
//             placeholder="Describe your todo here"
//             value={description}
//             onChange={(e) => {
//               setDescription(e.target.value);
//             }}

//           />
//         </div>
//         <div>
//           <button className="p-2 text-center rounded-lg outline-none border text-white bg-gray-500 w-full">
//             Submit
//           </button>
//         </div>
//       </form>
