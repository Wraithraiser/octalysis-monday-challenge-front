import './App.css';
import { useEffect, useState } from 'react';
import { fetchMessages, getHtmlMessage, getHtmlReply } from './messages';

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
