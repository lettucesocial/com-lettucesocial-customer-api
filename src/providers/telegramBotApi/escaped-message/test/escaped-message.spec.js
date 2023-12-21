const  buildEscapedMessageForMarkdownV2Style = require('../src/escaped-message');

const escapedMessageForMarkdownV2Style = buildEscapedMessageForMarkdownV2Style();

describe('escapedMessageForMarkdownV2Style', () => {
  it('should throw an error if no text is provided', () => {
    expect(() => escapedMessageForMarkdownV2Style({})).toThrowError('escapedMessageForMarkdownV2Style must have text.');
  });

  it('should escape all of the characters in the scapeCharacterList array', () => {
    const text = 'بسته 1.5 گیگابایت (2 تا 6 عصر)';
    const escapedMessage = escapedMessageForMarkdownV2Style({ text });

    expect(escapedMessage).toEqual('بسته 1\\.5 گیگابایت \\(2 تا 6 عصر\\)');
  });
});