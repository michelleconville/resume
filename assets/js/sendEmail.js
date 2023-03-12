 function sendMail(contactForm) {
    emailjs.send('service_gh1cukf', 'rosie-2023-03-11', {
        "from_name": contactForm.name.value,
        "from_emailaddress": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}
