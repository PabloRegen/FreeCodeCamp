/*  Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Here are some helpful links:  RegExp  String.replace()  */


// Solution #1: RegEx and replace method
function spinalCase(str) {
    // 1st separate adjacent lower from upper cases with a space in between. Then replace space & underscore with a dash. Finnaly replace all letters to lower case
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/[ _]/g, '-').toLowerCase();
}


// Solution #2
function spinalCase(str) {
    // 1st replace space & underscore with a dash. Then separate adjacent lower from upper cases with a dash. Finnaly replace all letters to lower case
    return str.replace(/[ _]/g, '-').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}


console.log(spinalCase("This Is Spinal Tap"))// should return "this-is-spinal-tap".
console.log(spinalCase("thisIsSpinalTap"))//  should return "this-is-spinal-tap".
console.log(spinalCase("The_Andy_Griffith_Show"))//  should return "the-andy-griffith-show".
console.log(spinalCase("Teletubbies say Eh-oh"))// should return "teletubbies-say-eh-oh".