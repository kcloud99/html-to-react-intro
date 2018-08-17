/** ****************************************
 * Use this component to do
 * WHATEVER YOU WANT!!!
 * Delete everything in here if you want and do your thing!
 * This is your playground where you can test out your skills based on
 * all the other code in this mini-app!
 *
 * When you're all done, feel free to share, I would love to see what you built!
 * A quick and easy way to do that is to deploy your app to Netlify...
 * It's completely free and you can do it straight from you github repo.
 * Have fun!
 ******************************************* */

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

// Creating a named 'div' component, and attaching styles directly to the div
// This essentially acts as a 'class name' selector in normal CSS stylesheets
// However it allows us to define it in JSX/React syntax, and add this div to
// our User component as a subcomponent
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
`;

// using ES6 syntax destructuring { user } to pull the user object out of the 'props'
// passed to this component from it's parent
const User = ({ user }) => {
  console.log('🤪 user data 🤓', user);
  return (
    // using 'prettier-ignore' to ignore a specific formatting error
    // that we dont care about in code below...
    // prettier-ignore
    <Wrap>
      <h1>This is the User component</h1>
      <p>
        Open up your console (⌘ + ⌥ + i) to see the data being passed to this
        component
      </p>
      <p>Do whatever you want with this data, and this component...</p>
      <p>
        Use the example code in the Home and Navbar component as well as your
        own code in the Pics component as a guide
      </p>
      <p>
        Remember you can always check out:
        <a href="https://reactjs.org/docs/hello-world.html"> The React Docs </a>
        and
        <a href="https://www.styled-components.com/docs"> The Styled Components Docs </a>
        if you need to know anything.
      </p>
      <p>Or shoot me a message anytime for some extra help!</p>
    </Wrap>
  );
};

// It is always best practice to declare your prop types to ensure that
// data you expect to be passed to a component is actually passed to it
// if you do not have the '.isRequired' tag on the prop type
// you MUST declare default props for that prop as well
User.propTypes = {
  user: PropTypes.object.isRequired,
};

// export the above component so other components can import and use it
export default User;
