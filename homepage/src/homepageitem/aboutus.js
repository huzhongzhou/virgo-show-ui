import React,{Component} from 'react';
import './aboutus.css'
class About extends Component{
    render(){
        return(
        <div onMouseLeave={this.props.toggleHoverclose} className ='hidepicture jc--center1' style={{top:this.props.value.top}}>     
        {
            this.props.value.item.map((data,index)=>{
            return <div key={index}>{data}</div>
            })
        }
        </div>
        )
        
    }
}
export default About