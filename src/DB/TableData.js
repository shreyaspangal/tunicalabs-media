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
        label: "Classes",
        minWidth: 30,
        align: "center",
        format: (value) => value.toFixed(0)
    },
    {
        id: "division",
        label: "Division",
        minWidth: 50,
        align: "center"
    },
    {
        id: "status",
        label: "Status",
        minWidth: 30,
        maxWidth: 30,
        align: "left",
        format: (value) => value.toLocaleString("en-US")
    }
];