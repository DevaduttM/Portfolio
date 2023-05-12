let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
let about = document.querySelector('.about');

menuicon.onclick = () => {
    navbar.classList.toggle('active');
};


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    navbar.classList.remove('active');
};

ScrollReveal({
    reset: true,
    distance: '40px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.homecontent, .heading', {origin: 'top'});
ScrollReveal().reveal('.homeimg, .skillscontainer, .projectscontainer .projectsbox1, .projectscontainer .projectsbox2, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.homecontent h1, .aboutimg', {origin: 'left'});
ScrollReveal().reveal('.homecontent p, .aboutcontent', {origin: 'right'});

const type = new Typed('.texts', {
    strings: ['Student','Web Developer', 'App Developer', 'Photographer' ],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

let calcscrollvalue = () => {
    let scrollprogress = document.getElementById('progress');
    let progressvalue = document.getElementById('progressvalue');
    let pos = document.documentElement.scrollTop;
    let calcheight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollvalue = Math.round((pos*100)/calcheight);

    if(pos > 100){
        scrollprogress.style.display = 'grid';
    }

    else{
        scrollprogress.style.display = 'none';
    }

    scrollprogress.addEventListener("click", () => {
        document.getElementById('home').scrollIntoView({behaviour: 'smooth'});
    });
    navbar.classList.remove('active');

    scrollprogress.style.background = `conic-gradient(var(--main-color) ${scrollvalue}%, var(--bg-color) ${scrollvalue}%)`;
};


window.onscroll = calcscrollvalue;
window.onload = calcscrollvalue;

function sendEmail(){
    Email.send({
        SecureToken: "7b495933-9bab-461e-9757-b90c38c39f8d",
        Password : "E526222DA7FDB0F6EAD2E3CBC6B710749D4E",
        To : 'devaduttcm@outlook.com',
        From : document.getElementById('email').value,
        Subject : document.getElementById('subject').value,
        Body : "Name: "+ document.getElementById('name').value
        +"<br> Email: "+document.getElementById('email').value
        +"<br> Phone No: "+document.getElementById('number').value
        + "<br> Message: "+document.getElementById('message').value
    }).then(
      message => alert(message)
    );
}