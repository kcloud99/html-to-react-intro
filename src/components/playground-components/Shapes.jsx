import React from 'react';
import styled from 'styled-components';

const ShapeGrid = styled.section`
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'tl tr'
    'bl br';
  height: 100%;
  width: 100%;
  justify-items: center;
  align-items: center;
`;

const Circle = styled.div`
  border-radius: 50%;
  background-color: #ffe47a;
  height: 45vmin;
  width: 45vmin;
`;

const Square = styled.div`
  background-color: #fe83ff;
  height: 45vmin;
  width: 45vmin;
`;

const Diamond = styled.div`
  background-color: #ffa95e;
  height: 30vmin;
  width: 30vmin;
  transform: rotate(45deg);
`;

// Prettier can be intentionally ignored like for the line that follows it, which includes the clip path, which is too long!
// Also, look!  A wild clip-path appeared!
// prettier-ignore
const Star = styled.div`
  background-color: #64b2ff;
  height: 45vmin;
  width: 45vmin;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
`;

const AssembledShapes = () => (
  <ShapeGrid>
    <Circle />
    <Square />
    <Diamond />
    <Star />
  </ShapeGrid>
);

export default AssembledShapes;
