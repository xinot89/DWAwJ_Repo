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
Automaattinen funktion laukaisu säätöä varten:*/
document.addEventListener('DOMContentLoaded', () => {
    loadAndParseXML();
});
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
//for exercise 3:
//Originally function loadXMLFile()
function loadAndParseXML() {
    //targetid "tabledata"
    //Plan: Tyhjennä taulukko, lataa tiedot, tee loopilla funktion työmuistiin kaikki rivit valmiiksi.
    //appendaa työmuistista kamat taulukkoon.
    var parser = new DOMParser();
    var xmlhttp = new XMLHttpRequest();
    //var xmlDoc = parser.parseFromString(xmlhttp, "text/xml");
    const taskList = document.getElementById('tabledata');
    xmlhttp.open("GET","https://kp51s.dynv6.net/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855.xml",true);
    xmlhttp.send();
    xmlhttp.onreadystatechange=function() {
        //Readystatet selostettuna: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
        //Readystate 4 = "The operation is complete"
        if (xmlhttp.readyState==4 &&xmlhttp.status==200) {
            //XML -vastauksen sisältö muuttujaksi:
            //Palauttaa XML -tiedoston sellaisenaan:
            var xmlContent = xmlhttp.responseText;
            var xmlDoc = parser.parseFromString(xmlContent, "text/xml");
            //querySelectorAll palauttaa nodelistan, ei arrayta:
            var catalog = xmlDoc.querySelector('catalog');
            //console.log (catalog.length);
            //Tarviikohan tätä edes: document.getElementById("tabledata").innerHTML=
            //-for each tähän
            //console.log("Omaprint"+catalog[0].querySelector[0]);
            //Kataloginkaivelu alkaa:
            /*
            if (catalog) {
                catalog[0].childNodes.forEach(function(node) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        var selector = node.nodeName;
                        var entries = catalog[0].querySelectorAll(selector);
                        console.log("Entries under", selector, ":");
                        entries.forEach(function(entry) {
                            var id = entry.getAttribute('id');
                            console.log("ID:", id);
                            console.log(entry.innerHTML);
                        });
                    }
                });
            } else {
                console.log("No <catalog> element found in the XML document.");
            }
            */
            //kataloginkaivelu loppuu.
            var books = catalog.querySelectorAll('book');
            books.forEach(function(book) {
                //Tee uusi taulukkorivi:
                var bookRow = document.createElement('tr');
                //Tee uusi sarake
                var idColumn = document.createElement('td');
                var bookId = book.getAttribute('id');
                console.log("ID loopista:", bookId);
                //aseta ID -sarakkeeseen kirjan id.
                idColumn.textContent = bookId;
                bookRow.appendChild(idColumn);
                //luo author -column.
                var authorColumn = document.createElement('td');
                authorColumn.textContent = book.querySelector('author').textContent;
                bookRow.appendChild(authorColumn);
                //Luo title -column.
                var titleColumn = document.createElement('td');
                titleColumn.textContent = book.querySelector('title').textContent;
                bookRow.appendChild(titleColumn);
                //luo genre -column.....ja muut
                var genreColumn = document.createElement('td');
                genreColumn.textContent = book.querySelector('genre').textContent;
                bookRow.appendChild(genreColumn);
                var priceColumn = document.createElement('td');
                priceColumn.textContent = book.querySelector('price').textContent;
                bookRow.appendChild(priceColumn);
                var publishedColumn = document.createElement('td');
                publishedColumn.textContent = book.querySelector('publish_date').textContent;
                bookRow.appendChild(publishedColumn);
                var descriptionColumn = document.createElement('td');
                descriptionColumn.textContent = book.querySelector('description').textContent;
                bookRow.appendChild(descriptionColumn);
                //Tungetaan rivi taulukkoon:
                taskList.appendChild(bookRow);
                });
            xmlhttp.responseText;

        } else {
            console.log("XML -fetch did not succeed. (function loadAndParseXML)")
        }
    }
/*Put aside, next testing with querySelector and much of changes.
function loadAndParseXML() {
    //targetid "tabledata"
    //Plan: Tyhjennä taulukko, lataa tiedot, tee loopilla funktion työmuistiin kaikki rivit valmiiksi.
    //appendaa työmuistista kamat taulukkoon.
    var parser = new DOMParser();
    var xmlhttp = new XMLHttpRequest();
    //var xmlDoc = parser.parseFromString(xmlhttp, "text/xml");
    const taskList = document.getElementById('tabledata');
    xmlhttp.open("GET","https://kp51s.dynv6.net/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855.xml",true);
    xmlhttp.send();
    xmlhttp.onreadystatechange=function() {
        //Readystatet selostettuna: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
        //Readystate 4 = "The operation is complete"
        if (xmlhttp.readyState==4 &&xmlhttp.status==200) {
            //XML -vastauksen sisältö muuttujaksi:
            //Palauttaa XML -tiedoston sellaisenaan:
            var xmlContent = xmlhttp.responseText;
            var xmlDoc = parser.parseFromString(xmlContent, "text/xml");
            //querySelectorAll palauttaa nodelistan, ei arrayta:
            var catalog = xmlDoc.querySelectorAll('catalog');
            console.log (catalog.length);
            //Tarviikohan tätä edes: document.getElementById("tabledata").innerHTML=
            //-for each tähän
            //console.log("Omaprint"+catalog[0].querySelector[0]);
            //Kataloginkaivelu alkaa:
            /*
            if (catalog) {
                catalog[0].childNodes.forEach(function(node) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        var selector = node.nodeName;
                        var entries = catalog[0].querySelectorAll(selector);
                        console.log("Entries under", selector, ":");
                        entries.forEach(function(entry) {
                            var id = entry.getAttribute('id');
                            console.log("ID:", id);
                            console.log(entry.innerHTML);
                        });
                    }
                });
            } else {
                console.log("No <catalog> element found in the XML document.");
            }
            
            //kataloginkaivelu loppuu.
            catalog.forEach(function(book) {
                //Tee uusi taulukkorivi:
                var bookRow = document.createElement('tr');
                //Tee uusi sarake
                var idColumn = document.createElement('td');
                var bookId = book.getAttribute('id');
                console.log("ID loopista:", bookId);
                //aseta ID -sarakkeeseen kirjan id.
                idColumn.textContent = bookId;
                bookRow.appendChild(idColumn);
                //luo author -column.
                var authorColumn = document.createElement('td');
                authorColumn.textContent = book.querySelector('author').textContent;
                bookRow.appendChild(authorColumn);
                //Luo title -column.
                var titleColumn = document.createElement('td');
                titleColumn.textContent = book.querySelector('title').textContent;
                bookRow.appendChild(titleColumn);
                //luo genre -column.....ja muut
                var genreColumn = document.createElement('td');
                genreColumn.textContent = book.querySelector('genre').textContent;
                bookRow.appendChild(genreColumn);
                var priceColumn = document.createElement('td');
                priceColumn.textContent = book.querySelector('price').textContent;
                bookRow.appendChild(priceColumn);
                var publishedColumn = document.createElement('td');
                publishedColumn.textContent = book.querySelector('publish_date').textContent;
                bookRow.appendChild(publishedColumn);
                var descriptionColumn = document.createElement('td');
                descriptionColumn.textContent = book.querySelector('description').textContent;
                bookRow.appendChild(descriptionColumn);
                //Tungetaan rivi taulukkoon:
                taskList.appendChild(bookRow);
                });
            xmlhttp.responseText;

        } else {
            console.log("XML -fetch did not succeed. (function loadAndParseXML)")
        }
    }
    Alkuperäinen funktio loppuu./*


    /*Aarteita projektista:
    const taskRow = document.createElement('tr');
    // Task column
    const taskColumn = document.createElement('td');
    taskColumn.textContent = taskInput.value;
    taskRow.appendChild(taskColumn);
    // Done column
    const doneColumn = document.createElement('td');
    const doneButton = document.createElement('input');
    doneButton.type = "checkbox";
    doneButton.name = "Task done";
    doneButton.addEventListener('change', markTaskAsDone);
    doneColumn.appendChild(doneButton);
    taskRow.appendChild(doneColumn);
    // Remove column
    const removeColumn = document.createElement('td');
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', removeTask);
    removeColumn.appendChild(removeButton);
    taskRow.appendChild(removeColumn);
    // Add task row to the table
    taskList.appendChild(taskRow);
    saveTasks();
    taskInput.value = '';
    */
}