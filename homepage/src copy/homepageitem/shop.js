import React,{Component} from 'react';
import './shop.css'
class Shop extends Component{
    state={
        content:['ABOUT SHOP','SHOP','ABOUT 二手卖出']
    }
    render(){
        return(
        <div onMouseLeave={this.props.toggleHoverState2} className ='shidepicture jc--center1'>
        {
            this.state.content.map((data,index)=>{
                return <div key={index}>{data}</div>
                })
        }
        </div>
        ) 
    }
}
export default Shop