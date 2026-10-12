function filterJobs() {
    const searchValue = document
        .getElementById("searchInput")
        .value.trim().toLowerCase();

    const locationValue = document
        .getElementById("locationFilter")
        .value.toLowerCase();

    const jobs = document.querySelectorAll(".job-card");
    const noResults = document.getElementById("noResults");

    let count = 0;

    jobs.forEach(function(job) {
        const jobText = job.textContent.toLowerCase();
        const jobLocation = job.dataset.location.toLowerCase();

        const matchesSearch = jobText.includes(searchValue);
        const matchesLocation =
            locationValue === "" || jobLocation === locationValue;

        if (matchesSearch && matchesLocation) {
            job.style.display = "";
            count++;
        } else {
            job.style.display = "none";
        }
    });

    noResults.style.display = count === 0 ? "block" : "none";
}

document.getElementById("searchInput")
    .addEventListener("input", filterJobs);

document.getElementById("locationFilter")
    .addEventListener("change", filterJobs);