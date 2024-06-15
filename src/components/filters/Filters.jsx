import { FILTERS } from "../../constants/filters"

const Filters=({setFilterActive})=>{
    return(<>
        <button onClick={()=> setFilterActive(FILTERS.ALL)}>All</button>
        <button onClick={()=>setFilterActive(FILTERS.ACTIVE)}>Active</button>
        <button onClick={()=>setFilterActive(FILTERS.COMPLETED)}>Completed</button>
    
    </>)
}


export default Filters