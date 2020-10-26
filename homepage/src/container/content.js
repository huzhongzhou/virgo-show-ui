import React, { Component } from 'react'
import About from '../homepageitem/aboutus'
import Example from '../homepageitem/example'
import { connect } from 'react-redux'
import { changehover, changeindex } from '../redux/actions'
import Service from '../homepageitem/ourservice'
import Search from './search'


class Content extends Component {
    state = {
        aboutus: { item: ['COMPANY PROFILE', 'OUR TECHNOLOGY', 'CONTACT US', 'OUR LOCATION'], top: '292px', id: 0 },
        howtoorder: { item: ['PROCESS OF ORDER', 'DELIVERY AND PICK UP', 'PROCESSING TIME', 'PAYMENT METHOD', 'POMOTION'], top: '222px', id: 2 },
        shop: { item: ['ABOUT SHOP', 'SHOP', 'ABOUT 二手卖出'], top: '347px', id: 5 },
        homepageitem: ['ABOUT US', 'OUR SERVICE', 'HOW TO ORDER', 'PRICE', 'EXAMPLE', 'SHOP']
    }
    toggleHoverState=(num)=> {
       
        this.props.changehover(true)
        this.props.changeindex(num)
    }
    toggleHoverclose=()=>{
        this.props.changehover(false)
    }
    render() {
        const { isHovering, index } = this.props
        return (
            <div>
                <Search></Search>
                <div className="flex-container5  jc--center">
                    <img className="image-size" src="https://www.chanel.com/i18n/en_WW/slides/1600_CH26_INSIDE_EN_1019.jpg" alt=''></img>
                </div>
                {
                    Object.keys(this.state).map((data, id) => {
                        if(index===1&&isHovering){
                            return(<Service toggleHoverclose={this.toggleHoverclose} key={id}></Service>)
                        }if(index===4&&isHovering){
                            return(<Example toggleHoverclose={this.toggleHoverclose} key={id}></Example>)
                        }else{
                            return (
                                isHovering && index === this.state[data].id ? <About toggleHoverclose={this.toggleHoverclose} value={this.state[data]} key={id}></About> : ''
                            )
                        }
                    })
                }
                <div className="flex-container jc--space-between ">
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
export default connect(
    state => ({isHovering:state.isHovering, index: state.index }),
    { changehover, changeindex }
)(Content)