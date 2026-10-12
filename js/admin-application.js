let applications = [
    {
        id: "A001",
        name: "Rahul Patil",
        email: "rahul@gmail.com",
        job: "Web Developer",
        company: "TCS",
        status: "Pending"
    },
    {
        id: "A002",
        name: "Sneha Joshi",
        email: "sneha@gmail.com",
        job: "Java Developer",
        company: "Infosys",
        status: "Selected"
    },
    {
        id: "A003",
        name: "Amit More",
        email: "amit@gmail.com",
        job: "UI Designer",
        company: "Wipro",
        status: "Rejected"
    }
];

let table = document.getElementById("applicationTable");

applications.forEach(app => {
    table.innerHTML += `
        <tr>
            <td>${app.id}</td>
            <td>${app.name}</td>
            <td>${app.email}</td>
            <td>${app.job}</td>
            <td>${app.company}</td>
            <td>${app.status}</td>
            <td>
                <button onclick="viewApplication('${app.id}')">
                    View
                </button>
            </td>
        </tr>
    `;
});

function viewApplication(id) {
    alert("Application ID: " + id);
}