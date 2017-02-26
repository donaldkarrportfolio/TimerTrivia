
var correct = 0;

var incorrect = 0;

var time = 30;

var answer1;

var answer2;

var answer3;

var answer4; 

var counter;



$(document).ready(function() {


function finalAnswer() {
	if (answer1 == "question1_answer") {
		correct++;
	} else {
		incorrect++;
	}

	if (answer2 == "question2_answer") {
		correct++;
	} else {
		incorrect++;
	}

	if (answer3 == "question3_answer") {
	correct++;
	} else {
		incorrect++;
	}

	if (answer4 == "question4_answer") {
		correct++;
	} else {
		incorrect++;
	}

	$("#results").html("correct: " + correct + "   " + "incorrect: " + incorrect);

};


function timerCount () {
	counter = setInterval(count, 1000);
};

function count () {
	time--;
	var newTime = time;
	$("#time-display").html(time);

		if (time==0) {
			finalAnswer();
			clearInterval(counter);
			if (correct <= incorrect) {
					$("#message").html("You Just Got Devoured By The Sphinx...Sorry");
			} else if (correct > incorrect) {
				$("#message").html("You Saved Thebes! If Only the Story Ended There...");
			}
		}
		
	}; 

timerCount();

function reset () {
	time = 30;
	correct = 0;
	incorrect = 0;
	$("input").attr("checked", false);
	clearInterval(counter);
	timerCount();
	$("#results").html("");
	$("#message").html("");

}

	$("#reset").on("click", reset);





	$("#question1_answer").on("click", function() {
		// correct++;
		// console.log(correct);
		// console.log($("#question1_answer").is(':checked'));
		// if ($("#question1_answer").is(":checked")) {
		// if ($(".wrong").is(":checked")) {
		// 	incorrect++;
		// }
		answer1 = $(this).attr("id");

		console.log(answer1);

		

	})

	$("#question2_answer").on("click", function() {
		// correct++;
		// console.log(correct);

		answer2 = $(this).attr("id");

		console.log(answer2);

	})

	$("#question3_answer").on("click", function() {
		// correct++;
		// console.log(correct);

		answer3 = $(this).attr("id");

		console.log(answer3);
	})

	$("#question4_answer").on("click", function() {
		// correct++;
		// console.log(correct);

		answer4 = $(this).attr("id");

		console.log(answer4);
	})



	$(".wrong1").on("click", function() {
		// incorrect++;
		// console.log("incorrect " +incorrect);
		answer1 = $(this).attr("class");
	})

	$(".wrong2").on("click", function() {
		// incorrect++;
		// console.log("incorrect " +incorrect);
		answer2 = $(this).attr("class");
	})

	$(".wrong3").on("click", function() {
		// incorrect++;
		// console.log("incorrect " +incorrect);
		answer3 = $(this).attr("class");
	})

	$(".wrong4").on("click", function() {
		// incorrect++;
		// console.log("incorrect " +incorrect);
		answer4 = $(this).attr("class");
	})



});