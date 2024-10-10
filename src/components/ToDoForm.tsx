import { FC, useState } from "react"
import { Data } from "../context/ToDoProvider";


interface Props {
    onSubmit?(data: Data): void
}

const ToDoForm: FC<Props> = ({onSubmit}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
  
  return <form
  onSubmit={ (e) =>{
    e.preventDefault() // prevents the page from refreshing
    setError("")
    
    if(!title.trim() || !description.trim()) return setError("Please fill in all fields")
    if(onSubmit) onSubmit({id: Date.now(), title, description})
        setTitle("")
        setDescription("")
  } }

   className="space-y-6 rounded shadow-md bg-white w-96">
    <h1 className="text-2xl text-center">ToDo Form </h1>
    <p className="text-red-500">{error}</p>
    <div>
      <input
        name="title"
        className="p-2 rounded outline-none border border-gray-500 w-full"
        type="text"
        placeholder="Add your todo here"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
    </div>
    <div>
      <textarea
        name="description"
        className="p-2 rounded outline-none border border-gray-500 w-full"
        placeholder="Describe your todo here"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}

      />
    </div>
    <div>
      <button className="p-2 text-center rounded-lg outline-none border text-white bg-gray-500 w-full">
        Submit
      </button>
    </div>
  </form>
}

export default ToDoForm