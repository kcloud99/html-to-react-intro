import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 100vw;
  height: 90vh;
  background-image: url('images/home-background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #99afaf;
  width: 60vw;
  height: 70vh;
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 5px;
`;

const Heading = styled.h3`
  text-align: center;
`;

const Home = () => (
  <Wrap>
    <Box>
      <Heading>
        Please follow the instructions below. Feel free to message me at any
        point with questions.
      </Heading>
      <pre style={{ color: 'white', textAlign: 'center', fontSize: '2rem' }}>
        ENJOY!!!
      </pre>
    </Box>
  </Wrap>
);

export default Home;
