const { expect } = require("chai")
const valueExtractor = require('../dist/value-extractor')

describe('extractValues', () => {
  it('should extract values from a string using default delimiters', () => {
    const values = valueExtractor('/2012/08/12/test.html', '/{year}/{month}/{day}/{title}.html');
    expect(values).to.deep.equal({ "year": "2012", "month": "08", "day": "12", "title": "test" });
  });
  
  it('should extract values from a string using custom delimiters', () => {
    const values = valueExtractor('John Doe (john@example.com) (http://example.com)', '<name> (<email>) (<url>)', {
        delimiters:['<','>']
    });
    expect(values).to.deep.equal({
        name: 'John Doe',
        email: '(john@example.com)',
        url: '(john@example.com)'
      });
  });

  it('should return an empty object if the string does not match the pattern', () => {
    const values = valueExtractor('Convert to Kilograms', 'convert {quantity} {from_unit} to {to_unit}');
    expect(values).to.deep.equal({});
  });
});
