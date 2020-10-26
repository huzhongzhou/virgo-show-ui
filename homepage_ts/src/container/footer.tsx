import React,{Component}from 'react'
import { connect } from 'react-redux'
import {Ichangehover,changehover} from '../redux/actions/actions'
import {AppState} from '../redux/reducers/RootReducer'
import User from './user'


interface Iprops {
    changehover:(isHovering:boolean)=>Ichangehover 
    isHovering:boolean
}
class Footer extends Component <Iprops>{
    toggleHoverclose=()=>{
        this.props.changehover(false)
    }
    render(){
        return(
        <div className='border ' onMouseEnter={this.toggleHoverclose}>
           
            <div className="flex-container4 ">{/* 4 2*/}
                <div className="row"></div>
                <div className=' fg-4'></div>
                <div className='dot'></div>
                <div className=' fg-4'></div>
                <div className="row"></div>
            </div>

      <div className='flex-container ai--end'>   {/* 5 6*/}
        <div className="flex-container5 jc--center "> {/* 6 3*/}
            <div>App</div>
            <div>Guide&Legals</div>
            <div>contact</div>
            <div className='fg-4'>FAQs</div>
            <div className='fg-6'>Privacy Policy</div>
            <div>Our location</div>
            <div>商业合作</div>
        </div>
        <User></User>
      </div>
      

      <div className="flex-container6 jc--end">{/* 7 8*/}
         <div>网页版暂时只提供English，如需提供其他语言请下载App</div>
      </div>

      </div>
        )
    }
}
const mapStateToProps = (state: AppState) => {
    return {isHovering: state.localeReducer.isHovering};
  };
  const mapDispatchToProps = {
    changehover
  };
export default connect(
    mapStateToProps, mapDispatchToProps
)(Footer)