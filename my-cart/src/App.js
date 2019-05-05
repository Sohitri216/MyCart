import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/abstract/Header';
import Footer from './components/abstract/Footer';
import ItemList from './components/ItemList';
import Details from './components/pages/Details';
import AboutUs from './components/pages/AboutUs';
import uuid from 'uuid';
import './App.css';



class App extends Component {

  state = {
    items: [{
      id: uuid.v4(),
      name: 'Shirt',
      price: '500',
      img: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      visited:'false'
    }, {
      id: uuid.v4(),
      name: 'Shorts',
      price: '700',
      img: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      visited:'false'
    }, {
      id: uuid.v4(),
      name: 'Hat',
      price: '100',
      img: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      visited:'false'
    }, {
      id: uuid.v4(),
      name: 'Watch',
      price: '1200',
      img: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      visited:'false'
    }]
  }

  render() {
    return (
      <Router>
        <div className="App">
        <Header/>
          <div className="container wrapper-container">
            <Route exact path="/list" render={props => (
              <React.Fragment>
                <ItemList items={this.state.items} />
              </React.Fragment>
            )} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/details/:id" component={Details} />
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
