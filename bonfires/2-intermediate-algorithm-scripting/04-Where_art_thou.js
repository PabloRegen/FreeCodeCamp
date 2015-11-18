/*  Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). 
Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, 
if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), 
because it contains the property and it's value, that was passed on as the second argument.

Here are some helpful links:  Global Object   Object.hasOwnProperty()   Object.keys()  */ 


// Solution #1: Get sources' keys with for...in method
function where(collection, source) {
    return collection.filter(function(obj) {
        for (var key in source) {
            if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {  // check if the obj in collection doesn't have the key or if the values for that key don'tt match
                return false;
            }
        }
        return true;
    });
}


// Solution #2: Get sources' keys with Object.keys(obj)
function where(collection, source) {
    var srcKeys = Object.keys(source);  // declares srcKeys as an array wich elements are the source object keys

    return collection.filter(function(obj) {
        for (var i = 0; i < srcKeys.length; i++) {
            if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
                return false;
            }
        }
        return true;
    });
}


// Solution #3: From FreeCodeCamp: https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Bonfire-Where-art-thou
function where(collection, source) {
    var srcKeys = Object.keys(source);

    return collection.filter(function(obj) {
        return srcKeys.every(function(key) {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        });
    });
}



console.log(where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })) 
// should return [{ first: "Tybalt", last: "Capulet" }].
console.log(where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 })) 
// should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
console.log(where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }))
// should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].