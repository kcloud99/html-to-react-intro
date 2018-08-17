// You always have to import React from the 'react' npm module
// if you are going to use JSX or write a react component
import React from 'react';

// styled components is a library that allows you to take a common
// html tag, and create a component with implicit styling attached (see use below)
import styled from 'styled-components';

// The 'Link' component is a wrapper around an 'a' tag, that allows us to target
// the client side routes defined in our App.jsx component
import { Link } from 'react-router-dom';

// Creating a named 'div' component, and attaching styles directly to the div
// This essentially acts as a 'class name' selector in normal CSS stylesheets
// However it allows us to define it in JSX/React syntax, and add this div to
// our Navbar component as a subcomponent
const Nav = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  width: 100vw;
  height: 10vh;
  background-color: #80cc80;
  justify-content: space-between;
  align-items: center;
`;

// more styled divs
const HomeLinkContainer = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
`;

// you can style ANY html tag into a styled component
const Logo = styled.img`
  height: 80%;
  margin-right: 30px;
`;

const NavLinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

// in this case, we want to style the 'Link' that we imported from 'react-router'
// in order to do this (since Link is a wrapper itself) we need to pass the 'Link'
// into the 'styled' higher order component (essentially a function that returns a styled component)
const NavLink = styled(Link)`
  margin: 0 20px 0 20px;
  color: white;
  font-size: 2rem;
`;

// Here I'm defining a 'dumb' component aka a stateless functional component
// essentially this is just a pure function (written in ES6 style), not a class,
// and used primarily as a presentational component

// Every sub-component in Navbar has a specific purpose
// Most were created above using Styled-Components.
// Those are simply html tags that now have implicit styling attached to them

// If you know HTML and CSS, you should be able to see how a simple component like this one works

const Navbar = () => { // eslint-disable-line

  return (
    // Here's where we will actuallly use our styled components in our JSX.
    // We can use them just like any other DOM element
    <Nav>
      {/* Use of a standard 'Link' component from 'react-router' */}
      <Link to="/">
        <HomeLinkContainer>
          <h2>Home</h2>
        </HomeLinkContainer>
      </Link>
      <NavLinkContainer>
        {/* Use of our styled Link components defined above */}
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/user">User</NavLink>
      </NavLinkContainer>
      {/* Since 'Logo' is a styled img tag, we can pass an src to it like a normal img tag */}
      <Logo src="images/react.svg" />
    </Nav>
  );
};

// We MUST export our main component here so other components can 'import' and use it
export default Navbar;
