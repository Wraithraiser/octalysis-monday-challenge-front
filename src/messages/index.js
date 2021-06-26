import { messageParsing } from '../parser';
import { getCurrentYearString, getCurrentMonth } from '../utils/date';

function getApiUri(forceProduction = false) {
  if (forceProduction === true) {
    return `https://octalysis-proxy-server-svu2hashgq-ew.a.run.app`;
  }
  return process.env.NODE_ENV !== 'production'
    ? `http://localhost:3030`
    : `https://octalysis-proxy-server-svu2hashgq-ew.a.run.app`;
}

async function fetchMessages(setMessages, year = getCurrentYearString(), month = getCurrentMonth()) {
  const url = `${getApiUri()}/api/messages?year=${year}&month=${month}`;
  try {
    const response = await fetch(url, { method: 'GET' });
    if (response.ok) {
      const messages = await response.json();
      console.log('messages: ', messages);
      setMessages(messages);
    } else {
      console.log('response: ', response);
    }
  } catch (err) {
    console.error('Error on fetch: ', err);
  }
}

function htmlStringTag(htmlStrings, ...expressionValues) {
  let htmlStringWithoutWhitespace = '';
  for (let i = 0; i < expressionValues.length; i += 1) {
    htmlStringWithoutWhitespace += htmlStrings[i].replace(/\s+.\s+/g, '') + expressionValues[i];
  }
  htmlStringWithoutWhitespace += htmlStrings[expressionValues.length].replace(/\s+.\s+/g, '');
  return htmlStringWithoutWhitespace;
}

function getHtmlMessage(message) {
  return htmlStringTag`
    <p class="slack-message">
      ${messageParsing(message)}
    </p>
  `;
}

function getHtmlReply(reply) {
  return htmlStringTag`
    <p class="slack-replies">
      ${messageParsing(reply)}
    </p>
  `;
}

export { fetchMessages, getHtmlMessage, getHtmlReply };
