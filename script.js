/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

// *========= footer bar date & Time =========*//

function updateDateTime() {
    const dateTimeElement = document.getElementById('footer-text');
    const currentDate = new Date();
    const options = {  month: 'short', day: 'numeric', weekday: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDateTime = currentDate.toLocaleString('en-US', options);
    dateTimeElement.textContent = formattedDateTime;
}
  
// Update date and time every second
setInterval(updateDateTime, 1000);
  
// Initial call to display date and time
updateDateTime();


function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "dimpujoshua@gmail.com",
        Password : "Joshua@2001",
        To : 'meetjoshua7@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Enquiry at Joshua Portfolio",
        Body : "Full Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Mobile Number: " + document.getElementById("mobilenumber").value
            + "<br> Email Subject: " + document.getElementById("subject").value
            + "<br> Your Message: " + document.getElementById("yourmessage").value
    }).then(
        message => alert("Message Sent Succesfully")
    );
};