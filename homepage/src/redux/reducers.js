import{CHANGEHOVER, CHANGEINDEX} from './actiontypes'

const initialState={
    isHovering:false,
    index:0,
 

}
export function update(state=initialState,action){
    switch(action.type){
        case CHANGEHOVER:
            return Object.assign({},state,{
                isHovering: action.data})  
        case CHANGEINDEX:
            return Object.assign({},state,{
                index: action.data})                    
        default:
            return state
    }
}