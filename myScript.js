function myFunction() {
    var date = new Date();
    var n = date.toLocaleTimeString("tr-TR");
    document.getElementById("demo").innerHTML = n;
}