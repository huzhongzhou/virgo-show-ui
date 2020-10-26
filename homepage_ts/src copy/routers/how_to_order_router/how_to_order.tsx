import React, { Component } from 'react';
import {NavLink,Switch,Route,Redirect}from 'react-router-dom'
import Process from './inside_router/process_of_order'
import Deliver from './inside_router/deli_and_pick_up'
import Protime from './inside_router/process_time'
import Price from './inside_router/service_price'
import Payment from './inside_router/payment_method'
import Promotion from './inside_router/promotion'
import './how_to_order.css'

interface IItem{
  name:string;
  router:string;
}
interface Irouter{
  path:string;
  item:any;
}
interface Istate{
  aboutus:Array<IItem>
  address:Array<Irouter>
}

class Order extends Component<{},Istate> {
  state:Istate={
    aboutus:[{name:'PROCESS OF ORDER',router:'/how_to_order/process_of_order'},
    {name:'DELIVERY AND PICK UP',router:'/how_to_order/deliver_$_pick_up'},
    {name:'PROCESSING TIME',router:'/how_to_order/processing_time'},
    {name:'SERVICE & PRICE LIST',router:'/how_to_order/service_&_price_list'},
    {name:'PAYMENT METHOD',router:'/how_to_order/payment_method'},
    {name:'PROMOTION',router:'/how_to_order/promotion'},
    ],
  address:[{path:'/how_to_order/process_of_order',item:Process},
  {path:'/how_to_order/deliver_$_pick_up',item:Deliver},
  {path:'/how_to_order/processing_time',item:Protime},
  {path:'/how_to_order/service_&_price_list',item:Price},
  {path:'/how_to_order/payment_method',item:Payment},
  {path:'/how_to_order/promotion',item:Promotion},
  
]
  }
    render(){
  return (
    <div className='app'>
    <div className="routerbody">
      <div className='routerblank'></div>
      <div className='closebtn'>
        <NavLink className='close'to='/homepage'> <i className="fas fa-times"></i></NavLink>
      </div>
      <div className='flex-container8'>
        <div className='routeritem'>
          <div className='routeritemblank'></div>
            {
              this.state.aboutus.map((data,index)=>{
                return(<div className= 'item1' key={index}>
                  <NavLink className='itemfont' activeClassName='activeclass' to={this.state.aboutus[index].router}>{this.state.aboutus[index].name}</NavLink>
                </div>
                  )
              })
            }
        </div>
      
        <div className='routertext'>
          <Switch>
            {
              this.state.address.map((data,index)=>{
                return(
                  <Route key={index} path={this.state.address[index].path} component={this.state.address[index].item}></Route>
                )
                })
            }
            <Redirect to='/how_to_order/process_of_order'></Redirect>
          </Switch>
         
        </div>



      </div>
      <div className='blank'></div> 
    </div></div>
  );
}}

export default Order;
