function ToggleMenu() {
    const homeButton = document.getElementById("homeID");
    const aboutMeButton = document.getElementById("AboutMeID");
    const projectButton = document.getElementById("projectID");
    const contactMeButton = document.getElementById("contactMeID");


    homeButton.classList.toggle("hiddenButton");
    aboutMeButton.classList.toggle("hiddenButton");
    projectButton.classList.toggle("hiddenButton");
    contactMeButton.classList.toggle("hiddenButton");

}