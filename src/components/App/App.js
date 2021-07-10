import './App.css';
import styled from 'styled-components/macro';
import { useEffect, useState } from 'react';
import { fetchMessages, getHtmlMessage, getHtmlReply } from '../../messages';
import { getCurrentMonth, getCurrentYearString } from '../../utils/date';
import YearDropdown from '../YearDropdown';
import MonthDropdown from '../MonthDropdown';

import '@reach/listbox/styles.css';
import Header from '../Header/Header';

function App() {
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
      <Header />
      <Main>
        <DateWrapper>
          <YearDropdown year={year} setYear={setYear} />
          <MonthDropdown month={month} setMonth={setMonth} />
          <button type="button" onClick={handleSearch}>
            Search
          </button>
        </DateWrapper>
        {messages.length > 0 ? (
          <MessageWrapper dangerouslySetInnerHTML={{ __html: messagesHtml }} />
        ) : (
          <p>No messages</p>
        )}
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 64px 32px;
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const DateWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const MessageWrapper = styled.div`
  white-space: pre-wrap;
  padding-top: 32px;
`;

export default App;
