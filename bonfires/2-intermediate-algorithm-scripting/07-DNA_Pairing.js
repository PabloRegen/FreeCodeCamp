/*  The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Here are some helpful links:  Array.push()  String.split()  */ 


// Solution #1
function pair(str) {
    var DNA = [];

    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'A') {DNA.push(['A', 'T'])} 
        else if (str[i] === 'T') {DNA.push(['T', 'A'])}
        else if (str[i] === 'C') {DNA.push(['C', 'G'])}
        else {DNA.push(['G', 'C'])}
    }
    return DNA;
}


// Solution #2: Using Switch
function pair(str) {
    var DNA = [];

    for (var i = 0; i < str.length; i++) {
        paired(str[i]);
    }

    function paired(l) {
        switch (l) {
            case 'A':
                DNA.push(['A', 'T']);
                break;
            case 'T':
                DNA.push(['T', 'A']);
                break;
            case 'C':
                DNA.push(['C', 'G']);
                break;
            case 'G':
                DNA.push(['G', 'C']);
                break;
            default:
                return [' ', ' '];
        }
    }
    return DNA;
}


console.log(pair("ATCGA")) // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
console.log(pair("TTGAG")) // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
console.log(pair("CTCTA")) // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].