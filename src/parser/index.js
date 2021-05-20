import { boldParser } from './bold';
import { italicParser } from './italic';
import { italicBoldCombinationParser } from './italic-bold';
import { slackQuoteParser } from './slack-quote';

function messageParsing(message) {
  return boldParser(italicParser(italicBoldCombinationParser(slackQuoteParser(message))));
}

function parseInsideText(text, replaceLeft, replaceRight) {
  return replaceLeft + text + replaceRight;
}

export { parseInsideText, messageParsing };
