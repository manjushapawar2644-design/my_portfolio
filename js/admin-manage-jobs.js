let jobs = [
    {
        id: "J001",
        title: "Web Developer",
        company: "TCS",
        location: "Pune",
        salary: "₹4 LPA"
    },
    {
        id: "J002",
        title: "Java Developer",
        company: "Infosys",
        location: "Mumbai",
        salary: "₹5 LPA"
    },
    {
        id: "J003",
        title: "UI Designer",
        company: "Wipro",
        location: "Bangalore",
        salary: "₹3.5 LPA"
    }
];

let table = document.getElementById("jobTable");

jobs.forEach(job => {
    table.innerHTML += `
        <tr>
            <td>${job.id}</td>
            <td>${job.title}</td>
            <td>${job.company}</td>
            <td>${job.location}</td>
            <td>${job.salary}</td>
            <td>
                <button onclick="deleteJob('${job.id}')">
                    Delete
                </button>
            </td>
        </tr>
    `;
});

function deleteJob(id) {
    alert("Job " + id + " deleted!");
}