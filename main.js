var isProduction = window.location.href.indexOf("jaredible.net") >= 0;
var APIURL = isProduction ? "https://api.jaredible.net" : "http://localhost:8888";
var DEBUG = !isProduction;

// pointsPer
var pointsPerHomework = 100;
var pointsPerQuiz = 30;
var pointsPerTest = 100;
var pointsPerProject = 15;

// weights
// homeworks
var weightHomework1 = 0.08;
var weightHomework2 = 0.08;
var weightHomework3 = 0.08;
// quizzes
var weightQuiz1 = 0.02;
var weightQuiz2 = 0.02;
var weightQuiz3 = 0.02;
var weightQuiz4 = 0.02;
// tests
var weightTest1 = 0.12;
var weightTest2 = 0.12;
var weightTest3 = 0.13;
// projects
var weightProject1 = 0.15;
var weightProject2 = 0.15;

// extra credit
var extraCreditProject1 = 0.01;
var extraCreditProject2 = 0.01;
var extraCreditProject3 = 0.03;
var extraCreditEvaluation = 0.01;

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
        console.log(" --- Pre getCalculations() call --- ");
    }

    if (DEBUG) {
        console.log(" --- Pre get known grades --- ");
    }

    // known grades
    // homeworks
    var valueKnownHomework1Grade = inputKnownHomework1Grade.val();
    var valueKnownHomework2Grade = inputKnownHomework2Grade.val();
    // quizzes
    var valueKnownQuiz1Grade = inputKnownQuiz1Grade.val();
    var valueKnownQuiz2Grade = inputKnownQuiz2Grade.val();
    var valueKnownQuiz3Grade = inputKnownQuiz3Grade.val();
    // tests
    var valueKnownTest1Grade = inputKnownTest1Grade.val();
    var valueKnownTest2Grade = inputKnownTest2Grade.val();
    // projects
    var valueKnownProject1Grade = inputKnownProject1Grade.val();
    // extra credit
    var valueKnownProject1ExtraCredit = inputKnownProject1ExtraCredit.prop("checked") ? 0.01 : 0;
    var valueKnownProject2ExtraCredit = inputKnownProject2ExtraCredit.prop("checked") ? 0.01 : 0;

    if (!valueKnownHomework1Grade) {
        $("#knownHomework1Field").addClass("error");
    }
    if (!valueKnownHomework2Grade) {
        $("#knownHomework2Field").addClass("error");
    }
    if (!valueKnownQuiz1Grade) {
        $("#knownQuiz1Field").addClass("error");
    }
    if (!valueKnownQuiz2Grade) {
        $("#knownQuiz2Field").addClass("error");
    }
    if (!valueKnownQuiz3Grade) {
        $("#knownQuiz3Field").addClass("error");
    }
    if (!valueKnownTest1Grade) {
        $("#knownTest1Field").addClass("error");
    }
    if (!valueKnownTest2Grade) {
        $("#knownTest2Field").addClass("error");
    }
    if (!valueKnownProject1Grade) {
        $("#knownProject1Field").addClass("error");
    }

    var validKnowns = !(!valueKnownHomework1Grade || !valueKnownHomework2Grade || !valueKnownQuiz1Grade || !valueKnownQuiz2Grade || !valueKnownQuiz3Grade || !valueKnownTest1Grade || !valueKnownTest2Grade || !valueKnownProject1Grade);

    if (DEBUG) {
        console.log(" --- Pre get known grades --- ");
    }

    if (DEBUG) {
        console.log(" --- Pre get expected grades --- ");
    }

    // expected grades
    var valueExpectedHomework3Grade = inputExpectedHomework3Grade.val();
    var valueExpectedQuiz4Grade = inputExpectedQuiz4Grade.val();
    var valueExpectedTest3Grade = inputExpectedTest3Grade.val();
    var valueExpectedProject2Grade = inputExpectedProject2Grade.val();
    var valueExpectedProject3ExtraCredit = inputExpectedProject3ExtraCredit.prop("checked") ? 0.03 : 0;
    var valueExpectedEvaluationExtraCredit = inputExpectedEvaluationExtraCredit.prop("checked") ? 0.01 : 0;

    if (!valueExpectedHomework3Grade) {
        $("#expectedHomework3Field").addClass("error");
    }
    if (!valueExpectedQuiz4Grade) {
        $("#expectedQuiz4Field").addClass("error");
    }
    if (!valueExpectedTest3Grade) {
        $("#expectedTest3Field").addClass("error");
    }
    if (!valueExpectedProject2Grade) {
        $("#expectedProject2Field").addClass("error");
    }

    var validExpectations = !(!valueExpectedHomework3Grade || !valueExpectedQuiz4Grade || !valueExpectedTest3Grade || !valueExpectedProject2Grade);

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
        console.log("Valid knowns: " + validKnowns);
        // expected grades
        console.log("Expected homework 3 grade: " + valueExpectedHomework3Grade);
        console.log("Expected quiz 4 grade: " + valueExpectedQuiz4Grade);
        console.log("Expected test 3 grade: " + valueExpectedTest3Grade);
        console.log("Expected project 2 grade: " + valueExpectedProject2Grade);
        console.log("Expected project 3 extra credit: " + valueExpectedProject3ExtraCredit);
        console.log("Expected evaluation extra credit: " + valueExpectedEvaluationExtraCredit);
        console.log("Valid expectations: " + validExpectations);
    }

    if (DEBUG) {
        console.log(" --- Pre calculate --- ");
    }

    var pointsPer = [pointsPerHomework, pointsPerQuiz, pointsPerTest, pointsPerProject];
    var weights = [
        [weightHomework1, weightHomework2, weightHomework3],
        [weightQuiz1, weightQuiz2, weightQuiz3, weightQuiz4],
        [weightTest1, weightTest2, weightTest3],
        [weightProject1, weightProject2]
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
        console.log(" --- Post getCalculations() call --- ");
    }

    return {
        extraCredit,
        totalGrades,
        overallGrade,
        valid: validKnowns && validExpectations
    };
}

$("#calculateButton").click(function() {
    var calculations = getCalculations();
    var extraCredit = calculations.extraCredit;
    var totalGrades = calculations.totalGrades;
    var overallGrade = calculations.overallGrade;
    var valid = calculations.valid;

    if (valid) {
        var message = "<strong>Percentages:</strong><br>";
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
    }
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