$(document).ready(function() {
let today = moment();
let TodaysDate = today.format("dddd, MMMM Do");
let hour = today.format('HH');


$('.saveBtn').on('click', function() {
    const time = $(this).attr('id')
    const value = $(this).siblings('td').children().val();
    if (value == '') {
        alert("Please enter a text");
        return
    } 
    localStorage.setItem(time, value);
    // console.log(time, value);
})

// Starts with V ends with ARIABLE
let plansEl = $('.plans');
let source = document.getElementById("currentDay");
let clockValEl = $('.clockValidation');

// jQuery disable text area
plansEl.prop('disabled', true);

// Displaying the current date
$("#currentDay").text(TodaysDate);

// set textarea disable to false when clicked.
$('.tableRow').on('click', function() {
    if ( plansEl.prop('disabled') == true) {
        plansEl.prop('disabled', false);
        }
})

// Checking the time if the hour 
function clockChecker() {

    for (var j = 9; j <= 17; j++ ){
        if (hour > j) {
            let tdTableColorChanger = document.querySelector("#tr"+j);
            tdTableColorChanger.style.backgroundColor = "red";
        } else if (j == hour) {
            let tdTableColorChanger = document.querySelector("#tr" + j);
            tdTableColorChanger.style.backgroundColor = "gray";
        } else {
            let tdTableColorChanger = document.querySelector("#tr"+j);
            tdTableColorChanger.style.backgroundColor = "green";
        }
    }

}


// Inserting localstorage to textarea!
for ( let i = 9 ; i <= 17 ; i++ ) {
    // fix later
    $(`#txt${i}`).val(localStorage.getItem(`${i}`)) ;
}

clockChecker();

// Clearing the data on localStorage
$('#resetButton').click(function() {

    localStorage.clear();
    location.reload();
})


});