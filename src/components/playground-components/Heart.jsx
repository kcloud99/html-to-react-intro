import styled from 'styled-components';
/**
 * Styled components offers you some additional super powers.
 * Anything that is valid CSS or SCSS is acceptable within a styled-component
 * and we can use that power to produce some awesome (or lame) shapes.
 *
 * This heart is just one element, a div, and its before and after pseudo-elements!  Woah!
 */

const Heart = styled.div`
  color: #bd2d2d;
  position: absolute;
  margin-top: 6px;
  margin-left: 5px;
  width: 36vmin;
  height: 36vmin;
  background-color: currentColor;
  transform: rotate(-45deg);

  ::before {
    content: '';
    position: absolute;
    top: -20vmin;
    left: 0vmin;
    width: 36vmin;
    height: 20vmin;
    border-radius: 20vmin 20vmin 0 0;
    border-top: solid 1px currentColor;
    background-color: currentColor;
  }

  ::after {
    content: '';
    position: absolute;
    top: 0vmin;
    left: 35vmin;
    width: 20vmin;
    height: 36vmin;
    border-radius: 0 20vmin 20vmin 0;
    background-color: currentColor;
  }
`;

export default Heart;
