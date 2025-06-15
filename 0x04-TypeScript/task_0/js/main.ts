interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentsList :Student[]=[

    {firstName: "Miguel",
     lastName: "Makini",
     age: 20,
     location: "Githunguri"
    },
    {firstName: "Muchiri",
     lastName: "Bande",
     age: 18,
     location: "Kiambaa"
    }

]
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");


const headerRow = document.createElement("tr");

const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";

const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);


studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});


table.appendChild(thead);
table.appendChild(tbody);


document.body.appendChild(table);