import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'


interface Iprops{
    value:any;
    toggleHoverclose:()=>void
}
class About extends Component<Iprops>{
    render(){
        return(
        <div onMouseLeave={this.props.toggleHoverclose} className ='hidepicture jc--center1' style={{top:this.props.value.top}}>     
        {
            Object.keys(this.props.value.item).map((data,index)=>{
            return <NavLink to={this.props.value.item[data].itemrouter} key={index}>{this.props.value.item[data].itemname}</NavLink>
            })
        }
        </div>
        )
        
    }
}
export default  About