import React from 'react';
import styled, { css } from 'styled-components';

import ButtonList from '../ButtonList/ButtonList';


import "../../index.css"

const Message = styled.div`
  ${'' /* display: flex; */}
  clear: both;
  margin-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
  float: ${({ author }) => author === 'user' ? "right" : "left"};
  ${({ platform }) =>
    platform === 'teams' &&
    css`
      background-color: #eee;
      padding: .8rem 1.6rem .8rem 1.6rem;
    `}
  ${({ author, platform }) =>
    author === 'user' && platform === 'teams' &&
    css`
      background: ${({ platform }) => platform === 'teams' ? "#e5e5f1" : "#0084ff"};
      color: ${({ platform }) => platform === 'teams' ? "#252423" : "#fff"};
    `}
`;

const MainMessage = styled.div`
  padding: 6px 12px 7px;
  font-size: 14px;
  ${'' /* max-width: 85%; */}
  margin: 1px 0;
  border-radius: 1.3em;
  background: #eee;
  border-bottom-left-radius: ${({ button }) => button ? "5px" : null};

  border-bottom-left-radius: ${({ button }) => button ? "5px" : null};

  ${({ platform }) =>
    platform === 'teams' &&
    css`
      border-radius: 3px;
      padding: 0;
      overflow: hidden;
      position: relative;
      color: #252423;
      ${'' /* margin-bottom: .6rem; */}
      ${'' /* min-width: 10.6rem; */}
    `}

  ${({ author, platform }) =>
    author === 'user' &&
    css`
      ${'' /* float: right; */}
      ${'' /* background: ${({ platform }) => platform === 'teams' ? "#e5e5f1" : "#0084ff"}; */}
      ${({ platform }) =>
        platform === 'teams' &&
        css`
          background: #e5e5f1;
        `}
      ${({ platform }) =>
        platform === 'messenger' &&
        css`
          background: #0084ff;
        `}
      ${({ platform }) =>
        platform === 'workplace' &&
        css`
          background: #373e4d;
        `}
      color: ${({ platform }) => platform === 'teams' ? "#252423" : "#fff"};
    `}
`;

const Meta = styled.div`
  display: ${({ platform }) => platform === 'teams' ? "flex" : "none"};
  flex-grow: 1;
  font-size: .8rem;
`;

export default function Text({ className, data: { id, message, title, platform, author, date, user, button }}) {
  return (
      <Message author={author} platform={platform}>
        <MainMessage className={className} button={button} platform={platform} author={author}>
          <Meta platform={platform}>
            {author} {date}
          </Meta>
          {message}
        </MainMessage>
        {/* {
          (button) ?
            <ButtonList key={button.id} platform={button.platform} buttons={button.button} />
          : null
          }
          {
          (Button) ?
            <Button platform={platform} />
          : null
        } */}
        {
          (button) ?
            <ButtonList platform={platform} buttons={button} />
          : null
        }
      </Message>
  );
}
