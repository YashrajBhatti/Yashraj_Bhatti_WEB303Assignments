/*
	WEB 303 Assignment 1 - jQuery
	Yashraj Bhatti
	0832320
*/

$(document).ready(function() {
    // Event handler for "change" or "keyup" event on yearly-salary and percent fields
    $("#yearly-salary, #percent").on("change keyup", function() {
        // Get the values from the input fields
        var salary = parseFloat($("#yearly-salary").val());
        var percent = parseFloat($("#percent").val());

        // Check if both values are valid numbers
        if (!isNaN(salary) && !isNaN(percent) && percent<=100) {
            // Calculate the amount
            var amount = (salary * percent) / 100;

            // Round the amount to dollars and cents using toFixed()
            var roundedAmount = amount.toFixed(2);

            // Update the <span> element with the calculated amount
            $("#amount").text("$" + roundedAmount);
        } else if(percent>100){
			$("#amount").text("You cannot spend more than your earning.");
		} else {
            // If the input is not valid, display an error message
            $("#amount").text("Invalid input");
        }
    });
});