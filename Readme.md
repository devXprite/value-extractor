## value-extractor

The String Value Extractor is a simple and easy-to-use JavaScript library that allows you to extract values from a string based on a pattern. It is useful when you have a string with a predictable structure and you want to extract specific values from it.


<!-- for cdn -->
### CDN

Use directly in the browser with [jsDelivr](https://www.jsdelivr.com/package/npm/value-extractor) or [unpkg](https://unpkg.com/value-extractor/).

```html 
<!DOCTYPE html>
<html>
    <body>
        <script src="https://cdn.jsdelivr.net/npm/value-extractor@latest"></script>
        <script>
        const str = "change 100 kg to pounds";
        const pattern = "change {quantity} {from_unit} to {to_unit}";
    
        const values = valueExtractor(str, pattern);
        console.log(values)
        // OUTPUT :
        // {
        //     quantity: "100",
        //     from_unit: "kg",
        //     to_unit: "pounds"
        // }
        </script>
    </body>
</html>
```

### Install as a NPM package

To install `value-extractor` package, run the following command:
```bash
npm i value-extractor
```
### Usage
To use the String Value Extractor, import the extractValues function and call it with a string and a pattern:

```javascript
import valueExtractor from 'value-extractor';

const values = valueExtractor('/2012/08/12/test.html', '/{year}/{month}/{day}/{title}.html');

console.log(values);
// Output: { "year": "2012", "month": "08", "day": "12", "title": "test" }
```
The `extractValues` function returns an object with keys based on the pattern, and values based on the extracted values.