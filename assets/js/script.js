

// function with for loop to create timeblocks
var dayHours = function() {

    //parsing stored data
    var timeMap = JSON.parse(localStorage.getItem("timeMap")) || {};

    // loop to create Timeblocks
    for(var i =8; i < 17; i++) {
        var workDay = workHour.add(1, "hour").format("h A");
    }
}
