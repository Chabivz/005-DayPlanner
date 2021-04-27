// $(document).ready(function() {
let today = moment();
let TodaysDate = today.format("dddd, MMMM Do");
let hour = today.format('HH');

$('.saveBtn').on('click', function() {
    const time = $(this).attr('id')
    const value = $(this).siblings('td').children().val();
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
function updatePlans(plans) {

    if ( plansEl.prop('disabled') == true) {
    plansEl.prop('disabled', false);
    // console.log("set value to false"+ plans);
} 
}
// save the text when insert stuff on the text box 
// function save(value) {
//     // console.log()
//     // let time = $(this);
//     // console.log(time);
//     // let plansStorage = JSON.parse(localStorage.getItem("plansStorage")) || [];
//     // let inputhour = new Date().getHours();
//     let inputTextArea = document.querySelector('#txt'+value).value.trim();
//     // let newPlans = {
//     //     timeblock: value,
//     //     hourplan: inputTextArea,
//     // }
//     // console.log(inputTextArea);
//     // plansStorage.push(newPlans);
//     localStorage.setItem(value, inputTextArea);
//     // console.log(value, inputTextArea);
// //     // localStorage.setItem()


    
// }

    // Printing out the local storage to our td's
    function printStorageLocation() {
        let plansStorage = JSON.parse(localStorage.getItem("plansStorage"));
        // let timeblockTxtEl = document.querySelector("#txt"+x);
        var timeblockEl = plansStorage[0].timeblock[0];
        console.log("printMe Variable", timeblockEl);
        console.log(plansStorage);



        
        // for ( let x = 0; x <= plansStorage.length ; x++ ) {
        //     let timeblockTxtEl = document.querySelector("#txt"+x);



        //     timeblockEl = plansStorage[x].timeblock[0];
        //     console.log(timeblockTxtEl);
        //     // timeblockTxtEl.textContent = timeblockTxtEl;
        //     // if (x == 9)
        //     // x = '09';
        //     console.log(x);
        // }
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


for ( let i = 9 ; i <= 17 ; i++ ) {
    // fix later
    $(`#txt${i}`).val(localStorage.getItem(`${i}`)) ;
}

// $("#txt09").val(localStorage.getItem('09')) ;
// console.log()

clockChecker()
printStorageLocation();


// })