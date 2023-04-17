//query selector
const table = document.querySelector("#table")
const searchBox = document.querySelector("#searchBox")
const inbox = document.querySelector("#inbox")
const sent = document.querySelector("#sent")
const starred = document.querySelector("#starred")
const spam = document.querySelector("#spam")

//render functions and fetching api function
function renderTableRow(email = {}){
    let tableRow = document.createElement('tr')

    let author = document.createElement('td');
    author.textContent = email.author
    tableRow.append(author)

    let subjectLine = document.createElement('td');
    subjectLine.textContent = email.subjectLine
    tableRow.append(subjectLine)

    let description = document.createElement('td');
    description.textContent = email.description
    tableRow.append(description)

    return tableRow
}

function renderTable(emailList = []){

    let tableBody = document.createElement('tbody');

    emailList.forEach(email => tableBody.append(renderTableRow(email)));

    table.replaceChildren();
    table.append(tableBody)
}

async function fetchEmailList({ searchString = null, type}){
    const result = await fetch(`http://localhost:1080/getEmailList?searchString=${searchString}/?type=${type}`);
    const emailList = await result.json();
    renderTable(emailList.data);
}

//event listeners
searchBox.addEventListener("keyup", (event)=>fetchEmailList({ searchString : event.target.value}))
inbox.addEventListener("click", event=> fetchEmailList({type: event.target.value}))
sent.addEventListener("click", event=> fetchEmailList({type: event.target.value}))
starred.addEventListener("click", event=> fetchEmailList({type: event.target.value}))
spam.addEventListener("click", event=> fetchEmailList({type: event.target.value}))

//init program
fetchEmailList({});

/*things needs to be implemented
1. Debounce
2. Pagination
*/
