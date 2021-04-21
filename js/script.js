
// Header Date

var today = moment();
var TodaysDate = today.format("dddd, MMMM Do");
$("#currentDay").text(TodaysDate);

// Starts with V ends with ARIABLE
var tr9El = document.querySelector("#tr9");
var tr9txtEl = document.getElementById("9AM");

let source = document.getElementById("currentDay")
tr9txtEl.value = source.innerText;