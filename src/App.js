import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {  
  state = {
    persons: [
      {name:'test',age:20},
      {name:'test1',age:21}
    ]
  }

  switNameHandler = (newName) => {
    // Dont do this : this.state.persons[0].name = 'xxx';
    this.setState({
      persons: [
        {name:newName,age:30},
        {name:'dgvde',age:31}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name:event.target.value,age:30},
        {name:'ghghg',age:31}
      ]
    })
  }

  render() {
    const styleval = {
      backgroundColor : 'white',
      font : 'inherit',
      border: '1x solid #eee',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, i am a react app.</h1>
        <button style={styleval} onClick={this.switNameHandler.bind(this,'xcvfgd')}>switch name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} 
        click={this.switNameHandler} 
        nameChanged={this.nameChangedHandler} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Music</Person>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, i\'m a react app.!!!'));
  }
}

export default App;
