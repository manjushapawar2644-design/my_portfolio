// ================= EXPLORE JOBS =================

function exploreJobs() {

    const jobsSection = document.getElementById("jobs");

    if (jobsSection) {

        jobsSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}



// ================= APPLY JOB =================

function applyJob(jobName) {

    const result = confirm(
        "Do you want to apply for " + jobName + "?"
    );

    if (result) {

        alert(
            "Please login first to apply for " + jobName + "."
        );

        window.location.href = "login.html";

    }

}



// ================= TESTIMONIAL SLIDER =================

const reviews = [

    {
        text: "Job Connect helped me find my dream job in a top company. The platform is easy to use and the support team is very helpful. I highly recommend it!",
        name: "Priya Sharma",
        job: "Software Engineer, TCS"
    },

    {
        text: "I found many suitable opportunities through Job Connect. The process was simple and the job listings were very useful.",
        name: "Rahul Patil",
        job: "Frontend Developer"
    },

    {
        text: "Job Connect made my job search easier. I found a great company and started my career with confidence.",
        name: "Sneha Deshmukh",
        job: "Business Analyst"
    }

];


let currentReview = 0;


function showReview() {

    document.getElementById("reviewText").textContent =
        reviews[currentReview].text;

    document.getElementById("reviewName").textContent =
        reviews[currentReview].name;

    document.getElementById("reviewJob").textContent =
        reviews[currentReview].job;

}


function nextReview() {

    currentReview++;

    if (currentReview >= reviews.length) {
        currentReview = 0;
    }

    showReview();

}


function previousReview() {

    currentReview--;

    if (currentReview < 0) {
        currentReview = reviews.length - 1;
    }

    showReview();

}



// Automatically change review

setInterval(function() {

    nextReview();

}, 5000);