/*  Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe), in a string to their corresponding HTML entities.

Here are some helpful links:  RegExp  HTML Entities  */


// Solution #1
function convert(str) {
    for (var i = 0; i < str.length; i++) {
  	    if (str[i] === '&') {str = str.slice(0, i) + '&​amp;' + str.slice(i+1)}
  	    else if (str[i] === '<') {str = str.slice(0, i) + '&​lt;' + str.slice(i+1)}
  	    else if (str[i] === '>') {str = str.slice(0, i) + '&​gt;' + str.slice(i+1)}
  	    else if (str[i] === '"') {str = str.slice(0, i) + '&​quot;' + str.slice(i+1)}
  	    else if (str[i] === "'") {str = str.slice(0, i) + '&​apos;' + str.slice(i+1)}
    }
    return str;
}


// Solution #2
function convert(str) {
    var arr = str.split('');  // Neeed to convert to array because a string is inmutable and can't modify str[i] as in arr[i] below

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === '&') {arr[i] =  '&​amp;'}
        else if (arr[i] === '<') {arr[i] = '&​lt;'}
        else if (arr[i] === '>') {arr[i] = '&​gt;'}
        else if (arr[i] === '"') {arr[i] = '&​quot;'}
        else if (arr[i] === "'") {arr[i] = '&​apos;'}
    }
    return arr.join('');
}


// Solution #3: Switch
function convert(str) {
    var arr = str.split('');

    for (var i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '&':
                arr[i] = '&amp;';
                break;
            case '<':
                arr[i] = '&lt;';
                break;
            case '>':
                arr[i] = '&gt;';
                break;
            case '"':
                arr[i] = '&quot;';
                break;
            case "'":
                arr[i] = '&apos;';
                break;
        }
    }
    return arr.join('');
}


// Solution #4: From FreeCodeCamp github solutions. Using replace and RegEx
function convert(str) {

    //create new object html with requested html keys and corresponding entities as values
    var html = {
       "&": "&amp;",
       "<": "&lt;",
       ">": "&gt;",
       "\"": "&quot;",
       "\'": "&apos;"
    };

    return str.replace(/&|<|>|"|'/g, function(matched){ return html[matched]; });
}


console.log(convert("Dolce & Gabbana")) // should return Dolce &​amp; Gabbana.
console.log(convert("Hamburgers < Pizza < Tacos")) //  should return Hamburgers &​lt; Pizza &​lt; Tacos.
console.log(convert("Sixty > twelve")) //  should return Sixty &​gt; twelve.
console.log(convert('Stuff in "quotation marks"')) //  should return Stuff in &​quot;quotation marks&​quot;.
console.log(convert("Shindler's List")) //  should return Shindler&​apos;s List.
console.log(convert("<>")) //  should return &​lt;&​gt;.
console.log(convert("abc")) //  should return abc.
