import  * as actions from "./actionTypes"




export const bugAdded = (discription)=>{
    return {
        type:actions.BUG_ADDED,
        payload:{
          discription:discription
        }
      }
}



export const bugResolved = (id)=>{
    return {
        type:actions.BUG_RESOLVED,
        payload:{
          id:id
        }
      }
}







export const bugRemoved = (id)=>{
    return {
        type:actions.BUG_REMOVED,
        payload:{
          id
        }
      }
}