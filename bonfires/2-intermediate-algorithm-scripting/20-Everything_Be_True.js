/*  Check if the predicate (second argument) returns truthy (defined) for all elements of a collection (first argument).

For this, check to see if the property defined in the second argument is present on every element of the collection.

Remember, you can access object properties through either dot notation or [] notation.

Here are some helpful links:  Object.hasOwnProperty()  Object.getOwnPropertyNames()  */

/*  NOTE from MDN:

The Object.getOwnPropertyNames() method returns an array of all properties (enumerable or not) found directly upon a given object.

If you want only the enumerable properties, see Object.keys() or use a for...in loop 
(although note that this will return enumerable properties not found directly upon that object but also along the prototype chain for the object 
unless the latter is filtered with hasOwnProperty()).

The Object.keys() method returns an array of a given object's own enumerable properties, in the same order as that provided by a for...in loop 
(the difference being that a for-in loop enumerates properties in the prototype chain as well).
*/


// Solution #1
function every(collection, pre) {
    if (typeof pre === 'string') {
        return collection.every(function(obj) {
            return obj.hasOwnProperty(pre);
        });
    }

    var preKey = Object.getOwnPropertyNames(pre); // preKey becomes the only property defined in the second argument when pre is an object
    return collection.every(function(obj) {
        return obj.hasOwnProperty(preKey) && obj[preKey] === pre[preKey]; // check that object has the key and same value for that key. The value would be pre[preKey[i]] when the object has more than 1 key
    });
}


console.log(every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))// should return true.
console.log(every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], {"sex": "female"}))// should return false.
console.log(every([{"user": "Tinky-Winky", "sex": "female"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], {"sex": "female"}))// should return false.