import React from 'react';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';


import ReactPlayer from 'react-player';

const Message = styled.div`
clear: both;
margin-bottom: 2px;
font-family: Helvetica, Arial, sans-serif;
float: left;
font-size: 14px;
${'' /* max-width: 70%; */}
margin: 1px 0;
border-bottom-left-radius: ${({ button }) => button ? "5px" : null};
  ${({ platform }) =>
    platform === 'teams' &&
    css`
    display: inline-block;
    clear: both;
    margin-bottom: 2px;
    font-family: Helvetica, Arial, sans-serif;
    float: left;
    font-size: 14px;
    ${'' /* max-width: 30%; */}
    ${'' /* min-width: 18rem; */}
    margin: 1px;
    font-size: 14px;
    border-radius: 30px;
    padding: 6px 12px 7px;
    background: #eee;
    border: 1px solid #eee;
    border-bottom-left-radius: ${({ button }) => button ? "5px" : null};
      border-radius: 3px;
      padding: 0;
      overflow: hidden;
      position: relative;
      padding: 6px 12px 7px;
      background: #fff;
      color: #252423;
      margin-bottom: .6rem;
      ${'' /* min-width: 10.6rem; */}
    `}
  ${({ author, platform }) =>
    author === 'user' &&
    css`
      float: right;
      background: ${({ platform }) => platform === 'teams' ? "#e5e5f1" : "#0084ff"};
      color: ${({ platform }) => platform === 'teams' ? "#252423" : "#fff"};
    `}
`;

const Meta = styled.div`
  display: ${({ platform }) => platform === 'teams' ? "flex" : "none"};
  flex-grow: 1;
  font-size: .8rem;
`;

const VideoContainer = styled.div`
  position: relative;
  ${({ platform }) =>
    platform === 'teams' &&
    css`
    border: solid 1px #E7E6E5;
    border-radius: 3px;
    padding: 5px;
    background: #F3F2F1;
    margin: 3px;
    `}

  ${({ platform }) =>
    platform === 'messenger' &&
    css`
    & .react-player > video {
      border-radius: 30px;
  }
    `}
`;

export default function Video({data:{ videoSrc, author, date, platform }}) {

    return (
      <Message author={author} platform={platform}>
        <Meta platform={platform}>
          {author} {date}
        </Meta>
        <VideoContainer platform={platform}>
          <ReactPlayer
            url={videoSrc}
            className='react-player'
            width='100%'
            height='100%'
            config={{
              file: {
                attributes: { controls: 1 }
              },
            }}
          />
        </VideoContainer>
      </Message>
      );
}
