import { EmojiConvertor } from 'emoji-js';

function emojiParser(text) {
  const emoji = new EmojiConvertor();
  emoji.replace_mode = 'unified';
  return emoji.replace_colons(text);
}

export { emojiParser };
