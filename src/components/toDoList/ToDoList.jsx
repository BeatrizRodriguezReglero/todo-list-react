import { v4 } from "uuid";


const ToDoList=({todoList,setTodoList})=>{
    return(
        <>
            <div>

                <form onSubmit={(event)=>handleSubmit(event,todoList,setTodoList)}>

                    <input type="text" name='task'/>
                </form>
                
                
                
            </div>
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