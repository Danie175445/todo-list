import React from "react";

const Task = ({task,setTodo,todo,style,setStyle,setTask}) =>{
const handeltoggelcomplete =(index)=>{
    const updatedTask = todo.map((task,i)=>{
        if(index == i ){
            task.completed =! task.completed;
        }
        return task;
    })
    setTask(updatedTask);
}
const handelDelete =(index)=>{
    // console.log(index)
    const filterTask =todo.filter( (value,i) => i !== index)
    setTodo(filterTask);
    // console.log(filterTask)
    // console.log(todo)
    }
const text ={
    textDecoration: style
}

    return(
        <div >
            {
                todo.map((taskItem,i)=>(
                    // console.log(i),
                    <p key={i} style={{textDecoration:taskItem.completed ? 'line-through':"none"}}>{taskItem.task}
                    <input type="checkbox" onChange={(event)=>{
                        handeltoggelcomplete(i)
                    }} checked={taskItem.completed} />
                    <button onClick={()=>handelDelete(i)}>Delete</button></p>
                ))
            }
        </div>
    )
}
export default Task