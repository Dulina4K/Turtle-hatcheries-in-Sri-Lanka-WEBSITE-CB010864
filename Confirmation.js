// get references ti interactive elements
let name_out = document.getElementById("name");
let date_out = document.getElementById("date");
let time_out = document.getElementById("time");
let duration_out = document.getElementById("duration");
let Mobile_out = document.getElementById("mobile");
let email_out = document.getElementById("e-mail");
let gender_out = document.getElementById("gender");
let sl_adult_out = document.getElementById("sladultout");
let sl_adult_amount = document.getElementById("sladultamount");
let sl_child_out = document.getElementById("slchildout");
let sl_child_amount = document.getElementById("slchildamount");
let fr_adult_out = document.getElementById("fradultout");
let fr_adult_amount = document.getElementById("fradultamount");
let fr_child_out = document.getElementById("frchildout");
let fr_child_amount = document.getElementById("frchildamount");
let infant_out = document.getElementById("infantout");
let total = document.getElementById("totalamount");


// taking inputs from local storage and displaying in the summary table 
name_out.innerText = localStorage.getItem("Name");
date_out.innerText = localStorage.getItem("date_out");
time_out.innerText = localStorage.getItem("time_out");
duration_out.innerText = "1 hour";
Mobile_out.innerText =`(+${localStorage.getItem("Country code")}) ${localStorage.getItem("Mobile")}`;
email_out.innerText = localStorage.getItem("E-mail");
gender_out.innerText = localStorage.getItem("Gender");
sl_adult_out.innerText = localStorage.getItem("sl_adult_out");
sl_adult_amount.innerText = localStorage.getItem("sl_adult_amount");
sl_child_out.innerText = localStorage.getItem("sl_child_out");
sl_child_amount.innerText = localStorage.getItem("sl_child_amount");
fr_adult_out.innerText = localStorage.getItem("fr_adult_out");
fr_adult_amount.innerText = localStorage.getItem("fr_adult_amount");
fr_child_out.innerText = localStorage.getItem("fr_child_out");
fr_child_amount.innerText = localStorage.getItem("fr_child_amount");
infant_out.innerText = localStorage.getItem("infant_out");
total.innerText = localStorage.getItem("total");