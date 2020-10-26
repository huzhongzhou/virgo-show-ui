import React, { Component } from 'react';
import {NavLink,Switch,Route,Redirect}from 'react-router-dom'
import Companypro from './about_us_router/companyprofile'
import Core from './about_us_router/coreteam'
import Technology from './about_us_router/technology'
import './mainrouter.css';
import Contact from './about_us_router/contactus';
import Location from './about_us_router/ourlocation'

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

class Router extends Component<{},Istate> {
  state:Istate={
    aboutus:[{name:'COMPANY PROFILE',router:'/about_us/company_profile'},
    {name:'CORE TEAM',router:'/about_us/core_team'},
    {name:'OUR TECHNOLOGY',router:'/about_us/our_technology'},
    {name:'CONTACT US',router:'/about_us/contact_us'},
    {name:'OUR LOCATION',router:'/about_us/our_location'}
    ],
  address:[{path:'/about_us/company_profile',item:Companypro},
  {path:'/about_us/core_team',item:Core},
  {path:'/about_us/our_technology',item:Technology},
  {path:'/about_us/contact_us',item:Contact},
  {path:'/about_us/our_location',item:Location},
  
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
            <Redirect to='/about_us/company_profile'></Redirect>
          </Switch>
         
        </div>



      </div>
      <div className='blank'></div> 
    </div></div>
  );
}}

export default Router;
