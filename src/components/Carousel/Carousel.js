import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 90%;
  overflow: auto;
  white-space: nowrap;
`;

const Message = styled.div`
  display: inline-block;
  clear: both;
  margin-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
  float: left;
  font-size: 14px;
  ${'' /* max-width: 30%; */}
  min-width: 30%;
  margin: 1px;
  padding: 6px 12px 7px;
  font-size: 14px;
  border-radius: 5px;
  background: #eee;
  border-bottom-left-radius: ${({ button }) => button ? "5px" : null};

  ${({ platform }) =>
    platform === 'teams' &&
    css`
      border-radius: 3px;
      padding: 0;
      overflow: hidden;
      position: relative;
      padding: 6px 12px 7px;
      background: #eee;
      color: #252423;
      margin-bottom: .6rem;
      min-width: 10.6rem;
    `}

  ${({ author, platform }) =>
    author === 'user' &&
    css`
      float: right;
      background: ${({ platform }) => platform === 'teams' ? "#e5e5f1" : "#0084ff"};
      color: ${({ platform }) => platform === 'teams' ? "#252423" : "#fff"};
    `}
`;

const Picture = styled.img`
  position: relative;
  overflow: hidden;
  max-width: 100%;
`;


export default function Carousel({ carousel }) {

  const left = () => {
     scrollLeft(document.getElementById('content'), -300, 1000);
  }

  const right = () => {
     scrollLeft(document.getElementById('content'), 300, 1000);
  }

  const scrollLeft = (element, change, duration) => {
      var start = element.scrollLeft,
          currentTime = 0,
          increment = 20;

          console.log(start)

      var animateScroll = function(){
          currentTime += increment;
          var val = Math.easeInOutQuad(currentTime, start, change, duration);
          element.scrollLeft = val;
          if(currentTime < duration) {
              setTimeout(animateScroll, increment);
          }
      };
      animateScroll();
  }

  //t = current time
  //b = start value
  //c = change in value
  //d = duration
  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
  	if (t < 1) return c/2*t*t + b;
  	t--;
  	return -c/2 * (t*(t-2) - 1) + b;
  };

    return (
      <>
        <Container id="content">
          {carousel.map(carousel => (
            <Message author={carousel.author} platform={carousel.platform}>
              <Picture src={carousel.imgSrc} platform={carousel.platform} />
              <p>{carousel.title}</p>
              <p>{carousel.subtitle}</p>
            </Message>
          ))}
        </Container>
        <button id="left-button" type="button" onClick={left}>Slide left</button>
        <button id="right-button" type="button" onClick={right}>Slide right</button>
      </>
    );
}
