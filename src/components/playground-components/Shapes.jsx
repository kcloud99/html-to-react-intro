import React from 'react';
import styled from 'styled-components';

/**
 ** In this file, you'll find some basic shapes.
 ** You may need to jump into the Playground component and tell it to render the shapes component that we export here.
 ** All that you would need is to nest it like so: <Page><Shapes /></Page>
 */

/**
 * The shape grid takes advantage of css grid to create a container that will hold our shapes.
 * This is a bit overkill, but it does position our shapes nicely for us!
 */
const ShapeGrid = styled.section`
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  width: 100%;
  justify-items: center;
  align-items: center;
  overflow: hidden;
`;

/**
 * All of the rules of css still apply, which means we need to give size to our shapes because they are empty divs in a grid.
 */
const Square = styled.div`
  background-color: #fe83ff;
  height: 45vmin;
  width: 45vmin;
`;

const Circle = styled.div`
  border-radius: 50%;
  background-color: #ffe47a;
  height: 45vmin;
  width: 45vmin;
`;

/**
 * We can even transform!
 */
const Diamond = styled.div`
  background-color: #ffa95e;
  height: 25vmin;
  width: 25vmin;
  transform: rotate(45deg);
`;

// Prettier can be intentionally ignored using the comment two lines down, which ignores the line below to the end of the template literal (``).
// Also, look!  A wild clip-path appeared! (shoutout to: http://bennettfeely.com/clippy/)
// prettier-ignore
const Star = styled.div`
  background-color: #64b2ff;
  height: 40vmin;
  width: 40vmin;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
`;

// try playing around with these shapes!  You could always try rendering the star inside of the square or adjusting sizing and positioning!
const AssembledShapes = () => (
  <ShapeGrid>
    <Circle />
    <Square />
    <Diamond />
    <Star />
  </ShapeGrid>
);

export default AssembledShapes;
