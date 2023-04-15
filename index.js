//query selector

let table = document.querySelector("table")

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

    table.append(tableBody)
}

function fetchEmailList(parameter = {}){
    let emailList = [
        { 
            author : `Shailendra`, 
            subjectLine: `Shailendra, your application was sent to Delhivery`,
            description: `Dear Investor, With reference to NSE circular NSE/INSP/46704 dated December 17, 2020 ...`
        },
        { 
            author : `Ravindra`, 
            subjectLine: `Shailendra, your application was sent to Delhivery`,
            description: `Dear Investor, With reference to NSE circular NSE/INSP/46704 dated December 17, 2020 ...`
        },
        { 
            author : `Prabhu`, 
            subjectLine: `Shailendra, your application was sent to Delhivery`,
            description: `Dear Investor, With reference to NSE circular NSE/INSP/46704 dated December 17, 2020 ...`
        },{ 
            author : `Ashish`, 
            subjectLine: `Shailendra, your application was sent to Delhivery`,
            description: `Dear Investor, With reference to NSE circular NSE/INSP/46704 dated December 17, 2020 ...`
        },
        { 
            author : `Yash`, 
            subjectLine: `Shailendra, your application was sent to Delhivery`,
            description: `Dear Investor, With reference to NSE circular NSE/INSP/46704 dated December 17, 2020 ...`
        },{ 
            author : `Akki`, 
            subjectLine: `Shailendra, your application was sent to Delhivery`,
            description: `Dear Investor, With reference to NSE circular NSE/INSP/46704 dated December 17, 2020 ...`
        }
    ]
    renderTable(emailList);
}

fetchEmailList()