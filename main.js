// known grades
// homeworks
var knownHomework1Grade = $("#knownHomework1Grade");
var knownHomework2Grade = $("#knownHomework2Grade");
// quizzes
var knownQuiz1Grade = $("#knownQuiz1Grade");
var knownQuiz2Grade = $("#knownQuiz2Grade");
var knownQuiz3Grade = $("#knownQuiz3Grade");
// tests
var knownTest1Grade = $("#knownTest1Grade");
var knownTest2Grade = $("#knownTest2Grade");
// projects
var knownProject1Grade = $("#knownProject1Grade");
// extra credit
var knownProject1ExtraCredit = $("#knownProject1ExtraCredit");
var knownProject2ExtraCredit = $("#knownProject2ExtraCredit");

// expected grades
var expectedHomework3Grade = $("#expectedHomework3Grade");
var expectedQuiz4Grade = $("#expectedQuiz4Grade");
var expectedTest3Grade = $("#expectedTest3Grade");
var expectedProject2Grade = $("#expectedProject2Grade");
var expectedProject3ExtraCredit = $("#expectedProject3ExtraCredit");
var expectedEvaluationExtraCredit = $("#expectedEvaluationExtraCredit");

function calculateKnownGrades() {
}

function calculateExpectedGrades() {
}

function calculate() {
}

$("#calculateButton").click(function() {
    var message = "";
    message += "";

    $("body").toast({
        displayTime: "auto",
        showProgress: "top",
        classProgress: "blue",
        message: message
  });
});

$(".message .close").click(function() {
	$(this).closest(".message").transition("fade");
});

$(function() {
    console.log("Testing");
});