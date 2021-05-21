import './App.css';
import { useEffect, useState } from 'react';
import { fetchMessages } from './messages';
import { messageParsing } from './parser';

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
        messagesText.push(`<p class="slack-message">${messageParsing(message.text)}</p>`);
      }
      setMessagesHtml(messagesText.join(''));
    }
  }, [messages]);

  return (
    <div className="App">
      <div className="app-container">
        <header className="app-header"></header>
        <main className="main-container">
          <div className="messages-container">
            <div style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: messagesHtml }} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
