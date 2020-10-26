import React,{Component} from 'react';
import About from './homepageitem/aboutus'
import Service from './homepageitem/ourservice'
import HTO from './homepageitem/howtoorder'
import Example from './homepageitem/example'
import{connect} from 'react-redux'
import{mousel,service,hto,exm,shop} from './redux/actions'
import Shop from './homepageitem/shop'
import './App.css';

class App extends Component {
 
  toggleHoverState2=()=>{
    const {OisHovering,isHovering,HisHovering,EisHovering,SisHovering}=this.props
    this.props.shop(SisHovering)
    if(isHovering){
      this.props.mousel(isHovering)
    }if(OisHovering){
      this.props.service(OisHovering)
    }if(HisHovering){
      this.props.hto(HisHovering)
    }if(EisHovering){
      this.props.exm(EisHovering)
    }
  }
  toggleHoverState5=()=> {
    const {OisHovering,isHovering,HisHovering,EisHovering,SisHovering}=this.props
    console.log(OisHovering)
    this.props.service(OisHovering)
    if(isHovering){
      this.props.mousel(isHovering)
    }if(HisHovering){
      this.props.hto(HisHovering)
    }if(EisHovering){
      this.props.exm(EisHovering)
    }if(SisHovering){
      this.props.shop(SisHovering)
    }
  }
  toggleHoverState3=()=> {
    const{isHovering,OisHovering,HisHovering,EisHovering,SisHovering} =this.props
    this.props.exm(EisHovering)
    if(isHovering){
      this.props.mousel(isHovering)
    }if(OisHovering){
      this.props.service(OisHovering)
    }if(HisHovering){
      this.props.hto(HisHovering)
    }if(SisHovering){
      this.props.shop(SisHovering)
    }
  }
  toggleHoverState4=()=> {
   const{isHovering,OisHovering,HisHovering,EisHovering,SisHovering} =this.props
   this.props.hto(HisHovering)
   if(isHovering){
    this.props.mousel(isHovering)
  }if(OisHovering){
    this.props.service(OisHovering)
  }if(EisHovering){
    this.props.exm(EisHovering)
  }if(SisHovering){
    this.props.shop(SisHovering)
  }
  }
  cleanhover=() =>{
    const {isHovering,OisHovering,HisHovering,EisHovering,SisHovering}=this.props
    if(isHovering){
      this.props.mousel(isHovering)
    }if(OisHovering){
      this.props.service(OisHovering)
    }if(HisHovering){
      this.props.hto(HisHovering)
    }if(EisHovering){
      this.props.exm(EisHovering)
    }if(SisHovering){
      this.props.shop(SisHovering)
    }
  }

  toggleHoverState=()=> {
    const {isHovering,OisHovering,HisHovering,EisHovering,SisHovering}=this.props
    console.log(isHovering)
    this.props.mousel(isHovering)
    if(OisHovering){
      this.props.service(OisHovering)
    }if(HisHovering){
      this.props.hto(HisHovering)
    }if(EisHovering){
      this.props.exm(EisHovering)
    }if(SisHovering){
      this.props.shop(SisHovering)
    }
  }
  render(){
  return (
    
    <div className="body">
      <div className="flex-container1 jc--center">
        <img src='/images/logo.jpg' alt=''></img>
      </div>
      <div className="flex-container6 jc--end"><i className="fas fa-search icon1"></i></div>
      <div className="flex-container5  jc--center">
        <img className="image-size"src="https://www.chanel.com/i18n/en_WW/slides/1600_CH26_INSIDE_EN_1019.jpg"alt=''></img>
      </div>
       
      {this.props.SisHovering?<Shop toggleHoverState2={this.toggleHoverState2}></Shop>:''}
      {this.props.EisHovering?<Example toggleHoverState3={this.toggleHoverState3}></Example>:''}
      {this.props.HisHovering?<HTO toggleHoverState4={this.toggleHoverState4}></HTO>:''}
      {this.props.OisHovering?<Service toggleHoverState5={this.toggleHoverState5}></Service>:''}  
      {this.props.isHovering?<About toggleHoverState={this.toggleHoverState}></About>:''}

      <div  className="flex-container jc--center">
         <div onMouseEnter={this.toggleHoverState}   className='fg-3' >ABOUT US</div>
         <div onMouseEnter={this.toggleHoverState5}  className='fg-2'>OUR SERVICE</div>
         <div onMouseEnter={this.toggleHoverState4}   className='fg-2'>HOW TO ORDER</div>
         <div className='fg-1'>PRICE</div>
         <div onMouseEnter={this.toggleHoverState3}  className='fg-1'>EXAMPLE</div>
         <div onMouseEnter={this.toggleHoverState2} className='fg-1'>SHOP</div>
      </div>

      <div onMouseEnter={this.cleanhover}className='border '>
      <div className="flex-container2 ">
       <div className="row"></div>
       <div className=' fg-4'></div>
       <div className='dot'></div>
       <div className=' fg-4'></div>
       <div className="row"></div>
      </div>




{/* 
      <div className="flex-container jc--center ">
         <div onMouseEnter={()=>{this.toggleHoverState(1)}} className='fg-3' >ABOUT US</div>
         <div onMouseEnter={()=>{this.toggleHoverState(2)}} className='fg-2'>OUR SERVICE</div>
         <div onMouseEnter={()=>{this.toggleHoverState(3)}} className='fg-2'>HOW TO ORDER</div>
         <div className='fg-1'>PRICE</div>
         <div onMouseEnter={()=>{this.toggleHoverState(4)}} className='fg-1'>EXAMPLE</div>
         <div onMouseEnter={()=>{this.toggleHoverState(5)}} className='fg-1'>SHOP</div>
         </div> */}







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
        <i className="fas fa-search icon1"></i>
      </div>

      <div className="flex-container8 jc--end">
         <div>网页版暂时只提供English，如需提供其他语言请下载App</div>
      </div>
      </div>
    </div>
  );
}}

export default connect(
  state =>({isHovering:state.isHovering,OisHovering:state.OisHovering,HisHovering:state.HisHovering,EisHovering:state.EisHovering,SisHovering:state.SisHovering}),
  {mousel,service,hto,exm,shop}
)(App)
