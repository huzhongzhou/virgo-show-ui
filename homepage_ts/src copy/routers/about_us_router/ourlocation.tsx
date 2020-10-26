import React,{Component} from 'react'
import './ourlocation.css'
class Location extends Component{
    render(){
        return(
        <div className='text1'>
          <div className='title'>
          OUR LOCATION
          </div>
          <div className='file2'>
          <hr className='line'></hr>
          <div className='locblank'></div>
          <div className='map'></div>
          <div className='locblank2'>总店地址：12 waitoa st, Ponsonby</div>
          <hr className='line'></hr>
          <div className='littleblank'></div>
          <div className='info'> 所有代理合作店信息：</div>
          <div className='littleblank'></div>
          <div className='storeinfo'>
              <div className='fg-3'>NAME</div>
              <div className='fg-3'>ADDRESS</div>
              <div className='fg-1'>TEL</div>
              <div className='fg-2'>OPENING HOUR</div>
          </div>
          <div className='storeinfo2'>
              <div className='fg-3'>BRITOMART BOUTIQUE FRAGRANCE & BEAUTY</div>
              <div className='fg-3'>35 GALWAY STREET BRITOMART 1010 AUCKLAND</div>
              <div className='fg-1'>+64 9-377 0223</div>
              <div className='fg-2'>Mon-Fri, 9:30am-16:00pm</div>
          </div>
          <div className='storeinfo2'>
              <div className='fg-3'>SMITH & CAUGHEY'S FRAGRANCE & BEAUTY</div>
              <div className='fg-3'>225 BROADWAY 1023 AUCKLAND</div>
              <div className='fg-1'>+64 9-377 0223</div>
              <div className='fg-2'>Mon-Fri, 9:30am-16:00pm</div>
          </div>
          </div>
          <div className='addition'>是否想成为我们的商务合作关系，请联系我们，我们期待您的加入！</div>
        </div>
        )
    }
}
export default Location
