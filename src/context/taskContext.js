import {createContext, useContext,useState} from 'react'

export const TaskContext = createContext()

export const useTasks = ()=> useContext(TaskContext)
    

export const TasksProvider = ({children}) =>{
    
    const [tasks,setTasks] = useState([{id:1,title:'first title',description:'firt task'}])

    const createTask = (title,description) =>{
        setTasks([...tasks,{title,description,id: tasks.length !== 0 ? tasks[tasks.length-1].id+1:1}])
    }

    const updateTask = (id,updatedTask) =>{
        setTasks([...tasks.map((task)=> task.id == id ? {...task,...updatedTask}:task),])
    }

    const deleteTask = id =>{
        setTasks([...tasks.filter(task => task.id !== id)])
    }

    return <TaskContext.Provider value={{tasks,createTask,updateTask,deleteTask}}>{children}</TaskContext.Provider>

}