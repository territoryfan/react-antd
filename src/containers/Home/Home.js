import React, { Component } from 'react';
// import logo from './../../static/svg/logo.svg';
import './Home.less';
// import { Button, Icon } from 'antd-mobile';
import TabBarPiao from "./../Main/TabBarPiao";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* 
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <Icon type="success" size="lg"/>
            <p className="App-intro">
              To get started11, edit <code>src/App.js</code> and save to reload.
            </p>
            <Button type="primary">This is a button12</Button> 
        */}
        <TabBarPiao />
      </div>
    );
  }
}

export default App;
