import React,{Component} from 'react'


interface IItem{
    name:string;
    style:string;
}
interface Istate{
store1:Array<IItem>;
store2:Array<IItem>;
store3:Array<IItem>;
}
class Location extends Component<{},Istate>{
state:Istate={
    store1:[{name:'NAME',style:'fg-3'},{name:'ADDRESS',style:'fg-3'},{name:'TEL',style:'fg-1'},{name:'OPENING HOUR',style:'fg-2'}],
    store2:[{name:'BRITOMART BOUTIQUE FRAGRANCE & BEAUTY',style:'fg-3'},{name:'35 GALWAY STREET BRITOMART 1010 AUCKLAND',style:'fg-3'},{name:'+64 9-377 0223',style:'fg-1'},{name:'Mon-Fri, 9:30am-16:00pm',style:'fg-2'}],
    store3:[{name:'SMITH & CAUGHEY\'S FRAGRANCE & BEAUTY',style:'fg-3'},{name:'225 BROADWAY 1023 AUCKLAND',style:'fg-3'},{name:'+64 9-377 0223',style:'fg-1'},{name:'Mon-Fri, 9:30am-16:00pm',style:'fg-2'}],
}
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
              {
                  Object.keys(this.state.store1).map((data,index)=>{
                  return(<div key={index} className={this.state.store1[data].style}>{this.state.store1[data].name}</div>)
                  })
              }

          </div>
          <div className='storeinfo2'>
             {
                  Object.keys(this.state.store2).map((data,index)=>{
                  return(<div key={index} className={this.state.store2[data].style}>{this.state.store2[data].name}</div>)
                  })
              }
          </div>
          <div className='storeinfo2'>
            {
                  Object.keys(this.state.store3).map((data,index)=>{
                  return(<div key={index} className={this.state.store3[data].style}>{this.state.store3[data].name}</div>)
                  })
              }
          </div>
          </div>
          <div className='addition'>是否想成为我们的商务合作关系，请联系我们，我们期待您的加入！</div>
        </div>
        )
    }
}
export default Location
