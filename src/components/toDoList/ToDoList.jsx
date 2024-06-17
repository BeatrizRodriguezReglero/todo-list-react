import { v4 } from "uuid";
import { StyledForm, StyledInput } from "./todoList.styles";


const ToDoList=({todoList,setTodoList})=>{
    return(
        <>
                <StyledForm onSubmit={(event)=>handleSubmit(event,todoList,setTodoList)}>

                    <StyledInput type="text" name='task' placeholder="Create a new todo"/>
                </StyledForm>
                
        </>
    )

}

const handleSubmit =(event,todoList,setTodoList)=>{
    event.preventDefault();
    const newTask= {
        id:v4(),
        task:event.target.task.value,
        completed:false
    }
    setTodoList([...todoList,newTask])
    console.log(newTask);
    event.target.reset();

}
export default ToDoList