import{MOUSEL, SERVICE, HOWTO, EXAMPLE, SHOP} from './actiontypes'

const initialState={
    isHovering:false,
    OisHovering:false,
    HisHovering:false,
    EisHovering:false,
    SisHovering:false,
 

}
export function update(state=initialState,action){
    switch(action.type){
        case MOUSEL:
            return Object.assign({},state,{
                isHovering: !action.data})
        case SERVICE:
            return Object.assign({},state,{
                OisHovering: !action.data})
        case HOWTO:
            return Object.assign({},state,{
                HisHovering: !action.data})         
        case EXAMPLE:
            return Object.assign({},state,{
                EisHovering: !action.data}) 
        case SHOP:
            return Object.assign({},state,{
                SisHovering: !action.data})        
        default:
            return state
    }
}