
const config1 = {
    parent: '#usersTable',
    columns: [
        {title: 'Имя', value: 'name'},
        {title: 'Фамилия', value: 'surname'},
        {title: 'Возраст', value: 'age'},
    ],
};

const users = [
    {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
    {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15},
];

DataTable(config1, users);



function DataTable(config, data) {
    const table = document.createElement("table");
    table.classList.add("ownTable__table");
    document.getElementById(config.parent.replace("#","")).appendChild(table)
    const headerColumns = []

    createHeader(table);

    createBody(table);


    // creates header of the table
    function createHeader(table) {
        const header = document.createElement("thead");
        header.classList.add("ownTable__thead");
        table.appendChild(header);
        const headerRow = document.createElement("tr");
        headerRow.classList.add("ownTable__tr")
        header.appendChild(headerRow);

        config.columns.map((item) => {
            headerColumns.push(item.value);
        })
        config.columns.map((item) => {
            let headerDataItem = document.createElement("th");
            headerDataItem.classList.add("ownTable__th")
            headerDataItem.innerHTML = item.title;
            headerRow.appendChild(headerDataItem);
        })
    }

    // creates body of the table
    function createBody(table) {
        const body = document.createElement("tbody");
        body.classList.add("ownTable__tbody");
        table.appendChild(body);
        for (let i = 0; i < data.length; i++) {
            let row = document.createElement("tr");
            row.classList.add("ownTable__tr");
            body.appendChild(row);
            for (let column of headerColumns) {
                let cellData = document.createElement("td");
                cellData.classList.add("ownTable__td");
                if (data[i][column] !== undefined) {
                    cellData.innerHTML = data[i][column];
                }
                row.appendChild(cellData);
            }
        }
    }
}