import React from 'react';
import styled from 'styled-components';

/**
 * In this module, you're free to muck about as you see fit!
 * Just navigate to the "Playground" section of the site and you'll see it at work!
 */

/**
 * Feel free to comment and uncomment the below files as you see fit...
 * The idea is to be able to see and play around with styled-components
 * and get used to their raw power!
 *
 * Once you're comfortable, feel free to add your own components
 * to the "./playground-components/" directory and see what you can do!
 */
//  these shapes are pretty boring, but the comments can be useful!
import Shapes from './playground-components/Shapes';
//  the heart is a single div with pseudo-elements - feel free to make it your own!
// import Heart from './playground-components/Heart';
// the mustache is pretty fun and (hopefully) demonstrates the use of keyframes with SC!
// import Mustache from './playground-components/Mustache';

const Page = styled.div`
  height: 100%;
  width: 100%;
  background-color: #1e1e1e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Playground = () => (
  <Page>
    <Shapes />
  </Page>
);

export default Playground;
