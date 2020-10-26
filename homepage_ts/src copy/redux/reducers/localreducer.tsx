import {HomepageControl} from '../types/type'
import {Localaction} from '../actions/actions'
import {CHANGEHOVER,CHANGEINDEX} from '../types/actiontype'
const initialstate:HomepageControl={
    index:0,
    isHovering:false,
}

const localeReducer =(state=initialstate,action:Localaction):HomepageControl=>{
    switch (action.type){
        case CHANGEHOVER:
            return{...state,isHovering:action.isHovering};
        case CHANGEINDEX:
            return{...state,index:action.index}
        default:
            return{...state,index:0};
    }
}
export default localeReducer;