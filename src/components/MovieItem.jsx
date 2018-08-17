// Importing our required libraries to use in this component
import React from 'react';
import styled from 'styled-components';

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

const MovieItem = props => {
  console.log('🤯', props);
  return (
    // Using our styled components in our JSX, just like an HTML tag
    <ItemWrap photo={props.Poster}>
      <Cover>
        <Text>{props.Title}</Text>
        <Text>{props.Year}</Text>
      </Cover>
    </ItemWrap>
  )
}

export default MovieItem;