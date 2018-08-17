import React from 'react';
import styled from 'styled-components';

import instruct from '../instructions.json';

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
  box-shadow: 0 1px 60px rgba(0, 0, 0, 0.4), 0 1px 4px rgba(0, 0, 0, 0.1);
  width: 60vw;
  height: 70vh;
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 5px;
  overflow: scroll;
`;

const Heading = styled.h2`
  text-align: center;
  color: white;
`;
const SubHeading = styled.h4`
  text-align: center;
  color: white;
`;

const Text = styled.p`
  font-size: 1.5rem;
  margin: 15px 20px 15px 20px;
`;

// prettier-ignore
const Home = () => (
  <Wrap>
    <Box>
      <Heading>Learning JSX/React from HTML/CSS</Heading>
      <SubHeading>
        Please follow the instructions below. Feel free to message me at any
        point with questions.
      </SubHeading>
      <pre style={{ color: 'white', textAlign: 'center', fontSize: '2rem' }}>
        ENJOY!!!
      </pre>
      {instruct.instructions.map(i => (
        <Text key={i.num}>
          {i.num}{i.desc}
        </Text>
      ))}
      <SubHeading>
        If you DO want to share what you built, feel free to create a branch
        with your unique info and submit a pull request. As well, I would take
        a look into Netlify... It is the easiest platform I have found for
        getting something you built directly from a github repo out onto the
        internet for everyone to see. Share it with me and the world!
      </SubHeading>
    </Box>
  </Wrap>
);

export default Home;
