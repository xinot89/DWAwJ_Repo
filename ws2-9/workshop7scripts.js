/*
function parseData (toWhere) {
    //towhereen kohdediv:n nimi.
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","workshop7.xml",true);
    xmlhttp.send();
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 &&xmlhttp.status==200) {
            document.getElementById(toWhere).innerHTML=
            xmlhttp.responseText;
        }
    }
}
*/
function parseData (toWhere) {
    // Get the XML content
    var xmlContent = document.getElementById("exc1xmlcontents").innerHTML;
    // Create a new DOM parser
    var parser = new DOMParser();
    // Parse the XML content
    var xmlDoc = parser.parseFromString(xmlContent, "text/xml");
    // Access elements in the parsed XML
    var quotes = xmlDoc.querySelectorAll('quotes');
    //Empty previous data from output:
    document.getElementById(toWhere).innerHTML = "";
    quotes.forEach(function(quote) {
        var quoteText = quote.querySelector('quote').textContent;
        var author = quote.querySelector('author').textContent;
        //console.log("Quote: " + quoteText);
        //console.log("Author: " + author);
        document.getElementById(toWhere).innerHTML += "Quote: " + quoteText + "<br>Author: " + author + "<br>";
    });
}
function parseDataa (toWhere) {
    // Get the XML content
    var xmlContent = document.getElementById("exc1xmlcontents").innerHTML;
    // Create a new DOM parser
    var parser = new DOMParser();
    // Parse the XML content
    var xmlDoc = parser.parseFromString(xmlContent, "text/xml");
    // Access elements in the parsed XML
    var quotes = xmlDoc.querySelectorAll('quotes');
    //Empty previous data from output:
    document.getElementById(toWhere).innerHTML = "";
    quotes.forEach(function(quote) {
        var quoteText = quote.querySelector('quote').textContent;
        var author = quote.querySelector('author').textContent;
        //console.log("Quote: " + quoteText);
        //console.log("Author: " + author);
        document.getElementById(toWhere).innerHTML += "Quote: " + quoteText + "<br>Author: " + author + "<br>";
    });
}
//Own XML file: https://kp51s.dynv6.net/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855.xml
//loadXMLFile is used for exercise 2 (at least)
function loadXMLFile() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://kp51s.dynv6.net/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855.xml",true);
    xmlhttp.send();
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 &&xmlhttp.status==200) {
            document.getElementById("bookCatalog").innerHTML=
            xmlhttp.responseText;
        }
    }
}
//Seuraava suoraan tehtävästä:
function loadXMLDoc() {
    // Create AJAX object
    var xmlhttp = new XMLHttpRequest();
    // Specify the data / url to be fetched
    xmlhttp.open("GET", "https://kp51s.dynv6.net/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855.xml", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                // find myDiv and insert results there
                document.getElementById("bookCatalog").innerHTML = xmlhttp.responseText;
            }
    }
}