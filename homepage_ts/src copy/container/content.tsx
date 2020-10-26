import React,{Component}from 'react'
import {connect} from 'react-redux'
import {Ichangehover,changehover, Ichangeindex,changeindex} from '../redux/actions/actions'
import {AppState} from '../redux/reducers/RootReducer'
import Search from './search'
import About from './homepageitem/about'
import Example from './homepageitem/example'
import Service from './homepageitem/ourservice'


interface Iprops {
    changehover:(isHovering:boolean)=>Ichangehover
    changeindex:(index:number)=>Ichangeindex
    isHovering:boolean
    index:number
}
interface Istate{
    componentitem:any;
    homepageitem:string[]
}

class Content extends Component<Iprops, Istate>{
    state:Istate = {
        componentitem:{aboutus: { item: [{itemname:'COMPANY PROFILE',itemrouter:'/about_us/company_profile'},{itemname:'OUR TECHNOLOGY',itemrouter:'/about_us/our_technology'},{itemname:'CONTACT US',itemrouter:'/about_us/contact_us'},{itemname:'POMOTION',itemrouter:'/about_us/our_location'}], top: '292px', id: 0 },
        howtoorder: { item: [{itemname:'PROCESS OF ORDER',itemrouter:'/how_to_order/process_of_order'},{itemname:'DELIVERY AND PICK UP',itemrouter:'/how_to_order/deliver_$_pick_up'},{itemname:'PROCESSING TIME',itemrouter:'/how_to_order/processing_time'},{itemname:'PAYMENT METHOD',itemrouter:'/how_to_order/payment_method'},{itemname:'POMOTION',itemrouter:'/how_to_order/promotion'}], top: '222px', id: 2 },  
        shop: { item: [{itemname:'ABOUT SHOP',itemrouter:'/shop/about_shop'},{ itemname:'SHOP',itemrouter:'/shop/about_shop'}, {itemname:'ABOUT 二手卖出',itemrouter:'/shop/about_second_sale'}], top: '347px', id: 5 }},
        homepageitem: ['ABOUT US', 'OUR SERVICE', 'HOW TO ORDER', 'PRICE', 'EXAMPLE', 'SHOP']
    }
    toggleHoverState=(num:number)=>{
        this.props.changehover(true)
        this.props.changeindex(num)
    }
    toggleHoverclose=()=>{
        this.props.changehover(false)
    }
    render(){
        return (
            <div>
                 <Search></Search>
                <div className="flex-container2  jc--center"> {/* 2 5*/}
                    <img className="image-size" src="https://www.chanel.com/i18n/en_WW/slides/1600_CH26_INSIDE_EN_1019.jpg" alt=''></img>
                </div>
              
                {
                    Object.keys(this.state.componentitem).map((data, id) => {
                        
                        if(this.props.index===1&& this.props.isHovering){
                            return(<Service toggleHoverclose={this.toggleHoverclose} key={id}></Service>)
                        }if(this.props.index===4&&this.props.isHovering){
                            return(
                                <Example toggleHoverclose={this.toggleHoverclose} key={id}></Example>
                            )
                        }else{
                            
                            return (
                                this.props.isHovering && this.props.index === this.state.componentitem[data].id ? <About toggleHoverclose={this.toggleHoverclose} value={this.state.componentitem[data]} key={id}></About> : ''
                                )
                        }
                    })
                }
                
                <div className="flex-container3 jc--space-between "> {/* 3 0*/}
                    {
                        this.state.homepageitem.map((data, index) => {          
                            return (
                                <div key={index} onMouseEnter={() => { this.toggleHoverState(index) }}>{data}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
} 

const mapStateToProps = (state: AppState) => {
    return {isHovering: state.localeReducer.isHovering,index:state.localeReducer.index};
  };
  const mapDispatchToProps = {
    changehover,changeindex
  };
export default connect(
    mapStateToProps, mapDispatchToProps
)(Content)