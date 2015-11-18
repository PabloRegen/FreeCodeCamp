/*  Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Here are some helpful links:  Array.indexOf()  Array.push()  Array.join()  String.substr()  String.split()   */


// Solution #1
function translate(str) {
    if (str[0] == 'a' || str[0] == 'e' || str[0] == 'i' || str[0] == 'o' || str[0] == 'u') { // Check if the first character is a vowel
	      return str + 'way';
    } else {
        for (var i = 0; i < str.length; i++) { // loop thru str to check where the 1st vowel is located
            if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
    	          return str.slice(i) + str.slice(0, i) + 'ay';
            }
        }
    }
}


// Solution #2: Similar to solution #1 but using str.match(regexp).
function translate(str) {
    if (str[0].match(/[aeiou]/i)) {  // Check if the first character is a vowel
        return str + 'way';
    } else {
        for (var i = 0; i < str.length; i++) {
            if (str[i].match(/[aeiou]/i)) {
                return str.slice(i) + str.slice(0, i) + 'ay';
            }
        }
    }
}



console.log(translate("california")) // should return "aliforniacay".
console.log(translate("paragraphs")) //  should return "aragraphspay".
console.log(translate("glove")) //  should return "oveglay".
console.log(translate("algorithm")) //  should return "algorithmway".
console.log(translate("eight")) //  should return "eightway".