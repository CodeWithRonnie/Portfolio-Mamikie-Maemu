let titleLinks = document.getElementsByClassName(".title-links");
let titleContents = document.getElementsByClassName(".title-contents");

function openLinks(linkname){
    for (titleLinks of titleLinks){
        titleLinks.classList.remove("active-link");
    }
    for (titleContents of titleContents){
        titleContents.classList.remove("active-contents");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(linkname).classList.add("active-contents")
}

