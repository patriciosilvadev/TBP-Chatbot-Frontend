import React from 'react';
import styled, { css } from 'styled-components';

import QuickReply from '../QuickReply/QuickReply';

import "../../index.css"

const Message = styled.div`
  ${'' /* display: flex; */}
  position: relative;
  clear: both;
  margin-bottom: 5px;
  font-family: Helvetica, Arial, sans-serif;
  float: ${({ author }) => author === 'user' ? "right" : "left"};
  ${({ platform, quickreplies }) =>
    platform === 'teams' &&
    css`
      ${'' /* background-color: #fff; */}
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
  display: inline-block;
  font-size: 14px;
  max-width: 95%;
  margin: 1px 0;
  border-radius: 30px;
  background: #eee;
  float: left;
  border-bottom-left-radius: ${({ button }) => button ? "5px" : null};

  border-bottom-left-radius: ${({ button }) => button ? "5px" : null};

  ${({ platform }) =>
    platform === 'teams' &&
    css`
      padding: .8rem 1.6rem .8rem 1.6rem;
      border-radius: 3px;
      overflow: hidden;
      position: relative;
      color: #252423;
      background: #fff;
      ${'' /* margin-bottom: .6rem; */}
      min-width: 10.6rem;
    `}

  ${({ author, platform }) =>
    author === 'user' &&
    css`
      float: right;
      background: ${({ platform }) => platform === 'teams' ? "#e5e5f1" : "#0084ff"};
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

export default function Text({ button: Button, className, addMessage, data: { title, platform, author, date, user, quickreplies }}) {
  return (
      <Message author={author} platform={platform} quickreplies={quickreplies}>
        <MainMessage className={className} button={Button} platform={platform} author={author}>
          <Meta platform={platform}>
            {author} {date}
          </Meta>
          {title}
        </MainMessage>
        {
          (Button) ?
            <Button platform={platform} />
          : null
        }
        {
          (quickreplies) ?
            <QuickReply platform={platform} quickreplies={quickreplies} addMessage={addMessage} />
          : null
        }

      </Message>
  );
}
