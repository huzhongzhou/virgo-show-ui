import {CHANGEHOVER,CHANGEINDEX} from '../types/actiontype'

export interface Ichangehover{
    isHovering:boolean;
    type:CHANGEHOVER;
}
export interface Ichangeindex{
    index:number;
    type:CHANGEINDEX;
}
export const changehover =(isHovering:boolean):Ichangehover=>({
    type:CHANGEHOVER,
    isHovering:isHovering
})
export const changeindex =(index:number):Ichangeindex=>({
    type:CHANGEINDEX,
    index:index
})
export type Localaction =Ichangehover |Ichangeindex