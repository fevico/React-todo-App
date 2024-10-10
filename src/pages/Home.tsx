import { FC } from "react";
import ToDoForm from "../components/ToDoForm";
import ToDoItem from "../components/ToDoItem";
import { Link } from "react-router-dom";
import { useTasks } from "../context/ToDoProvider";

interface Props {}

const Home: FC<Props> = () => {
  const {updateTask, tasks} = useTasks();

  return (
    <div className="flex justify-center items-center h-screen">
      <ToDoForm
        onSubmit={updateTask}
      />
      <div className="ml-6">
        {tasks.map((task, index) => {
          return(
            <Link key={index} to={`/${task.id}`}>
                <ToDoItem key={index} title={task.title} />
            </Link>
          )
        })}
      </div>
    </div>
  );
};

export default Home;
