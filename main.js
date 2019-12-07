var DEBUG = true;
var isProduction = window.location.href.indexOf("jaredible.net") >= 0;
var APIURL = isProduction ? "https://api.jaredible.net" : "http://localhost:8888";

// known grades
// homeworks
var inputKnownHomework1Grade = $("#knownHomework1Grade");
var inputKnownHomework2Grade = $("#knownHomework2Grade");
// quizzes
var inputKnownQuiz1Grade = $("#knownQuiz1Grade");
var inputKnownQuiz2Grade = $("#knownQuiz2Grade");
var inputKnownQuiz3Grade = $("#knownQuiz3Grade");
// tests
var inputKnownTest1Grade = $("#knownTest1Grade");
var inputKnownTest2Grade = $("#knownTest2Grade");
// projects
var inputKnownProject1Grade = $("#knownProject1Grade");
// extra credit
var inputKnownProject1ExtraCredit = $("#knownProject1ExtraCredit");
var inputKnownProject2ExtraCredit = $("#knownProject2ExtraCredit");
// expected grades
var inputExpectedHomework3Grade = $("#expectedHomework3Grade");
var inputExpectedQuiz4Grade = $("#expectedQuiz4Grade");
var inputExpectedTest3Grade = $("#expectedTest3Grade");
var inputExpectedProject2Grade = $("#expectedProject2Grade");
var inputExpectedProject3ExtraCredit = $("#expectedProject3ExtraCredit");
var inputExpectedEvaluationExtraCredit = $("#expectedEvaluationExtraCredit");

