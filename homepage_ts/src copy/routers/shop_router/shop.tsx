import React, { Component } from 'react';
import {NavLink,Switch,Route,Redirect}from 'react-router-dom'
import Shop from './inside_router/about_shop'
import Second from './inside_router/second_sale'
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

class Seshop extends Component<{},Istate> {
  state:Istate={
    aboutus:[{name:'ABOUT SHOP',router:'/shop/about_shop'},
    
    {name:'ABOUT 二手卖出',router:'/shop/about_second_sale'},
    ],
  address:[{path:'/shop/about_shop',item:Shop},
  {path:'/shop/about_second_sale',item:Second},
 
  
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
            <Redirect to='/shop/about_shop'></Redirect>
          </Switch>
         
        </div>



      </div>
      <div className='blank'></div> 
    </div></div>
  );
}}

export default Seshop;
