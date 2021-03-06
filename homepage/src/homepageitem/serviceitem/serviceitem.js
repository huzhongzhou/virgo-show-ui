import React, { Component } from 'react'
import Image from './image'
class Serviceitem extends Component {
    
    render() {
        return (
            <div className='flexservice'>
                <div className='cate jc--center4 ai--center'>
                    <div>{this.props.value.cate}</div>
                </div>
                <div className='cateblank'></div>
                <div className='itemservice ai--center'>
                    <div className='picture '>
                        {
                            this.props.value.imgsrc.map((data, index) => {
                                console.log(typeof data)
                                return (<div className='sfg ' key={index}><Image value={data}></Image></div>)
                            })
                        }
                    </div>
                    <div className='blank'></div>
                    <div className='text'>
                        <div className='sfg-5'>{this.props.value.text}</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Serviceitem