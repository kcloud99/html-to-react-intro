/** ********************************************************
 * Starting Note:
 * Everything in here is commented with notes and instructions on
 * everything used in the application. As you get comfortable with
 * all the pieces, feel free to delete or move the comments so you
 * can see the code in a cleaner way!
 ********************************************************** */

// We'll start by importing pieces of the React library to use in our app
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Since we are building this app without a server, we need a way
// to do routing on the front end. This is where React Router comes in
// See below for more definitions of how we are using it
import { HashRouter, Route, browserHistory, Switch } from 'react-router-dom';

// We will be using the 'styled-components' library to style our
// app using CSS-in-JS style. See below and the other files
// for a deeper explanation of styled components
import styled from 'styled-components';

// axios is a library to make HTTP requests from our application
import axios from 'axios';

// Here we are importing all of the other components we want to use
// in our application. Because this is our top level component
// and we define all of our routes below, we are importing these
// components here to be declared in our <App /> component
import Navbar from './components/Navbar';
import Home from './components/Home';
import Movies from './components/Movies';
import User from './components/User';

// App.css is where we write our 'global' styles
// that we want to attach to the 'body' or 'html' tags
// we can import that sheet here for global use
import './App.css';

// Here we are using styled components to create our wrapper div
// for the entire page. Please see the other components code
// for a more detailed explanation of styled components
const Wrap = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

// Our main App component here is going to be a 'smart' or 'class'
// or 'stateful' component... This is because, for this app, this
// is where we will be holding the data we are using for the rest
// of the app. Only class components can hold state, and use the
// 'lifecycle' methods built into react (see componentDidMount below)

// Note: this 'class' style is based on the ES6 class definitions and not
// the same as a class in JAVA or any other OOP languages
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      user: {},
    };
  }

  // This is what is called a 'lifecycle' method in React
  // This one says, when this component is fully 'mounted'
  // run this code...
  // In our case, we are grabbing a couple different bits of data
  // from 3rd party API's then saving that data to our
  // 'state' (above in the constructor)
  // We can then pass that data to other components via 'props'
  componentDidMount() {
    axios
      .get('https://www.omdbapi.com/?apikey=cf68ae07&s=avengers')
      .then(response => this.setState({ movies: response.data.Search }))
      .catch(err => console.log('👿', err));

    axios
      .get('https://randomuser.me/api/')
      .then(response => this.setState({ user: response.data.results[0] }))
      .catch(err => console.log('👺', err));
  }

  // In a 'class' component, you must always have a 'render()' method
  // that returns a JSX component
  // For now, React requires that you only return a single JSX wrapper node
  // This might change in future versions of React, but make sure you are
  // ALWAYS wrapping any JSX in a single tag/node
  render() {
    // destructuring our different data nodes out of our state object
    const { movies, user } = this.state;
    return (
      // Here we are using our styled div created above
      <Wrap>
        {/* We just have to declare our navbar component here since
        it will be visible throughout the entire app */}
        <Navbar />
        {/* Below, we are declaring our front end routes...
        The 'Switch' component ensures that only one of these components will show
        at any given time, while the 'Route' component declares the path and
        the component to show when you hit that path */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={() => <Movies movies={movies} />} />
          <Route path="/user" component={() => <User user={user} />} />
        </Switch>
      </Wrap>
    );
  }
}

// We must always export our components to expose them elsewhere in our app
export default App;

// Finally, we MUST render our react component tree to the DOM using
// ReactDOM... We are wrapping our 'App' component in HashRouter here
// to, 1. allow us to use our client routing declared above and
// 2. Allows us to use 'hot reloading' in development, where the component
// renders even when you go directly to the route in the browser.
// In production we may want to change that to 'BrowserRouter' to ensure
// all users go through the home page to start the application
ReactDOM.render(
  <HashRouter history={browserHistory}>
    <App />
  </HashRouter>,
  document.getElementById('app'),
);
