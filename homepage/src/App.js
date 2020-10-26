import React, { Component } from 'react';
import Content from './container/content'
import Header from './container/homepage'
import Footer from './container/footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="body">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default App

