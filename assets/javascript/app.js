
var correct = 0;

var incorrect = 0;

function freeze() {
	document.getElementsByName("question1_chioice").disabled = true;
}






$(document).ready(function() {


	setTimeout(fiveSeconds, 1000 * 5);
	setTimeout(tenSeconds, 1000 * 10);
	setTimeout(fifteenSeconds, 1000 * 15);
	setTimeout(timeUp, 1000 * 20);

	function fiveSeconds () {
		$("#time-display").html("<h2> Fifteen Seconds Left... <h2>");
	}

	function tenSeconds () {
		$("#time-display").html("<h2> Ten Seconds Left... <h2>");
	}

	function fifteenSeconds () {
		$("#time-display").html("<h2> Five Seconds Left... <h2>");
	}

	function timeUp () {
		$("#time-display").html("<h2> Time's Up! <h2>");

		$("#results").html("correct: " + correct + " " + "incorrect: " + incorrect);

		if (correct <= incorrect) {
			$("#message").html("You Just Got Devoured By The Sphinx...Sorry");
		}

		if (correct > incorrect) {
			$("#message").html("You Saved Thebes, if Only the Story Ended There...");
		}
		
	}


	$("#question1_answer").on("click", function() {
		correct++;
		console.log(correct);
				freeze();


	})

	$("#question2_answer").on("click", function() {
		correct++;
		console.log(correct);
	})

	$("#question3_answer").on("click", function() {
		correct++;
		console.log(correct);
	})

	$("#question4_answer").on("click", function() {
		correct++;
		console.log(correct);
	})

	$(".wrong").on("click", function() {
		incorrect++;
		console.log("incorrect " +incorrect);
	})



});