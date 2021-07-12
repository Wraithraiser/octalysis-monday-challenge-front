import './Challenge.css';
import styled from 'styled-components/macro';
import { useEffect, useState } from 'react';

import { WEIGHTS } from '../../utils/constants';
import { fetchMessages, getHtmlMessage, getHtmlReplyButton, getHtmlReply, getHtmlReplyContainer } from '../../messages';
import { getCurrentMonth, getCurrentYearString } from '../../utils/date';
import YearDropdown from '../../components/YearDropdown';
import MonthDropdown from '../../components/MonthDropdown';

import '@reach/listbox/styles.css';

const Challenge = () => {
  const [messages, setMessages] = useState([]);
  const [messagesHtml, setMessagesHtml] = useState('');

  useEffect(() => {
    fetchMessages(setMessages);
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      const messagesText = [];
      for (const message of messages) {
        const replies = message.replies;
        if (replies) {
          messagesText.push(getHtmlMessage(replies[0].text));
          messagesText.push(getHtmlReplyButton(message.client_msg_id));
          let htmlReplies = '';
          for (let i = 1; i < replies.length; i += 1) {
            htmlReplies += getHtmlReply(replies[i].text);
          }
          messagesText.push(getHtmlReplyContainer(htmlReplies, message.client_msg_id));
        } else {
          messagesText.push(getHtmlMessage(message.text));
        }
      }
      setMessagesHtml(messagesText.join(''));
    }
  }, [messages]);

  const [year, setYear] = useState(getCurrentYearString());
  const [month, setMonth] = useState(getCurrentMonth());

  const handleSearch = () => {
    fetchMessages(setMessages, year, month);
  };

  function handleMessageClick(ev) {
    const { id = null } = ev.target.dataset;
    const hideReplyContainerClassname = 'reply-container-hide';
    const hideButtonReplyClassname = 'button-reply-hide';
    const openButtonReplyId = `js-button-open-reply-${id}`;
    const closeButtonReplyId = `js-button-close-reply-${id}`;

    if (ev.target.id === openButtonReplyId) {
      const repliesContainer = document.getElementById(id);
      if (repliesContainer) {
        if (repliesContainer.classList.contains(hideReplyContainerClassname)) {
          repliesContainer.classList.remove(hideReplyContainerClassname);
          ev.target.classList.add(hideButtonReplyClassname);
          const closeButton = document.getElementById(closeButtonReplyId);
          closeButton.classList.remove(hideButtonReplyClassname);
        }
      }
    } else if (ev.target.id === closeButtonReplyId) {
      const repliesContainer = document.getElementById(id);
      if (repliesContainer) {
        if (repliesContainer.classList.contains(hideReplyContainerClassname) === false) {
          repliesContainer.classList.add(hideReplyContainerClassname);
          ev.target.classList.add(hideButtonReplyClassname);
          const showButton = document.getElementById(openButtonReplyId);
          showButton.classList.remove(hideButtonReplyClassname);
        }
      }
    }
  }

  return (
    <>
      <ContentTitle>Octalysis Mini&nbsp;Challenge</ContentTitle>
      <DateWrapper>
        <YearDropdown year={year} setYear={setYear} />
        <MonthDropdown month={month} setMonth={setMonth} />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </DateWrapper>
      {messages.length > 0 ? (
        <MessageWrapper onClick={handleMessageClick} dangerouslySetInnerHTML={{ __html: messagesHtml }} />
      ) : (
        <p>No messages</p>
      )}
    </>
  );
};

const ContentTitle = styled.h2`
  text-align: center;
  margin-bottom: 32px;
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
`;

const DateWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const MessageWrapper = styled.div`
  white-space: pre-wrap;
  padding-top: 32px;
`;

export default Challenge;
