const employees = [
    {
        name: 'bilal',
        age: 18,
        salary: 5000
    },

    {
        name: 'ali',
        age: 17,
        salary: 55000
    },
    {
        name: 'komal',
        age: 16,
        salary: 70000
    },
    {
        name: 'waleed',
        age: 18,
        salary: 60000
    },
    {
        name: 'ahmed raza',
        age: 19,
        salary: 52000
    },
    {
        name: 'abdukl salam',
        age: 20,
        salary: 75000
    },
    {
        name: 'umer farooq',
        age: 19,
        salary: 58000
    },
    {
        name: 'muhammed umer',
        age: 38,
        salary: 68000
    },
    {
        name: 'yousif',
        age: 31,
        salary: 53000
    },
    {
        name: 'sumaira',
        age: 36,
        salary: 65000
    }
];

// Function to populate table with employee data
function populateTable() {
    const tableBody = document.getElementById('employeeTable');

    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        const row = tableBody.insertRow();
        row.innerHTML = `<td>${employee.name}</td>
                <td>${employee.age}</td>
                <td>${employee.salary}</td>`;
    }
}

// Call the function to populate the table
populateTable();







let x = 10;
x += 5;
let text = "Hello"; text += " World";