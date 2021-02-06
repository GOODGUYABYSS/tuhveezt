$(document).ready(function () {
    // Makes a text field appear when "add-task" is clicked
    $("#add-task").click(function() {
        console.log("add task");
        $("#button-group").css(
            "visibility", "visible"
        );

        $("#add-task").css(
            "visibility", "hidden"
        );
    });

    $("#task-button").click(function() {
        $("#add-task").css(
            "visibility", "visible"
        );

        $("#button-group").css(
            "visibility", "hidden"
        );
    });

    $("#cancel-button").click(function() {
        $('#add-task').css(
            "visibility", "visible"
        );

        $("#button-group").css(
            "visibility", "hidden"
        );
    })

    $("#open-menu").click(function() {
        console.log("open menu");
        openNav();
    });

    $("#close-menu").click(function() {
        closeNav();
    });

    $("#task-result").on("click", ".play-button", function(e) {
        console.log(e.target.id);
    });

    function timeToString(time) {
        let diffInHrs = time / 3600000;
        let hh = Math.floor(diffInHrs);

        let diffInMins = (diffInHrs - hh) * 60;
        let mm = Math.floor(diffInMins);

        let diffInSecs = (diffInMins - mm) * 60;
        let ss = Math.floor(diffInSecs);

        let diffInMs = (diffInSec - ss) * 1000;
        let ms = Math.floor(diffInMs);

        let formattedHH = hh.toString().padstart(2, "0");
        let formattedMM = mm.toString().padStart(2, "0");
        let formattedSS = ss.toString().padStart(2, "0");

        return `${formattedHH}:${formattedMM}:${formattedSS}`;
    }

    let startTime;
    let elapsedTime;
    let timerInterval;

    function print(txt) {
        document.getElementById(displayVal).innerHTML = txt;
    }

    function start() {
        let displayVal = "gay"

        startTime = Date.now();
        timerInterval = setInterval(function printTime() {
            elapsedTime = Date.now() - startTime;
            document.getElementById(displayVal).innerHTML = timeToString(elapsedTime);
        }
    ), 1000}

    function pause() {
        clearInterval(timerInterval);
    }

    function openNav() {
        document.getElementById("id-side-nav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
      }
      
      /* Set the width of the side navigation to 0 */
    function closeNav() {
        document.getElementById("id-side-nav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";  
      } 
    });
