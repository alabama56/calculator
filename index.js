var calcButton = $(".num");
var read = $("#readout");
var currentEntry = '0';


$(document).ready(function(){
    read.text(0);
    calcButton.click(function(e){
        var buttonPressed = $(this).html();
        read.text(buttonPressed);

        if (buttonPressed === "c") {
            read.text(0);
            currentEntry = '0';
        }
    });
});



// var zero = $("#num-0");
// var one = $("#num-1");
// var two = $("#num-2");
// var three = $("#num-3");
// var four = $("#num-4");
// var five = $("#num-5");
// var six = $("#num-6");
// var seven = $("#num-7");
// var eight = $("#num-8");
// var nine = $("#num-9");