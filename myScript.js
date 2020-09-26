var date = new Date(Date.UTC(2012, 11, 12, 11, 35, 32));

// toLocaleTimeString() without arguments depends on the implementation,
// the default locale, and the default time zone
// console.log(date.toLocaleTimeString());
// → "7:00:00 PM" if run in en-US locale with time zone America/Los_Angeles

// Depending on timezone, your results will vary
const event = new Date('August 19, 1975 23:15:30 GMT+00:00');

// console.log(event.toLocaleTimeString('en-US'));
// expected output: 1:15:30 AM

// console.log(event.toLocaleTimeString('it-IT'));
// expected output: 01:15:30
// function myFunction() {
//     var d = new Date();
//     var n = d.toLocaleTimeString();
//     document.getElementById("demo").innerHTML = n;
// }

function myFunction() {
    var d = new Date();
    var n = d.toLocaleTimeString("tr-TR");
    document.getElementById("demo").innerHTML = n;
}