import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, browserHistory, Switch } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Pics from './components/Pics';
import User from './components/User';

import './App.css';

const Wrap = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-flow: row wrap;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      user: {},
    };
  }

  componentDidMount() {
    axios
      .get('https://picsum.photos/list')
      .then(response => this.setState({ photos: response.data.slice(0, 30) }))
      .catch(err => console.log('👿', err));

    axios
      .get('https://randomuser.me/api/')
      .then(response => this.setState({ user: response.data.results[0] }))
      .catch(err => console.log('👺', err));
  }

  render() {
    const { photos, user } = this.state;
    return (
      <Wrap>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pics" component={() => <Pics photos={photos} />} />
          <Route path="/user" component={() => <User user={user} />} />
        </Switch>
      </Wrap>
    );
  }
}

export default App;

ReactDOM.render(
  <HashRouter history={browserHistory}>
    <App />
  </HashRouter>,
  document.getElementById('app'),
);
