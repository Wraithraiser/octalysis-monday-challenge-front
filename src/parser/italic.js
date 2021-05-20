import { parseInsideText } from '.';

function italicParser(text) {
  const italicRegex = /_([^\s*][\s\S]*?)_/g;
  return text.replace(italicRegex, italicTextReplacer);
}

function italicTextReplacer(match, firstCapturingGroup) {
  return /\S$/.test(firstCapturingGroup) ? parseInsideText(firstCapturingGroup, '<em>', '</em>') : match;
}

export { italicParser };
