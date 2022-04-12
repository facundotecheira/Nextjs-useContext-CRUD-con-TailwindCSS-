import { useTasks } from "../context/taskContext"
import Layout from "../components/Layaout"
import { VscTrash, VscTasklist } from "react-icons/vsc";
import {useRouter} from "next/router"
const Index = () => {

  const { tasks,deleteTask } = useTasks()

  const {push} = useRouter()

  return (
    <>
      <Layout>
        {
          tasks.length === 0 ? (<h2>There are no task</h2>) :
            (
              <div>
                {tasks.map((task) => {
                  return (
                    <div className="bg-gray-700 hover:bg-gray-600 cursor-pointer flex justify-between px-20 py-5 m-2 "
                    key={task.id}
                    onClick={()=>push(`edit/${task.id}`)}
                    >
                      <div>
                        <h1 className="font-bold">{task.title}</h1>
                        <p className="text-gray-300">{task.description}</p>
                      </div>
                      <div>
                        <div>

                        <button
                          className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center"
                         onClick={(e) => {
                           e.stopPropagation()
                           deleteTask(task.id)
                           push('/')

                         } }
                        >
                          <VscTrash className="mr-2" /> Delete
                          </button>
                        </div>
                      </div>
                    </div>

                  )
                })}
              </div>
            )
        }
      </Layout>

    </>
  )
}

export default Index