import { useState } from "react"
import './App.css'
import { TiTickOutline, TiDeleteOutline } from "react-icons/ti";

function App() {
  const [currentTask, setCurrentTask] = useState("")
  const [task, setTask] = useState([])

  const onChageTask = (event) => {
    setCurrentTask(event.target.value)
  }
  const onAddTask = () => {
    setTask([
      ...task,
      { text: currentTask,
       onCompleted:false
     }
    ])
  }
  const onCompletTask =(Index)=>{
    const newTasks=[...task];
    newTasks[Index].onCompleted=!newTasks[Index].onCompleted;
    setTask(newTasks)
  }
  const onDeleteTask=(Index)=>{
    const newTasks=[...task]
    newTasks.splice(Index ,1)
    setTask(newTasks)
  }
    
  return (

    <div className="App">
      
      <h1 className="todo">TODO APPLICATION</h1>

      
      <div className="container">
        <input
          type="text"
          placeholder="EnterText"
          onChange={onChageTask}
          className="input"
        />

        <button className="btn" onClick={onAddTask}>add</button>

          <div>
            <ul>
              {task.map((task, taskIndex) => (
                <li className="task" key={taskIndex}><p className={task.onCompleted?"completed":""}>  {task.text}</p>

                  <div>
                    <TiTickOutline className="a1"  onClick={()=>{onCompletTask(taskIndex)}} />
                    <div>
                    < TiDeleteOutline className="a2" onClick={()=>{onDeleteTask(taskIndex)}} />
                  </div>
                  

                  </div>
                </li>

              )
              )
              }
            </ul>
          </div>
        

      </div>
      <div>
        <marquee className="m" behavior="scroll" direction="right">
          <img className="img" src="https://biiitup.com/biiitup-social-preview.png" alt="" />
        </marquee>
        <marquee className="mq" behavior="scroll" direction="rieght">
          <h1 className="h1">Bi<span className="s1">i</span>iTU< span className="s2">P</span></h1>
          
          
        </marquee>
        </div>



    </div>




  )
};
export default App;

