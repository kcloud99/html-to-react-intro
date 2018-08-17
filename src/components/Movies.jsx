// You always have to import React from the 'react' npm module
// if you are going to use JSX or write a react component
import React from 'react';

// styled components is a library that allows you to take a common
// html tag, and create a component with implicit styling attached (see use below)
import styled from 'styled-components';

// The 'prop-types' library allows us to check that any 'props',
// aka the variables/data that we are passing into this component
// are in the correct shape when they are passed in.
// We define our rules for PropTypes at the bottom of this file
import PropTypes from 'prop-types';

// Importing our 'MovieItem' component that we will use to render
// Each individual movie out of the array of movie data passed to this component
import MovieItem from './MovieItem';

// Creating a named 'div' component, and attaching styles directly to the div
// This essentially acts as a 'class name' selector in normal CSS stylesheets
// However it allows us to define it in JSX/React syntax, and add this div to
// our Movies component as a subcomponent
// you can style ANY html tag into a styled component
const Wrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
`;

// We will be using a 'dumb' or 'stateless functional' component here
// instead of a class component. This is essentially just an ES6 function
// that returns JSX. Mostly used for presentational components
// that don't need access to state or lifecycle methods

// using ES6 syntax destructuring { movies } to pull the movies list out of the 'props'
// passed to this component from it's parent

// Note here, that we are simply wrapping the entire body in parens
// so we don't need an explicit return statement

const Movies = ({ movies }) => (
  // Here we are using our styled component to wrap the entire list of subcomponents
  // IMPORTANT: When we want to render javascript inside of JSX, we must wrap the JS in
  // curly braces '{}', otherwise it will be evaluated as a string, or throw an error.

  // The entire purpose of this component is to take our array of movie data
  // and map each individual item in the array to a 'MovieItem' component.
  // That 'MovieItem' will hold all the data for a single movie

  // Note: when you map data in React, you must pass a unique identifier to the 'key' prop
  // After that, we are using the ES6 object spread operator {...movie} to pass the rest
  // of the data straight through to our MovieItem component as props
  <Wrap>
    {movies.map(movie => (
      <MovieItem key={movie.imdbID} {...movie} />
    ))}
  </Wrap>
);

// It is always best practice to declare your prop types to ensure that
// data you expect to be passed to a component is actually passed to it
// if you do not have the '.isRequired' tag on the prop type
// you MUST declare default props for that prop as well
Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};

// We MUST export our main component here so other components can 'import' and use it
export default Movies;
