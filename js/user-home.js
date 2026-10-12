function searchJobs() {
    const input = document.getElementById("searchJob");
    const cards = document.querySelectorAll(".job-card");
    const message = document.getElementById("message");

    const keyword = input.value.trim().toLowerCase();
    let found = 0;

    cards.forEach(function(card) {
        const match = card.textContent.toLowerCase()
            .includes(keyword);

        card.style.display = match ? "block" : "none";

        if (match) {
            found++;
        }
    });

    message.textContent = found === 0
        ? "No matching jobs found."
        : found + " job(s) found.";
}