function getCalculations() {
    if (DEBUG) {
        console.log(" --- Pre calculate() call --- ");
    }

    if (DEBUG) {
        console.log(" --- Pre get known grades --- ");
    }

    // known grades
    // homeworks
    var valueKnownHomework1Grade = inputKnownHomework1Grade.val() | 0;
    var valueKnownHomework2Grade = inputKnownHomework2Grade.val() | 0;
    // quizzes
    var valueKnownQuiz1Grade = inputKnownQuiz1Grade.val() | 0;
    var valueKnownQuiz2Grade = inputKnownQuiz2Grade.val() | 0;
    var valueKnownQuiz3Grade = inputKnownQuiz3Grade.val() | 0;
    // tests
    var valueKnownTest1Grade = inputKnownTest1Grade.val() | 0;
    var valueKnownTest2Grade = inputKnownTest2Grade.val() | 0;
    // projects
    var valueKnownProject1Grade = inputKnownProject1Grade.val() | 0;
    // extra credit
    var valueKnownProject1ExtraCredit = inputKnownProject1ExtraCredit.prop("checked") ? 0.01 : 0;
    var valueKnownProject2ExtraCredit = inputKnownProject2ExtraCredit.prop("checked") ? 0.01 : 0;

    if (DEBUG) {
        console.log(" --- Pre get known grades --- ");
    }

    if (DEBUG) {
        console.log(" --- Pre get expected grades --- ");
    }

    // expected grades
    var valueExpectedHomework3Grade = inputExpectedHomework3Grade.val() | 0;
    var valueExpectedQuiz4Grade = inputExpectedQuiz4Grade.val() | 0;
    var valueExpectedTest3Grade = inputExpectedTest3Grade.val() | 0;
    var valueExpectedProject2Grade = inputExpectedProject2Grade.val() | 0;
    var valueExpectedProject3ExtraCredit = inputExpectedProject3ExtraCredit.prop("checked") ? 0.03 : 0;
    var valueExpectedEvaluationExtraCredit = inputExpectedEvaluationExtraCredit.prop("checked") ? 0.01 : 0;

    if (DEBUG) {
        console.log(" --- Post get expected grades --- ");
    }

    if (DEBUG) {
        // known grades
        // homeworks
        console.log("Known homework 1 grade: " + valueKnownHomework1Grade);
        console.log("Known homework 2 grade: " + valueKnownHomework2Grade);
        // quizzes
        console.log("Known quiz 1 grade: " + valueKnownQuiz1Grade);
        console.log("Known quiz 2 grade: " + valueKnownQuiz2Grade);
        console.log("Known quiz 3 grade: " + valueKnownQuiz3Grade);
        // tests
        console.log("Known test 1 grade: " + valueKnownTest1Grade);
        console.log("Known test 2 grade: " + valueKnownTest2Grade);
        // projects
        console.log("Known project 1 grade: " + valueKnownProject1Grade);
        // extra credit
        console.log("Known project 1 extra credit: " + valueKnownProject1ExtraCredit);
        console.log("Known project 2 extra credit: " + valueKnownProject2ExtraCredit);
        // expected grades
        console.log("Expected homework 3 grade: " + valueExpectedHomework3Grade);
        console.log("Expected quiz 4 grade: " + valueExpectedQuiz4Grade);
        console.log("Expected test 3 grade: " + valueExpectedTest3Grade);
        console.log("Expected project 2 grade: " + valueExpectedProject2Grade);
        console.log("Expected project 3 extra credit: " + valueExpectedProject3ExtraCredit);
        console.log("Expected evaluation extra credit: " + valueExpectedEvaluationExtraCredit);
    }

    if (DEBUG) {
        console.log(" --- Pre calculate --- ");
    }

    var pointsPer = [100, 30, 100, 15];
    var weights = [
        [0.08, 0.08, 0.08],
        [0.02, 0.02, 0.02, 0.02],
        [0.12, 0.12, 0.14],
        [0.15, 0.15]
    ];
    var grades = [
        [valueKnownHomework1Grade, valueKnownHomework2Grade, valueExpectedHomework3Grade],
        [valueKnownQuiz1Grade, valueKnownQuiz2Grade, valueKnownQuiz3Grade, valueExpectedQuiz4Grade],
        [valueKnownTest1Grade, valueKnownTest2Grade, valueExpectedTest3Grade],
        [valueKnownProject1Grade, valueExpectedProject2Grade]
    ];
    var totalGrades = [0, 0, 0, 0];
    var extraCredit = valueKnownProject1ExtraCredit + valueKnownProject2ExtraCredit + valueExpectedProject3ExtraCredit + valueExpectedEvaluationExtraCredit;
    var overallGrade = extraCredit;

    for (var i = 0; i < grades.length; i++) {
        for (var j = 0; j < grades[i].length; j++) {
            totalGrades[i] += weights[i][j] * grades[i][j] / pointsPer[i];;
        }
        overallGrade += totalGrades[i];
    }

    if (DEBUG) {
        console.log(" --- Post calculate --- ");
    }

    if (DEBUG) {
        console.log("Total extra credit: " + Number(extraCredit).toFixed(2));
        console.log("Total homework grade: " + Number(totalGrades[0] * 100).toFixed(2));
        console.log("Total quiz grade: " + Number(totalGrades[1] * 100).toFixed(2));
        console.log("Total test grade: " + Number(totalGrades[2] * 100).toFixed(2));
        console.log("Total project grade: " + Number(totalGrades[3] * 100).toFixed(2));
        console.log("Overall grade: " + Number(overallGrade).toFixed(2));
    }

    if (DEBUG) {
        console.log(" --- Post calculate() call --- ");
    }

    return {
        "extraCredit": extraCredit,
        "totalGrades": totalGrades,
        "overallGrade": overallGrade
    };
}

$("#calculateButton").click(function() {
    var calculations = getCalculations();
    var extraCredit = calculations.extraCredit;
    var totalGrades = calculations.totalGrades;
    var overallGrade = calculations.overallGrade;

    var message = "";
    message += "Total extra credit: <strong>" + Number(extraCredit * 100).toFixed(2) + "%</strong><br>";
    message += "Total homework grade: <strong>" + Number(totalGrades[0] * 100).toFixed(2) + "%</strong><br>";
    message += "Total quiz grade: <strong>" + Number(totalGrades[1] * 100).toFixed(2) + "%</strong><br>";
    message += "Total test grade: <strong>" + Number(totalGrades[2] * 100).toFixed(2) + "%</strong><br>";
    message += "Total project grade: <strong>" + Number(totalGrades[3] * 100).toFixed(2) + "%</strong><br>";
    message += "Overall grade: <strong>" + Number(overallGrade * 100).toFixed(2) + "%</strong><br>";

    $("body").toast({
        displayTime: "auto",
        showProgress: "top",
        classProgress: "blue",
        position: "top right",
        message: message
    });
});

$(".message .close").click(function() {
	$(this).closest(".message").transition("fade");
});

function notifyPageView() {
    $.ajax({
        url: APIURL + "/notifier/notify",
        method: "post",
        data: {
            "phone": "3146291836",
            "message": "Your grade calculator has just been viewed!"
        },
        success: function(data) {
            console.log(data);
        }
    });
}

$(function() {
    notifyPageView();
});