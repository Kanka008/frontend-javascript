var studentsList = [
    { firstName: "Miguel",
        lastName: "Makini",
        age: 20,
        location: "Githunguri"
    },
    { firstName: "Muchiri",
        lastName: "Bande",
        age: 18,
        location: "Kiambaa"
    }
];
var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");
var headerRow = document.createElement("tr");
var nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
var locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);
