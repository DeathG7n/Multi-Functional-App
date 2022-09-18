import React from 'react'
import ToDo  from './ToDo'

export default function ToDos() {
    const [task, setTask] = React.useState({
        todo : "",
        isDone : false
    })
    const [tasks, setTasks] = React.useState([])
    

    function handleChange(e){
        const {name, value, type, checked} = e.target
        setTask(prevState =>({
            ...prevState,
            [name] : type ==="checkbox" ? checked : value
        }))
    }

    function addTask(e){
        e.preventDefault()
        if(task.todo !== ""){
            setTasks(prevState => [...prevState, {
                todo : task.todo,
                isDone : task.isDone
            }])
            setTask(prevState =>({
                ...prevState,
                todo: ""
            }))
        } else{
            return
        }
    }
    
    const markTask = i => {
        const newTask = [...tasks]
        newTask[i].isDone = !newTask[i].isDone
        setTasks(newTask)
    }

    function clearTask (e){
        e.preventDefault()
        setTask({})
        setTasks([])
    }
    

    const newTasks = tasks.map((i, id) =>{
        return(
            <ToDo key={id} id={id} tasks={i}  markTask={markTask}/>
        )
    })
    
  return (
    <div id='todo'>
        <h1>To Do List</h1>
            <form id='todo-form'>
                <input type="name" name='todo' value={task.todo} required onChange={handleChange} id="todo-input"/>
                <button onClick={addTask} id="todo-button">Add Task</button> <button onClick={clearTask} id="todo-button">Clear Task</button>
            </form>
            {newTasks}
    </div>
  )
}

