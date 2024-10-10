import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import {FC} from 'react';

export type Data = {id: string | number, title: string, description: string}

interface DefaultTasks {
    tasks: Data[];
    updateTask(task: Data): void;
    removeTask(id: Data['id']): void;
}

export const ToDoContext = createContext<DefaultTasks>({
    tasks: [],
    updateTask() {},
    removeTask() {}
})

interface Props{
    children: ReactNode;
}
const TASKS = 'tasks'
const ToDoProvider: FC<Props> = ({children}) =>{
    const [tasks, setTasks] = useState<Data[]>([]);

   const updateLs = (data: Data[]) =>{
    localStorage.setItem(TASKS, JSON.stringify(data))
   }

    const updateTask = (task: Data) =>{
        // const newTask = [...tasks, task]
        // setTasks(newTask)
        // localStorage.setItem(TASKS, JSON.stringify(newTask))
        
        setTasks((oldData) =>{
         const newTask = [...oldData, task]
         updateLs(newTask)
            return newTask
        })
    }

    const removeTask = (id: Data['id']) =>{
       const newTask = tasks.filter((task) => task.id !== +id)
       setTasks(newTask)
       updateLs(newTask)
    }
    
    useEffect(() =>{
        const result = localStorage.getItem(TASKS)
        if(result){
            setTasks(JSON.parse(result))
        }
    }, [])

return <ToDoContext.Provider value={{tasks, updateTask, removeTask}}>
    {children}
</ToDoContext.Provider>;
};

export const useTasks = () => {
    return useContext(ToDoContext);
}

export default ToDoProvider;