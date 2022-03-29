var currentHour = moment().format("HH")
var workHour = moment().startOf('day').add(7, "hour")
$("#currentDay").text(moment().format("dddd, MMMM, do YYYY"))

// function with for loop to create timeblocks
var dayHours = function() {

    //parsing stored data
    var timeMap = JSON.parse(localStorage.getItem("timeMap")) || {};

    // loop to create Timeblocks
    for(var i =8; i < 17; i++) {
        var workDay = workHour.add(1, "hour").format("h A");

        // Update timeblock textarea 
        var key = "hour" + i;
        timeMap[key] = timeMap[key] || null;

        var row = $("<div></div>").addClass("row time-block");
        var hour = $("</div></div>").addClass("col-1 hour");
        var textInputEl = $("<textarea></textarea>").addClass("col-10 textInputClass").val(timeMap[key]);
        var saveBtn = $("<button></button>").addClass("col-1 fa fa-save saveBtn").attr("key", key);

        $(".container").append(row);
        $(row).append(hour.textInputEl,saveBnt);

        $(hour).text(workDay);

        // change css class styling when conditions are met
        if(i < currentHour) {
            $(textInputEl).attr("class", "col-10 row past")
        } else if(i > currentHour) {
            $(textInputEl).attr("class", "col-10 row future")
        } else {
            $(textInputEl).attr("class", "col-10 row present")
        }
    }
}
