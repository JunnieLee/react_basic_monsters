import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters:[] // empty array
    };
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // transform it into a json format
      .then(users=> this.setState({ monsters: users }));
  }

  render(){
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}> {monster.name} </h1>
        ))}
      </div>
    );
  }
}


export default App;
