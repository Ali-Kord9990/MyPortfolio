'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

/* Emali JS */

function sendEmail(){
  var params ={
    name :  document.getElementById('name').value,
    email :  document.getElementById('email').value,
    phone :  document.getElementById('phone').value,
    message :  document.getElementById('message').value,
  }
  const serviceID = "service_9xp0yxq";
  const templateID = "template_mmviweb";
  
  emailjs.send(serviceID,templateID,params).then((res) =>{
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('message').value = "";
  
    console.log(res)
    alert( "your Message Sent Successfully");
  
  }).catch((err) => console.log(err));
}





/* const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
      e.preventDefault()

      //SeviceID - TemplateID - #form - publickey 
      emailjs.sendForm('service_9xp0yxq','template_2zix09c','contact-form','DZ7UPmBOInNGmpvz')
      .then(() =>{
        //Show sent Message

        contactMessage.textContent = "your Message Sent Successfully"

        //Remove Messgae After Five Seconds
        setTimeout(()=>{
          contactMessage.textContent =''
        },5000)

        // Clear Input  Fields 
        contactForm.reset()
      }, () =>{
        //Show Error Message
        contactMessage.textContent = "Message Not Sent (Service Error)"
      })

}

contactForm.addEventListener('submit',sendEmail) */