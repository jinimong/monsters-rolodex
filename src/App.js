import React from 'react';
import { CardList } from './components/card-list/card-list.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return <CardList monsters={this.state.monsters} />;
  }
}

export default App;
