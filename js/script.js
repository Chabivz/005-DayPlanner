let today = moment();
let TodaysDate = today.format("dddd, MMMM Do");
let hour = today.format('HH');


// Starts with V ends with ARIABLE
let plansEl = $('.plans');
let source = document.getElementById("currentDay");
let clockValEl = $('.clockValidation');

// jQuery disable text area
plansEl.prop('disabled', true);

// Displaying the current date
$("#currentDay").text(TodaysDate);

// set textarea disable to false when clicked.
function updatePlans(plans) {

    if ( plansEl.prop('disabled') == true) {
    plansEl.prop('disabled', false);
    console.log("set value to false"+ plans);
} 
}
// save the text when insert stuff on the text box 
function save(value) {
    let plansStorage = JSON.parse(localStorage.getItem("plansStorage")) || [];
    let inputhour = new Date().getHours();
    let inputTextArea = document.querySelector('#txt'+value).value.trim();
    let newPlans = {
        timeblock: value,
        hourplan: inputTextArea,
    }
    console.log(inputTextArea);
    plansStorage.push(newPlans);
    localStorage.setItem('plansStorage',JSON.stringify(plansStorage));
    
}

    // Printing out the local storage to our td's
    function printStorageLocation() {
        let plansStorage = JSON.parse(localStorage.getItem("plansStorage")) || [];
        // let printStorage = localStorage.getItem('plansStorage', JSON.stringify(plansStorage));
        // // console.log("My Object ", plansStorage.timeblock.value);

        // // for
        
        // console.log(localTextArea);

        var printme = plansStorage[0].timeblock[1];
        console.log(printme);
        console.log(plansStorage.length);
    }


// checking the hour clock if the
function clockChecker() {
    // console.log(hour);
    // let tdTableColorChanger = document.querySelector("#tr"+j);

    for (var j = 9; j <= 17; j++ ){
        if (hour > j) {
            let tdTableColorChanger = document.querySelector("#tr"+j);
            tdTableColorChanger.style.backgroundColor = "red";
        } else if (hour == j) {
            let tdTableColorChanger = document.querySelector("#tr"+j);
            tdTableColorChanger.style.backgroundColor = "gray";
        } else {
            let tdTableColorChanger = document.querySelector("#tr"+j);
            tdTableColorChanger.style.backgroundColor = "green";
        }
    }
}

clockChecker()
printStorageLocation();


