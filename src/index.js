function valueExtractor(string, pattern, options = {}) {
  
  const defaultOptions = {
    delimiters: ['{', '}'],
    partial: false,
  };

  const option = {...defaultOptions, ...options}
  const [startDelimiter, endDelimiter] = option.delimiters;
  
  const regex = new RegExp(pattern.replace(new RegExp(`${startDelimiter}(\\w+)${endDelimiter}`, 'g'), '(.*)?'), 'i')

  // Extract the values from the string
  const values = string.match(regex);
  const result = {};
  if (values) {
    values.shift();

    // Create an object with keys based on the pattern and values based on the extracted values
    let valueIndex = 0;
    pattern.replace(new RegExp(`${startDelimiter}(\\w+)${endDelimiter}`, 'g'), (match, key) => {
      let value = values[valueIndex++];
      result[key] = value !== undefined ? value : null;
    });
  } 
  // else if (partial) {
  //   // Create an object with keys based on the pattern and null values for all keys
  //   pattern.replace(new RegExp(`${startDelimiter}(\\w+)${endDelimiter}`, 'g'), (match, key) => {
  //     result[key] = null;
  //   });
  // }

  return result;
}
module.exports = valueExtractor;