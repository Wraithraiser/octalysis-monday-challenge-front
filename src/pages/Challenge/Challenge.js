import './Challenge.css';
import styled from 'styled-components/macro';
import { useEffect, useState } from 'react';

import { WEIGHTS } from '../../utils/constants';
import { fetchMessages, getHtmlMessage, getHtmlReply } from '../../messages';
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
          for (let i = 1; i < replies.length; i += 1) {
            messagesText.push(getHtmlReply(replies[i].text));
          }
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
      {messages.length > 0 ? <MessageWrapper dangerouslySetInnerHTML={{ __html: messagesHtml }} /> : <p>No messages</p>}
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
