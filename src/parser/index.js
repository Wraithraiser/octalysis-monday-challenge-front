import * as R from 'ramda';
import { boldParser } from './bold';
import { emojiParser } from './emoji';
import { italicParser } from './italic';
import { italicBoldCombinationParser } from './italic-bold';
import { slackQuoteParser } from './slack-quote';

function messageParsing(message) {
  return R.compose(boldParser, italicParser, italicBoldCombinationParser, emojiParser, slackQuoteParser)(message);
}

function parseInsideText(text, replaceLeft, replaceRight) {
  return replaceLeft + text + replaceRight;
}

export { parseInsideText, messageParsing };
