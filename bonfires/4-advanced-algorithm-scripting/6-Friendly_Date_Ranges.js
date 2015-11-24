/*  Implement a way of converting two dates into a more friendly date range that could be presented to a user.

It must not show any redundant information in the date range.

For example, if the year and month are the same then only the day range should be displayed.

Secondly, if the starting year is the current year, and the ending year can be inferred by the reader, the year should be omitted.

Input date is formatted as YYYY-MM-DD

Here are some helpful links:  String.split()  String.substr()  parseInt()  */


// Solution #1
function friendly(str) {

    var now = new Date();
    var currentYear = now.getFullYear();

    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var y0 = parseInt(str[0].slice(0,4)), 
        y1 = parseInt(str[1].slice(0,4)),
        m0 = parseInt(str[0].slice(5,7)),
        m1 = parseInt(str[1].slice(5,7)),
        d0 = parseInt(str[0].slice(8)),
        d1 = parseInt(str[1].slice(8));

    function dayEnd(day) {
        if (day === 1 || day === 21 || day === 31) {return day + 'st';}
        else if (day === 2 || day === 22) {return day + 'nd';}
        else if (day === 3 || day === 23) {return day + 'rd';}
        else {return day + 'th';}
    }

    if (str[0] === str[1]) {return [month[m0 - 1] + ' ' + dayEnd(d0)  + ', ' +  y0];} // case same dates

    if (y0 === y1) {
        if (m0 === m1) {return [month[m0 - 1] + ' ' + dayEnd(d0) ,  dayEnd(d1)];}
        return [month[m0 - 1] + ' ' + dayEnd(d0) , month[m1 - 1] + ' ' + dayEnd(d1)];
    }

    if (y0 === currentYear && y1 === y0 + 1) {return [month[m0 - 1] + ' ' + dayEnd(d0) , month[m1 - 1] + ' ' + dayEnd(d1)];}

    return [month[m0 - 1] + ' ' + dayEnd(d0) + ', ' + y0 , month[m1 - 1] + ' ' + dayEnd(d1) + ', ' + y1];
}



console.log(friendly(["2015-07-01", "2015-07-04"])) //  should return ["July 1st","4th"].
console.log(friendly(["2015-12-01", "2016-02-03"])) //  should return ["December 1st","February 3rd"].
console.log(friendly(["2015-12-01", "2017-02-03"])) //  should return ["December 1st, 2015","February 3rd, 2017"].
console.log(friendly(["2016-03-01", "2016-05-05"])) //  should return ["March 1st","May 5th"]
console.log(friendly(["2017-01-01", "2017-01-01"])) //  should return ["January 1st, 2017"].
console.log(friendly(["2022-09-05", "2023-09-04"])) //  should return ["September 5th, 2022","September 4th, 2023"].