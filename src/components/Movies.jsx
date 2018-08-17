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

// Importing our 'PicItem' component that we will use to render
// Each individual picture out of the array of pictures passed to this component
import MovieItem from './MovieItem';

// Creating a named 'div' component, and attaching styles directly to the div
// This essentially acts as a 'class name' selector in normal CSS stylesheets
// However it allows us to define it in JSX/React syntax, and add this div to
// our Pics component as a subcomponent
// you can style ANY html tag into a styled component
const Wrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
`;

// using ES6 syntax destructuring { movies } to pull the movies list out of the 'props'
// passed to this component from it's parent
const Movies = ({ movies }) => {
  return (
    // Here we are using our styled component to wrap the entire list of subcomponents
    <Wrap>
      {movies.map(movie => (
        <MovieItem key={movie.imdbID} {...movie} />
      ))}
    </Wrap>
  );
};

// It is always best practice to declare your prop types to ensure that
// data you expect to be passed to a component is actually passed to it
// if you do not have the '.isRequired' tag on the prop type
// you MUST declare default props for that prop as well
Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};

// We MUST export our main component here so other components can 'import' and use it
export default Movies;

// Here I'm defining a 'dumb' component aka a stateless functional component
// essentially this is just a pure function (written in ES6 style), not a class,
// and used primarily as a presentational component

// Every sub-component in Navbar has a specific purpose
// Most were created above using Styled-Components.
// Those are simply html tags that now have implicit styling attached to them

// If you know HTML and CSS, you should be able to see how a simple component like this one works
