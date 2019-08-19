import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(monsters => this.setState({ monsters }))
  }

  onHandleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    })
  return (
    <div className="App">
      <h1>MONSTERS ROLODEX</h1>
      <SearchBox 
        placeholder='search monsters'
        handleChange={(e) => this.setState({ searchField: e.target.value })}
      />
      <CardList 
        monsters={filteredMonsters}
      />
    </div>
  );
  }
}

export default App;
