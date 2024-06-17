import { FILTERS } from "../../constants/filters"
import { StyledFilterButtons, StyledFilterContainer } from "./filters.styles"

const Filters=({setFilterActive})=>{
    return(<>
        <StyledFilterContainer>
            <StyledFilterButtons onClick={()=> setFilterActive(FILTERS.ALL)}>All</StyledFilterButtons>
            <StyledFilterButtons onClick={()=>setFilterActive(FILTERS.ACTIVE)}>Active</StyledFilterButtons>
            <StyledFilterButtons onClick={()=>setFilterActive(FILTERS.COMPLETED)}>Completed</StyledFilterButtons>
        </StyledFilterContainer>
        
    
    </>)
}


export default Filters