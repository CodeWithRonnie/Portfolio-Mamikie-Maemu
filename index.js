let titleLinks = document.querySelectorAll(".title-links");
let titleContents = document.querySelectorAll(".title-contents");

function opentab(event, linkname) {
    titleContents.forEach(titleContent => {
        titleContent.classList.remove("active-contents");
        titleContent.style.display = "none"; 
    });

    titleLinks.forEach(titleLink => titleLink.classList.remove("active-link"));

    event.currentTarget.classList.add("active-link");

    let targetContent = document.getElementById(linkname);
    if (targetContent) {
        targetContent.classList.add("active-contents");
        targetContent.style.display = "block";
    }
}

