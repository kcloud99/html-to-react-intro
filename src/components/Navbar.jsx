import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  width: 100vw;
  height: 10vh;
  background-color: #80CC80;
  justify-content: space-between;
  align-items: center;
`;

const HomeLinkContainer = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
`;

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

const NavLink = styled(Link)`
  margin: 0 20px 0 20px;
  color: white;
  font-size: 2rem;
`;

const Navbar = () => (
  <Nav>
    <Link to="/">
      <HomeLinkContainer>
        <h2>Home</h2>
      </HomeLinkContainer>
    </Link>
    <NavLinkContainer>
      <NavLink to="/pics">Pics</NavLink>
      <NavLink to="/user">User</NavLink>
    </NavLinkContainer>
    <Logo src="images/react.svg" />
  </Nav>
);

export default Navbar;
