import React from 'react'
import { useState } from 'react'
import uniqid from 'uniqid'

const Tareas = () => {
     
    const [task,setTask] = useState('')
    const [list,setList] = useState([])
    const [edit,setEditTask] = useState(false)
    const [id,setId] = useState('')

    const addTask = (event)=> {
        event.preventDefault()
        const newTask = {
            id:uniqid(),
            taskName: task
        }
        setList([...list,newTask])
        setTask('')
    }

    const deleteTask = (id) => {
        const newTask = list.filter ( item => item.id !== id)
        setList(newTask)
    }

    const editTask = (item) => {
        setEditTask(true)
        setTask(item.taskName)
        setId(item.id)

    }

    const editlist = (e)=>{
        e.preventDefault()
        const newList = list.map(item => item.id === id ? {id:id, taskName:task} : item )
        setList(newList)
        setEditTask(false)
        setTask('')

    }


    return (
        <div>
        <h1>TO DO LIST</h1>
        <div className="container">
            <div className="row">
                <form className="form-group" onSubmit={edit? editlist : addTask} >
                    <h2>Enter Task's</h2>
                    <input onChange={(event)=>{setTask(event.target.value)}} value = {task}  type="text" placeholder="ex: Paying taxes" required/>
                    <input className="btn btn-primary block m-3" type="submit" value={edit? "edit" : "Add"}/>
                </form>
            </div>
            <div className="row">
                <h2>To Do</h2>  
                <ul>
                    {     
                        list.map(item => 
                            <li key={item.id}  className="list-group-item m-1 p-4">{item.taskName}
                                <button onClick= {()=> {deleteTask(item.id)}} className="btn btn-danger float-end">Delete</button>
                                <button onClick= {()=> {editTask(item)}} className="btn btn-warning float-end">edit</button>
                            </li>
                        )
                    }
                </ul>
      
            </div>
        </div>
        </div>
    )
}

export default Tareas



