const applications = [

    {
        company: "TCS",
        logo: "T",
        job: "Web Developer",
        location: "Pune, Maharashtra",
        date: "02 October 2026",
        status: "Selected"
    },

    {
        company: "Infosys",
        logo: "I",
        job: "Frontend Developer",
        location: "Pune, Maharashtra",
        date: "29 September 2026",
        status: "Shortlisted"
    },

    {
        company: "Wipro",
        logo: "W",
        job: "Java Developer",
        location: "Mumbai, Maharashtra",
        date: "25 September 2026",
        status: "Pending"
    },

    {
        company: "Accenture",
        logo: "A",
        job: "Software Developer",
        location: "Pune, Maharashtra",
        date: "20 September 2026",
        status: "Rejected"
    },

    {
        company: "Tech Mahindra",
        logo: "T",
        job: "UI/UX Developer",
        location: "Mumbai, Maharashtra",
        date: "15 September 2026",
        status: "Pending"
    }

];


/* ================= DISPLAY APPLICATIONS ================= */

function displayApplications(data) {

    const container =
        document.getElementById("applicationsContainer");

    container.innerHTML = "";


    /* No Applications */

    if (data.length === 0) {

        container.innerHTML = `
        
            <div class="no-applications">

                <h3>No Applications Found</h3>

                <p>
                    You don't have any applications
                    with this status.
                </p>

            </div>
        
        `;

        return;
    }


    /* Create Application Cards */

    data.forEach(function(application) {

        const statusClass =
            application.status.toLowerCase();


        const card =
            document.createElement("div");


        card.className =
            "application-card";


        card.innerHTML = `

            <div class="job-info">

                <div class="company-logo">
                    ${application.logo}
                </div>


                <div>

                    <h3>
                        ${application.job}
                    </h3>

                    <p>
                        <strong>
                            ${application.company}
                        </strong>
                    </p>

                    <p>
                        📍 ${application.location}
                    </p>

                    <p>
                        Applied on:
                        ${application.date}
                    </p>

                </div>

            </div>


            <div class="application-right">

                <span class="status ${statusClass}">
                    ${application.status}
                </span>


                <button
                    class="view-btn"
                    onclick="viewApplication(
                        '${application.job}',
                        '${application.company}',
                        '${application.location}',
                        '${application.date}',
                        '${application.status}'
                    )">

                    View

                </button>

            </div>

        `;


        container.appendChild(card);

    });

}


/* ================= VIEW APPLICATION ================= */

function viewApplication(
    job,
    company,
    location,
    date,
    status
) {

    alert(

        "APPLICATION DETAILS\n\n" +

        "Job: " + job + "\n" +

        "Company: " + company + "\n" +

        "Location: " + location + "\n" +

        "Applied On: " + date + "\n" +

        "Status: " + status

    );

}


/* ================= FILTER ================= */
document
    .getElementById("statusFilter")
    .addEventListener("change", function() {

        const selectedStatus =
            this.value;


        /* Show All */

        if (selectedStatus === "all") {

            displayApplications(applications);

            return;
        }


        /* Filter */

        const filteredApplications =
            applications.filter(function(application) {

                return application.status ===
                       selectedStatus;

            });


        displayApplications(
            filteredApplications
        );

    });


/* ================= SUMMARY ================= */

function updateSummary() {


    /* Total */

    document.getElementById(
        "totalApplications"
    ).textContent =
        applications.length;


    /* Pending */

    document.getElementById(
        "pendingApplications"
    ).textContent =

        applications.filter(function(application) {

            return application.status === "Pending";

        }).length;


    /* Selected */

    document.getElementById(
        "selectedApplications"
    ).textContent =

        applications.filter(function(application) {

            return application.status === "Selected";

        }).length;


    /* Rejected */

    document.getElementById(
        "rejectedApplications"
    ).textContent =

        applications.filter(function(application) {

            return application.status === "Rejected";

        }).length;

}


/* ================= PAGE LOAD ================= */

displayApplications(applications);

updateSummary();