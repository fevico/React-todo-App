import { FC } from "react";

interface Props {
  title: string;
}

const ToDoItem: FC<Props> = ({ title }) => {
  return (
    <div className="w-full p-2 text-lg">
      <p>{title}</p>
    </div>
  );
};

export default ToDoItem;
