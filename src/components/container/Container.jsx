
import { useState } from "react";
import ToDoList from "../toDoList/ToDoList";
import Tasks from "../tasks/Tasks";
import Filters from "../filters/Filters";
import { FILTERS } from "../../constants/filters";

const Container =()=>{
    const [todoList,setTodoList]=useState([]) 
    const [filterActive,setFilterActive]=useState(0)
    console.log(todoList)
    const filteredTasks =filterTask(todoList,filterActive)
    return (
        <>
            <div>
                <ToDoList todoList={todoList} setTodoList={setTodoList}/>
                <Tasks todoList={filteredTasks} setTodoList={setTodoList} />
                <Filters todoList={todoList} filterActive={filterActive} setFilterActive={setFilterActive}/>
            </div>
        </>
    )
}

const filterTask=(todoList,filter)=>{
    if(filter===FILTERS.ALL) return [...todoList]
    if(filter===FILTERS.ACTIVE) return todoList.filter(task=>!task.completed)
    if(filter===FILTERS.COMPLETED) return todoList.filter(task=>task.completed)


}


export default Container