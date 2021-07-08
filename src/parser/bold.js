import { parseInsideText } from '.';

function boldParser(text) {
  const multipleAsterisk = /\*{2,}/g;
  const textWithoutMultipleAsterisk = text.replace(multipleAsterisk, '');

  const textWithoutNonBreakingSpace = textWithoutMultipleAsterisk.replace(/\u00a0/g, ' ');

  const textWithoutSpaceAsterisk = textWithoutNonBreakingSpace.replace(/\*\s\*/, ' ');

  const boldRegex = /\*([^\s*][\s\S]*?)\*/g;
  return textWithoutSpaceAsterisk.replace(boldRegex, boldTextReplacer);
}

function boldTextReplacer(match, firstCapturingGroup) {
  return /\S$/.test(firstCapturingGroup) ? parseInsideText(firstCapturingGroup, '<b>', '</b>') : match;
}

export { boldParser };
