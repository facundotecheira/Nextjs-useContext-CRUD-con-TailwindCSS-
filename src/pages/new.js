import { useState,useEffect } from "react"
import Layout from "../components/Layaout"
import { useTasks } from "../context/taskContext"
import {useRouter} from 'next/router'
const TaskFormPage = () => {

    const {createTask,updateTask,tasks} = useTasks()
    const {push,query} = useRouter()

    useEffect(()=>{
        if(query.id){
            const taskFound = tasks.find(task=> task.id == query.id)
            setTask({title:taskFound.title,description:taskFound.description})
           
        }
    },[])

    const [task,setTask] = useState({
        title:'',
        description: ''
    })




    const handlebar = (e)=>{
        const {name,value} = e.target 
        
        setTask({...task,[name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (!query.id){
            
            createTask(task.title,task.description)
            push('/')
        }else{
            updateTask(query.id,task)
            push('/')
        }
    }

    return (
        <Layout>
           
            <form onSubmit={handleSubmit}>
                <h1>{query.id ? 'Edit A Task':'Add A task'}</h1>
                <input
                    type="text"
                    name="title"
                    placeholder="Write a title"
                    className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
                    value={task.title}
                    onChange={handlebar}
                />
                <textarea
                name = 'description'
                rows="2"
                placeholder="Write a drescription"
                className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
                value={task.description}
                onChange={handlebar}
                />

                <button
                 className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30" 
                 disabled ={!task.title}>
                    Save
                </button>
            </form>
           
            
        </Layout>
    )
}

export default TaskFormPage