import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
      name: 'Стасон',
      skills: ''
  };

  addMySkills = (s) => {
        this.setState ({
            skills : s
        });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <button onClick={this.addMySkills.bind(this, 'design')}>Жми</button>
          <Person click={() => this.addMySkills('programming')}   name={this.state.name}><p>Я UX-разработчик</p></Person>
          <p>My skills: {this.state.skills} </p>
      </div>
    );
  }
}

export default App;
