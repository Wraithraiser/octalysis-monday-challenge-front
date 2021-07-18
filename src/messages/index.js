import * as R from 'ramda';
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
      const sortByTimestamp = R.sortBy(R.prop('ts'));
      const sortedMessages = sortByTimestamp(messages);
      console.log('messages: ', sortedMessages);
      setMessages(sortedMessages);
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

function getHtmlReplyButton(id) {
  return htmlStringTag`
    <button id="js-button-open-reply-${id}" type="button" data-id=${id} class="reply-button reply-button-show">See Replies</button>
  `;
}

function getHtmlReply(reply) {
  return htmlStringTag`
    <p class="slack-message slack-reply">
      ${messageParsing(reply)}
    </p>
  `;
}

function getHtmlReplyContainer(replies, id) {
  return htmlStringTag`
    <div id=${id} class="reply-container reply-container-hide">
      ${replies}
    </div>
    <button id="js-button-close-reply-${id}" type="button" data-id=${id} class="reply-button button-reply-hide">Hide Replies</button>
  `;
}

export { fetchMessages, getHtmlMessage, getHtmlReplyButton, getHtmlReply, getHtmlReplyContainer };
