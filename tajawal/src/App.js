import React, { Component } from 'react';
import PageHeader from './shared/components/header/PageHeader';
import Home from './components/Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader />
        <Home />
      </div>
    );
  }
}

export default App;
