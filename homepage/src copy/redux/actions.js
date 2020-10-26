import {MOUSEL, SERVICE, HOWTO, EXAMPLE, SHOP} from './actiontypes'


export const mousel =(hover)=>({
    type:MOUSEL,data:hover
})
export const service =(hover)=>({
    type:SERVICE,data:hover
})
export const hto =(hover)=>({
    type:HOWTO,data:hover
})
export const exm =(hover)=>({
    type:EXAMPLE,data:hover
})
export const shop =(hover)=>({
    type:SHOP,data:hover
})