import { parseInsideText } from '.';

function italicBoldCombinationParser(text) {
  const italicBoldCombinationRegex = /_\*([^\s*][\s\S]*?)\*_|\*_([^\s*][\s\S]*?)_\*/g;
  return text.replace(italicBoldCombinationRegex, italicBoldCombinationTextReplacer);
}

function italicBoldCombinationTextReplacer(match, firstCapturingGroup, secondCapturingGroup) {
  if (firstCapturingGroup) {
    return /\S$/.test(firstCapturingGroup) ? parseInsideText(firstCapturingGroup, '<em><b>', '</b></em>') : match;
  }
  if (secondCapturingGroup) {
    return /\S$/.test(secondCapturingGroup) ? parseInsideText(secondCapturingGroup, '<b><em>', '</em></b>') : match;
  }
}

export { italicBoldCombinationParser };
