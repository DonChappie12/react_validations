import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import ValidateForm from './components/validateForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ValidateForm />
      </div>
    );
  }
}

export default App;
