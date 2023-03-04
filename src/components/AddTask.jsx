import react from 'react';

const AddTask = ({task ,setTask,todo,setTodo}) => {
const submit = (e) => {
    e.preventDefault();
    setTodo([...todo,{task,completed:false}]);
}
const taskChange = (e)=> {
    setTask(e.target.value)
}
    return(
        <div>
            <form onSubmit={submit}>
                <label htmlFor="task">Add Task</label>
                <input type="text" value={task.task} onChange={taskChange}/><br />
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddTask