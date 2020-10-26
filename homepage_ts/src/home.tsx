import Content from './container/content'
import Footer from './container/footer'
import Header from './container/header'
import React from 'react';

const Home: React.FC<{}> = () => {
    return (
        <div className="body">
          <Header></Header>
          <Content></Content>
          <Footer></Footer>
    
        </div>
    );
  }
  
  export default Home;
  