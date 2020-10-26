import React,{Component} from 'react';
import './example.css'
class Example extends Component{

    render(){
        return(
        <div onMouseLeave={this.props.toggleHoverState3} className ='hidepictureex jc--center1  '>
            <div className='example1 '>
                <div className='efg1 ai--center jc--center4'><div>SHOES</div></div>
                <div className='efg1 ai--center jc--center4'><div>BAGS</div></div>
                <div className='efg4 ai--center jc--center4'><div>服饰</div></div>
                <div className='efg1 ai--center jc--center4'><div>手套</div></div>
                <div className='efg1 ai--center jc--center4'><div>帽子</div></div>
                <div className='efg1 ai--center jc--center4'><div>皮带</div></div>
                <div className='efg1 ai--center jc--center4'><div>手表</div></div>
                <div className='efg1 ai--center jc--center4'><div>饰品</div></div>
            </div>
            <div className='example1'>
                <div className='efg2 ai--center jc--center4'><div>座椅</div></div>
                <div className='efg2 ai--center jc--center4'><div>...</div></div>
            </div>
        </div>
        )
    }
}
export default Example