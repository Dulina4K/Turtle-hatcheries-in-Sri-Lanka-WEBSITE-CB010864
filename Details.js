// references to the output elements of the Summary table
let date_out = document.getElementById("dateout");
date_out.innerText = localStorage.getItem("date_out");

let time_out = document.getElementById("timeout");
time_out.innerText = localStorage.getItem("time_out");

let duration_out = document.getElementById("durationout");
duration_out.innerText = localStorage.getItem("Duration_out");

let sl_adult_out = document.getElementById("sladultout");
sl_adult_out.innerText = localStorage.getItem("sl_adult_out");

let sl_adult_amount = document.getElementById("sladultamount");
sl_adult_amount.innerText = localStorage.getItem("sl_adult_amount");

let sl_child_out = document.getElementById("slchildout");
sl_child_out.innerText = localStorage.getItem("sl_child_out");

let sl_child_amount = document.getElementById("slchildamount");
sl_child_amount.innerText = localStorage.getItem("sl_child_amount");

let fr_adult_out = document.getElementById("fradultout");
fr_adult_out.innerText = localStorage.getItem("fr_adult_out");

let fr_adult_amount = document.getElementById("fradultamount");
fr_adult_amount.innerText = localStorage.getItem("fr_adult_amount");

let fr_child_out = document.getElementById("frchildout");
fr_child_out.innerText = localStorage.getItem("fr_child_out");

let fr_child_amount = document.getElementById("frchildamount");
fr_child_amount.innerText = localStorage.getItem("fr_child_amount");

let infant_out = document.getElementById("infantout");
infant_out.innerText = localStorage.getItem("infant_out");

let total = document.getElementById("totalamount");
total.innerText = localStorage.getItem("total");


// getting reference to interactive elements 
let full_name = document.getElementById("name");
let cc = document.getElementById("CC");
let mob_num = document.getElementById("mobnum");
let email = document.getElementById("eml");
let cemail = document.getElementById("ceml");
const gender = document.getElementById("gender");

const theform = document.getElementById("form");

let link = document.getElementById("href");
let cont_btn = document.getElementById("contbtn");

// setting event listeners 
window.addEventListener ("load", init);
theform.addEventListener("input", updateButton);
cont_btn.addEventListener("click", redirection)

// adding functions
function init() {
    cont_btn.style.border = "2px solid red";
    cont_btn.style.animationDuration = "0.1s";
    link.setAttribute("href", "");
    updateButton(); // Initialize button state
}

function redirection(event)
{
    if (theform.checkValidity())
    {
        event.preventDefault()
        link.setAttribute("href", "./Payment.html")
        link.click();
    }
}

function updateButton() 
{
    
    if (theform.checkValidity() && email.value === cemail.value) 
    {
        cont_btn.style.color = "green";
        cont_btn.style.border = "2px solid green";
        link.setAttribute("href", "./Payments page.html");
        localStorage.setItem("Name",full_name.value);
        localStorage.setItem("Country code", cc[cc.selectedIndex].value);
        localStorage.setItem("Mobile",mob_num.value);
        localStorage.setItem("E-mail",eml.value);
        localStorage.setItem("Gender", gender[gender.selectedIndex].value);
    } 
    else 
    {
        cont_btn.style.color = "red";
        cont_btn.style.border = "2px solid red";
        link.setAttribute("href", "");
    }
}

