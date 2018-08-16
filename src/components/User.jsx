import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// creating a div component to use like any other React/JSX component
// This CSS acts like a class on this div but allows you to use the
// div as a JSX component in the USER component below.
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
    // using 'prettier-ignore' to ignore a specific formatting error in code below...
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
