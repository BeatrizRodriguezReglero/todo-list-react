import { StyledCheckboxContainer, StyledContainerTask, StyledTask, StyledTaskDelete } from "./tasks.styles";

const Tasks =({todoList, setTodoList})=>{
    return(
        <>
            {todoList.map(task=>(
                <StyledContainerTask key={task.id}> 
                    <StyledCheckboxContainer>
                       <input onChange={(event)=>completeTask(event.target.checked,todoList,setTodoList,task.id)} type="checkbox" checked={task.completed}/>
                        <StyledTask checked={task.completed}>{task.task}</StyledTask> 
                    </StyledCheckboxContainer>
                    
                    <StyledTaskDelete onClick={()=>deleteTask(todoList,setTodoList,task.id)}>X</StyledTaskDelete>
                </StyledContainerTask>
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