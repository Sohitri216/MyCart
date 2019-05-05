import React, { Component } from 'react';
import ItemList from './components/ItemList';
import './App.css';


class App extends Component {

  state={
    items:[{
      id:1,
      name:'Shirt',
      price: '500',
      currency:'INR',
      img:'',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },{
      id:2,
      name:'Shorts',
      price: '700',
      currency:'INR',
      img:'',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },{
      id:3,
      name:'Hat',
      price: '100',
      currency:'INR',
      img:'',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },{
      id:4,
      name:'Watch',
      price: '1200',
      currency:'INR',
      img:'',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    }]
  }

  render() {
    return (
      <div className="App">
        <header className="header-main">My Cart</header>
        <div className="container wrapper-container">
       <ItemList items={this.state.items}/>
       </div>
        <footer className="footer-main"></footer>
      </div>
    );
  }
}

export default App;
