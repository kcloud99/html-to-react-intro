import React from 'react';
import styled from 'styled-components';

// const Left = styled.div`
//   border-radius: 50%;
//   height: 10vmin;
//   width: 10vmin;
//   background-color: #583713;

//   ::before {
//     display: block;
//     content: '';
//     height: 10vmin;
//     width: 10vmin;
//     background-color: #583713;
//     background-color: peru;
//     border-radius: 0 50% 50% 0;
//     position: relative;
//     left: -50%;
//   }
// `;

const BeardColor = '#583713';

const Left = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 50px 80px 0 0 ${BeardColor}, 100px 80px 0 0 ${BeardColor};

  ::after {
    content: '';
    border: 0 solid transparent;
    border-bottom: 60px solid ${BeardColor};
    border-radius: 0 0 0 100%;
    width: 70px;
    height: 40px;
    left: 10px;
    top: 40px;
    transform-origin: right 70px;
    transform: rotate(-40deg);
  }

  ::before {
    content: '';
    border: 0 solid transparent;
    border-bottom: 60px solid ${BeardColor};
    border-radius: 0 0 100% 0;
    width: 70px;
    height: 40px;
    left: 130px;
    top: 40px;
    transform-origin: left 70px;
    transform: rotate(40deg);
  }
`;

const Mustache = () => <Left />;

export default Mustache;

/**
 * border: 0 solid transparent;
    border-bottom: 6px solid #333333;
    border-radius: 0 0 0 100%;
    width: 7px;
    height: 4px;
    left: 1px;
    top: 4px;
    transform-origin: right 7px;
    transform: rotate(-40deg);

    border: 0 solid transparent;
    border-bottom: 6px solid #333333;
    border-radius: 0 0 100% 0;
    width: 7px;
    height: 4px;
    left: 13px;
    top: 4px;
    transform-origin: left 7px;
    transform: rotate(40deg);

    width: 6px;
    height: 6px;
    border-radius: 50%;
    box-shadow: 5px 8px 0 0 #333333, 10px 8px 0 0 #333333;
 */
