

// Starts with V ends with ARIABLE
let today = moment();
let TodaysDate = today.format("dddd, MMMM Do");
let tBodyEl = document.querySelector("#tableBody");
let plansEl = $('.plans');
let source = document.getElementById("currentDay");
let clockValEl = $('.clockValidation');
let dateTime = null;
let time;



// Modal Button
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

// Header Date
$("#currentDay").text(TodaysDate);
// jQuery disable text area
plansEl.prop('disabled', true);


// tr9txtEl.value = source.innerText; 

function updatePlans(hour) {
    event.preventDefault();
    if ( plansEl.prop('disabled') == true) {
        let divHour = hour - 9;
        plansEl.prop('disabled', false);
        console.log(divHour)
    console.log("set value to false");

    } 
}
// save the text when insert stuff on the text box 
function save(saveBtn) {
    // let schedulerStorage = JSON(localStorage.getItem("schedulerStorage")) || [];

}

// checking the hour clock if the
function clockChecker() {
    
    let hourNow = moment().format('HH');
    console.log(hourNow);
    // console.log(tBodyEl);
    for (var i = 9 ; i <= 17; i++) {
        console.log(i)
    }
}

clockChecker();


// Save the input on the JSON
function savePlans(save) {

    console.log(save);
}

console.log(tBodyEl);

