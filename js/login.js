function login() {

    let role = document.getElementById("role").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (role === "admin" &&
        email === "manjushapawar2644@gmail.com" &&
        password === "admin123") {

        window.location.href = "admin/admin-home.html";

    } else if (role === "user" &&
               email === "user@gmail.com" &&
               password === "user123") {

        window.location.href = "user/user-home.html";

    } else {
        document.getElementById("msg").innerText =
            "Invalid email or password!";
    }
}