function toggleMenu(){
    console.log('Menu Toggled');
    let menu = document.querySelector('.menu-links');
    let icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');

}

function scrollToContact(){
    let contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({behavior: 'smooth'});

}
