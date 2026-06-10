// Smooth scroll
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({
        behavior:'smooth'
    });
}

// Navbar scroll effect
window.addEventListener("scroll",()=>{
    const nav = document.querySelector("nav");
    if(window.scrollY > 50){
        nav.style.background = "#000";
    } else {
        nav.style.background = "#111";
    }
});

// Typing effect
const text = "Welcome to Quick Response";
let i = 0;

function type(){
    if(i < text.length){
        document.querySelector(".hero h2").innerHTML += text.charAt(i);
        i++;
        setTimeout(type,80);
    }
}

document.querySelector(".hero h2").innerHTML = "";
type();

// Form submit
document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    alert("Message Sent!");
});