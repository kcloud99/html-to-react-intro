import styled from 'styled-components';

const BeardColor = '#583713';

const Mustache = styled.div`
  background-color: ${BeardColor}
  width: 20vmin;
  height: 20vmin;
  position: relative;
  left: -10vmin;
  border-radius: 50%;
  box-shadow: 19vmin 0 0 0 ${BeardColor};

  ::before {
    content: '';
    position: absolute;
    left: -26vmin;
    width: 36vmin;
    height: 20vmin;
    border-radius: 100% 0 0 1%;
    background-color: ${BeardColor};
    transform-origin: right center;
    transform: rotate(-2deg)
  }

  ::after {
    content: '';
    position: absolute;
    left: 29vmin;
    width: 36vmin;
    height: 20vmin;
    border-radius: 0 100% 1% 0;
    background-color: ${BeardColor};
    transform-origin: left center;
    transform: rotate(2deg)
  }

  :hover::before {
    animation: wiggle-left 300ms 2 both alternate ease-in-out;
  }

  :hover::after {
    animation: wiggle-right 300ms 2 both alternate ease-in-out;
  }

  @keyframes wiggle-left {
    0% {transform: rotate(-2deg)}
    60% {transform: rotate(-10deg)}
    100% {transform: rotate(-5deg)}
  }

  @keyframes wiggle-right {
    0% {transform: rotate(2deg)}
    60% {transform: rotate(10deg)}
    100% {transform: rotate(5deg)}
  }
`;

export default Mustache;
