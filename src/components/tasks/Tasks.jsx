const Tasks =({todoList, setTodoList})=>{
    return(
        <>
            {todoList.map(task=>(
                <div key={task.id}>
                    <input onChange={(event)=>completeTask(event.target.checked,todoList,setTodoList,task.id)} type="checkbox" checked={task.completed}/>
                    <span>{task.task}</span>
                    <button onClick={()=>deleteTask(todoList,setTodoList,task.id)}>X</button>
                </div>
            )
               
            )}
        </>
    )

}

const completeTask =(completed, todoList,setTodoList,id)=>{
    const updatedTasks = todoList.map(task=>{
            if(task.id===id){
                task.completed=completed;
            }
            return task;
    })

    setTodoList(updatedTasks);


};

const deleteTask =(todoList,setTodoList, id)=>{
    const updatedTasks = todoList.filter(task=>task.id!==id)
    setTodoList(updatedTasks)

}

export default Tasks