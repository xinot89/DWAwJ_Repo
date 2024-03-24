var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
//Set exercise 1 div to usable constant for functions:
const databox = document.getElementById("jsondata");
//Set exercise 2 div to usable constant for functions:
const rawdatabox = document.getElementById("rawdata");
//Url for exercise 2 functions:
const dataurl = "http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750";
//Function to load automatically for debug purposes:
document.addEventListener('DOMContentLoaded', () => {
    loadandparse();
});

//Functions for exercise 1:
function showFnameLnameOnly() {
    var workers = JSON.parse(text);
    databox.innerHTML = "";
    workers.employees.forEach(element => {
        //console.log("Foreach pyörähti, element: " + element.firstName +" "+ element.lastName);
        databox.innerHTML += element.firstName +" "+ element.lastName+"<br>";
    });
}
function displayAllData() {
    databox.innerHTML = text;
}

//Functions for exercise 2:
/*Made these functions "async" and made them wait for other function as otherwise it would only
set [object Promise] as variable.*/
async function loadrawdata() {
    //const output = await fetch4exc2();
    rawdatabox.innerHTML = await fetch4exc2();
    //console.log("loadrawdata saanti: "+ output);
}
async function loadandparse() {
    rawdatabox.innerHTML = "";
    //Out of use until table formatting is done.
    inputJSON = await fetch4exc2();
    var exc2data = JSON.parse(inputJSON);
    //Working way to get first title out of JSON:
    //console.log(exc2data.Search[0].Title);
    const datatable = document.createElement('table');
    const tablehead = document.createElement('thead');
    const tablebody = document.createElement('tbody');
    const tablerow = document.createElement('tr');
    const headingTitle = document.createElement('th')
    const headingYear = document.createElement('th')
    const headingImdbId = document.createElement('th')
    const headingType = document.createElement('th')
    const headingPoster = document.createElement('th')
    //Seems like appended td's get affected of reusing same variable....
    const universalTd = document.createElement('td');
    /*First i planned separate cell creating variable for each,
    but then thought that it wouldn't improve anything.
*/
    //Hardcoded titles:
    headingTitle.textContent = "Title";
    tablerow.appendChild(headingTitle);
    headingYear.textContent = "Year";
    tablerow.appendChild(headingYear);
    headingImdbId.textContent = "IMDB ID";
    tablerow.appendChild(headingImdbId);
    headingType.textContent = "Type";
    tablerow.appendChild(headingType);
    headingPoster.textContent = "Poster";
    tablerow.appendChild(headingPoster);
    tablehead.appendChild(tablerow);
    datatable.appendChild(tablehead);

    exc2data.Search.forEach(element => {
        //console.log("forEach round");
        /*These really needs to be "re-declared" here every time
        as this won't create new rows/td's for each iteration otherwise: */
        const tablerow = document.createElement('tr');
        const tdTitle = document.createElement('td');
        const tdYear = document.createElement('td');
        const tdImdbID = document.createElement('td');
        const tdType = document.createElement('td');
        const tdPoster = document.createElement('td');
        tdTitle.textContent = element.Title;
        tablerow.appendChild(tdTitle);
        tdYear.textContent = element.Year;
        tablerow.appendChild(tdYear);
        tdImdbID.textContent = element.imdbID;
        tablerow.appendChild(tdImdbID);
        tdType.textContent = element.Type;
        tablerow.appendChild(tdType);
        tdPoster.innerHTML = '<img src="'+element.Poster+'"></img>';
        tablerow.appendChild(tdPoster);
        tablebody.appendChild(tablerow);
    });
    datatable.appendChild(tablebody); 
    rawdatabox.appendChild(datatable);
    
}
//Common data fetcher and error thrower function for 2 above functions:
//async needed for awaits to be allowed.
async function fetch4exc2() {
    try {
        //Await needed for fetch to work at all.
        const response = await fetch(dataurl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        //console.log("fetch4exc2 ulosanti: " + data);
        return data;
    } catch (error) {
        console.error("Error:", error);
        throw error; // Rethrow the error to be caught by the caller
    }
}