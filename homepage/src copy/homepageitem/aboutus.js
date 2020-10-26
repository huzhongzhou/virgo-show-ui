import React,{Component} from 'react';
import './aboutus.css'
class About extends Component{
    state={
        content:['COMPANY PROFILE','OUR TECHNOLOGY','CONTACT US','OUR LOCATION']
    }

    render(){
        return(

        <div  onMouseLeave={this.props.toggleHoverState} className ='hidepicture jc--center1'>
        {
            this.state.content.map((data,index)=>{
            return <div key={index}>{data}</div>
            })
        }
        </div>
        )
        
    }
}
export default About