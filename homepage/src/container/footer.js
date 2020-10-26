import React,{Component}from 'react'
import { connect } from 'react-redux'
import { changehover } from '../redux/actions'
import User from './user'

class Footer extends Component{
    toggleHoverclose=()=>{
        this.props.changehover(false)
    }
    render(){
        return(
        <div className='border ' onMouseEnter={this.toggleHoverclose}>
            <div className="flex-container2 ">
                <div className="row"></div>
                <div className=' fg-4'></div>
                <div className='dot'></div>
                <div className=' fg-4'></div>
                <div className="row"></div>
            </div>

      <div className='flex-container6 ai--end'>   
        <div className="flex-container3 jc--center ">
            <div>App</div>
            <div>Guide&Legals</div>
            <div>contact</div>
            <div className='fg-7'>FAQs</div>
            <div className='fg-6'>Privacy Policy</div>
            <div>Our location</div>
            <div>商业合作</div>
        </div>
        <User></User>
      </div>

      <div className="flex-container8 jc--end">
         <div>网页版暂时只提供English，如需提供其他语言请下载App</div>
      </div>
      </div>
        )
    }
}
export default connect(
    state => ({isHovering:state.isHovering, index: state.index }),
    { changehover }
)
(Footer)