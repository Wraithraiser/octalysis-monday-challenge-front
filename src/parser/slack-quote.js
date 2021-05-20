import { parseInsideText } from '.';

function slackQuoteParser(text) {
  const slackQuoteRegex = /<(.*?)>/g;
  return text.replace(slackQuoteRegex, slackQuoteTextReplacer);
}

function slackQuoteTextReplacer(match, firstCapturingGroup) {
  return /\S$/.test(firstCapturingGroup) ? parseInsideText(firstCapturingGroup, '&lt;', '&gt;') : match;
}

export { slackQuoteParser };
