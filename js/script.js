
// Header Date

let today = moment();
let TodaysDate = today.format("dddd, MMMM Do");
$("#currentDay").text(TodaysDate);

// Starts with V ends with ARIABLE
let tr9El = document.querySelector("#tr9");
let tr9txtEl = document.getElementById("9AM");
let plansEl = $('.plans');
let source = document.getElementById("currentDay");
let clockValEl = $('.clockValidation');
// 
// jQuery disable text area
plansEl.prop('disabled', true);

// tr9txtEl.value = source.innerText; 

function updatePlans(plans) {
    if ( plansEl.prop('disabled') == true) {
    plansEl.prop('disabled', false);
    console.log("set value to false");

} 

// save the text when insert stuff on the text box 
function save(saveBtn) {
    let schedulerStorage = JSON(localStorage.getItem("schedulerStorage")) || [];

}


// checking the hour clock if the
function clockChecker() {
    for ( let i = 0 ; clockValEl <= i ; i++ ) {

        

    }

}