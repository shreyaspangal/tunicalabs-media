export const columns = [
    { id: "id", label: "ID", minWidth: 40, align: "center" },
    {
        id: "name",
        label: "Name",
        minWidth: 80,
        format: (value) => value.toLocaleString("en-US")
    },
    {
        id: "age",
        label: "Age",
        minWidth: 50,
        format: (value) => value.toLocaleString("en-US")
    },
    {
        id: "school",
        label: "School",
        minWidth: 30,
        format: (value) => value.toLocaleString("en-US")
    },
    {
        id: "classes",
        label: "Class",
        minWidth: 30,
        align: "right",
        format: (value) => value.toFixed(0)
    },
    {
        id: "division",
        label: "Division",
        minWidth: 50,
        align: "right"
    },
    {
        id: "status",
        label: "Status",
        minWidth: 60,
        align: "right",
        format: (value) => value.toLocaleString("en-US")
    }
];

function createData(id, name, age, school, classes, division, status) {
    return { id, name, age, school, classes, division, status };
}

export const rows = [
    createData(1, "Roshan Shukla", 13, "Modal School", 3, "A", "Active"),
    createData(2, "Sarfaraz Ali", 12, "Modal School", 2, "B", "Active"),
    createData(3, "Ram Nayar", 10, "Modal School", 1, "C", "Active"),
    createData(4, "Chintan Kumar", 12, "Modal School", 2, "D", "Active"),
    createData(5, "John Doe", 10, "Modal School", 1, "A", "Active"),
    createData(6, "Rakesh Kumar", 10, "Modal School", 2, "B", "Active"),
    createData(7, "Raju Rastogi", 10, "Modal School", 1, "C", "Active"),
    createData(8, "Farhan Shree", 13, "Modal School", 3, "D", "Active"),
    createData(9, "Funsuk Wangadu", 13, "Modal School", 3, "A", "Active"),
    createData(10, "Priya Patel", 13, "Modal School", 3, "B", "Active"),
];