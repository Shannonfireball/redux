
// import  {BUG_ADDED,BUG_REMOVED} from "./actionTypes"
import  * as actions from "./actionTypes"






let lastId = 0;
 const reducer = (state = [] ,action) =>{


    switch(action.type){
        case actions.BUG_ADDED:
            

            return [
                ...state,
                {
                    id:++lastId,
                    discription:action.payload.discription,
                    resolved:false
                }
        
            ];
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.playload.id)
            
        case actions.BUG_RESOLVED:
            return state.map((bug)=>
            bug.id !== action.payload.id ? bug : { ...bug, resolved:true } );

        default:
            return state;
    }    
}

export default reducer