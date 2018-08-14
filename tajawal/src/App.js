import React, { Component } from 'react';
import PageHeader from './shared/components/header/PageHeader';
import Home from './components/Home/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Search from './components/Search/Search';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <PageHeader />
        <Route exact path="/" component={Home}/>
        <Route path="/search" component={Search}/>
        </div>
      </Router>
    );
  }
}

export default App;
