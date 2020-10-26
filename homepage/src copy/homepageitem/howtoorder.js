import React,{Component} from 'react';
import './howtoorder.css'
class HTO extends Component{
    state={
        content:['PROCESS OF ORDER','DELIVERY AND PICK UP','PROCESSING TIME','PAYMENT METHOD','POMOTION']
    }

    render(){
        return(
        <div onMouseLeave={this.props.toggleHoverState4} className ='hidepicturehto jc--center1'>
       {
            this.state.content.map((data,index)=>{
            return <div key={index}>{data}</div>
            })
       }
        </div>
        )
        
    }
}
export default HTO