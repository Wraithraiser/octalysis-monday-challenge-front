import { parseInsideText } from '.';

function boldParser(text) {
  const boldRegex = /\*([^\s*][\s\S]*?)\*/g;
  return text.replace(boldRegex, boldTextReplacer);
}

function boldTextReplacer(match, firstCapturingGroup) {
  return /\S$/.test(firstCapturingGroup) ? parseInsideText(firstCapturingGroup, '<b>', '</b>') : match;
}

export { boldParser };
