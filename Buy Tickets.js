// Getting references to the elements
let date = document.getElementById("date");
let sl_adult = document.getElementById("sladult");
let sl_child = document.getElementById("slchild");
let fr_adult = document.getElementById("fradult");
let fr_child = document.getElementById("frchild");
let infant = document.getElementById("infant");
let duration = document.getElementById("duration");

let date_out = document.getElementById("dateout");
let time_out = document.getElementById("timeout");
let duration_out = document.getElementById("durationout");

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
const the_form = document.getElementById("form");
let btn_cont = document.getElementById("contbtn");

// Adding event listeners
window.addEventListener  ("load", init);
the_form.addEventListener("submit", handleFormSubmission);

date.addEventListener    ("change", updateDisplay);
duration.addEventListener("change", updateDisplay);

sl_adult.addEventListener("change", updateDisplay);
sl_child.addEventListener("change", updateDisplay);
fr_adult.addEventListener("change", updateDisplay);
fr_child.addEventListener("change", updateDisplay);
infant.addEventListener  ("change", updateDisplay);

btn_cont.addEventListener("click",updateDisplay);


//Calling out Functions

function init() 
{
    btn_cont.setAttribute("href", "javascript:void(0);");
}

// Function added to validate and proceed to details page
function handleFormSubmission(event) 
{
    if (!the_form.checkValidity()) 
    {
        event.preventDefault();
        alert("Please fill in all required fields.");
    } 
    else 
    {
        event.preventDefault();
        btn_cont.setAttribute("href", "Details.html");
        btn_cont.click();
    }
}

function updateDisplay(event) 
{
    // Text outputs
    date_out.innerText     = date.value;
    sl_adult_out.innerText = `${sl_adult.value} Local Adult(s)`;
    sl_child_out.innerText = `${sl_child.value} Local Child(ren)`;
    fr_adult_out.innerText = `${fr_adult.value} Foreign Adult(s)`;
    fr_child_out.innerText = `${fr_child.value} Foreign Child(ren)`;
    infant_out.innerText   = `${infant.value} Infant(s)`;

    // Loading selections to local storage
    let selected_durations = Array.from(duration.selectedOptions).map(option => option.innerText);
    let selectedDurations = Array.from(duration.selectedOptions).map(option => option.value);
    time_out.innerText = selected_durations.join(', '); // Display selected durations
    duration_out.innerText = `${selectedDurations.length} hr(s)`;
    localStorage.setItem("Duration_out", duration_out.innerText);

    localStorage.setItem("date_out", date_out.innerText);
    localStorage.setItem("sl_adult_out", sl_adult_out.innerText);
    localStorage.setItem("sl_child_out", sl_child_out.innerText);
    localStorage.setItem("fr_adult_out", fr_adult_out.innerText);
    localStorage.setItem("fr_child_out", fr_child_out.innerText);
    localStorage.setItem("infant_out", infant_out.innerText);
    localStorage.setItem("time_out", time_out.innerText);

    // Calculation
    let totalAmount = 0;
    let slAdultPrice = 0;
    let slChildPrice = 0;
    let frAdultPrice = 0;
    let frChildPrice = 0;
    let peakHours = ["10", "11", "12", "15", "16", "17"];
    for (let selectedOption of selectedDurations) 
    {
        let [startTime, endTime] = selectedOption.split('-');
        let isPeakHour = peakHours.includes(startTime);
        if (isPeakHour) {
            slAdultPrice += 6 * sl_adult.value;
            slChildPrice += 3 * sl_child.value;
            frAdultPrice += 13 * fr_adult.value;
            frChildPrice += 8 * fr_child.value;
        } else {
            slAdultPrice += 4 * sl_adult.value;
            slChildPrice += 2 * sl_child.value;
            frAdultPrice += 10 * fr_adult.value;
            frChildPrice += 5 * fr_child.value;
        }
    }

    totalAmount = slAdultPrice + slChildPrice + frAdultPrice + frChildPrice;

    // updating summary table with necassary values 
    sl_adult_amount.innerText = `$${slAdultPrice}`;
    sl_child_amount.innerText = `$${slChildPrice}`;
    fr_adult_amount.innerText = `$${frAdultPrice}`;
    fr_child_amount.innerText = `$${frChildPrice}`;
    total.innerText = `$${totalAmount}`;
    
    // Store prices in local storage
    localStorage.setItem("sl_adult_amount", sl_adult_amount.innerText);
    localStorage.setItem("sl_child_amount", sl_child_amount.innerText);
    localStorage.setItem("fr_adult_amount", fr_adult_amount.innerText);
    localStorage.setItem("fr_child_amount", fr_child_amount.innerText);
    localStorage.setItem("total", total.innerText);

    btn_cont.setAttribute("href", "Details.html");
}
