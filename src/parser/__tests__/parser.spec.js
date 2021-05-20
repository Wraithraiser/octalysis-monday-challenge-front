import { boldParser } from '../bold';
import { italicParser } from '../italic';
import { italicBoldCombinationParser } from '../italic-bold';
import { slackQuoteParser } from '../slack-quote';

test('bold text parser', () => {
  const boldMessage = 'This *word* is bold';
  const expectedBoldMessage = 'This <b>word</b> is bold';

  const parsedBoldMessage = boldParser(boldMessage);

  expect(parsedBoldMessage).toBe(expectedBoldMessage);
});

test('italic text parser', () => {
  const italicMessage = 'This _word_ is italic';
  const expectedItalicMessage = 'This <em>word</em> is italic';

  const parsedItalicMessage = italicParser(italicMessage);

  expect(parsedItalicMessage).toBe(expectedItalicMessage);
});

test('italic and bold or bold and italic text parser', () => {
  const italicBoldMessage = 'This _*word*_ is italic and inside bold';
  const boldItalicMessage = 'This *_word_* is bold and inside italic';
  const expectedItalicBoldMessage = 'This <em><b>word</b></em> is italic and inside bold';
  const expectedBoldItalicMessage = 'This <b><em>word</em></b> is bold and inside italic';

  const italicBoldMessageResult = italicBoldCombinationParser(italicBoldMessage);
  const boldItalicMessageResult = italicBoldCombinationParser(boldItalicMessage);

  expect(italicBoldMessageResult).toBe(expectedItalicBoldMessage);
  expect(boldItalicMessageResult).toBe(expectedBoldItalicMessage);
});

test('slack quote text parser', () => {
  const slackQuoteMessage = 'This is a slack quote <!channel>';
  const expectedSlackQuoteMessage = 'This is a slack quote &lt;!channel&gt;';

  const slackQuoteMessageResult = slackQuoteParser(slackQuoteMessage);

  expect(slackQuoteMessageResult).toBe(expectedSlackQuoteMessage);
});
