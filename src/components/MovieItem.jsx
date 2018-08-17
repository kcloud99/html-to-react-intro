/** *************************************************
 * This will be the initial playground for getting comfortable with
 * React/JSX syntax, after exploring the codebase a bit...
 *
 * This code is partially written, and if you followed the steps to
 * start the app locally, and go to http://localhost:1182/#/movies
 * You should see that there is some basic styling, but not very polished.
 *
 * Go ahead and play around with styled components, create new ones,
 * adjust the ones already written. Use more of the data if you want...
 * ANYTHING is possible, just play around and get used to it.
 *
 * When you are finished, move onto the 'User' component, which
 * is almost completely empty to really get into the code.
 */

// Importing our required libraries to use in this component
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Again using 'styled components' to build a styled
// html tag that we can insert into our PicItem component as a subcomponent

// IN THIS CASE: we want the background image of this div to be based
// on an image url passed into our component via props...
// To do this, we must define our 'url' here to take props passed
// into THIS styled compnonent specifically when we use it below
const ItemWrap = styled.div`
  display: flex;
  background-image: url(${props => props.photo});
  height: 200px;
  width: 200px;
  margin: 15px;
  flex-direction: column;
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Text = styled.p`
  color: white;
  font-size: 1.5rem;
`;

// Another presentational 'stateless functional' component since all the
// data we are using here is passed in as 'props'
const MovieItem = props => {
  console.log('🤯', props);
  // destructure our props into individual variables
  const { Poster, Title, Year } = props;
  return (
    // Using our styled components in our JSX, just like an HTML tag
    // Except here we are passing the 'Poster' attribute from the
    // movie data in as the background image on our styled div 'ItemWrap'
    <ItemWrap photo={Poster}>
      {/* You can nest as many of these styled components as you want */}
      <Cover>
        <Text>{Title}</Text>
        <Text>{Year}</Text>
      </Cover>
    </ItemWrap>
  );
};

// Always declare your propTypes
MovieItem.propTypes = {
  Poster: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
};

// Dont forget to export!
export default MovieItem;
