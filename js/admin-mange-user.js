let users = [
    {
        id: "001",
        name: "Rahul Patil",
        email: "rahul@gmail.com",
        phone: "9876543210",
        status: "Active"
    },
    {
        id: "002",
        name: "Sneha Joshi",
        email: "sneha@gmail.com",
        phone: "9876501234",
        status: "Active"
    },
    {
        id: "003",
        name: "Amit More",
        email: "amit@gmail.com",
        phone: "9876512345",
        status: "Inactive"
    }
];

let table = document.getElementById("userTable");

users.forEach(user => {
    table.innerHTML += `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.status}</td>
            <td><button onclick="deleteUser('${user.id}')">Delete</button></td>
        </tr>
    `;
});

function deleteUser(id) {
    alert("User " + id + " deleted!");
}