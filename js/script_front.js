// $(document).ready(function () {
//     // Makes a text field appear when "add-task" is clicked
//     $("#add-task").click(function() {
//         console.log("add task");
//         $("#button-group").css(
//             "visibility", "visible"
//         );

//         $("#add-task").css(
//             "visibility", "hidden"
//         );
//     });

//     $("#task-button").click(function() {
//         $("#add-task").css(
//             "visibility", "visible"
//         );

//         $("#button-group").css(
//             "visibility", "hidden"
//         );
//     });

//     $("#cancel-button").click(function() {
//         $('#add-task').css(
//             "visibility", "visible"
//         );

//         $("#button-group").css(
//             "visibility", "hidden"
//         );
//     })

//     $("#open-menu").click(function() {
//         console.log("open menu");
//         openNav();
//     });

//     $("#close-menu").click(function() {
//         closeNav();
//     });

//     $("#task-result").on("click", ".play-button", function(e) {
//         let displayVal = e.target.id.replace('play-', 'display-');
//         console.log(displayVal);

//         start(displayVal);

//         console.log(e.target.id);
//         buttonPlayID = $(`#${e.target.id}`);
//         buttonPauseID = $(`#${e.target.id.replace('play-', 'pause-')}`);

//         buttonPlayID.css(
//             "display", "none"
//         );

//         buttonPauseID.css(
//             "display", "inline"
//         );
//     });

//     $("#task-result").on("click", ".pause-button", function(e) {
//         pause();

//         console.log(e.target.id);
//         let buttonPauseID = $(`#${e.target.id}`);
//         let buttonPlayID = $(`#${e.target.id.replace('pause-', 'play-')}`);

//         buttonPauseID.css(
//             "display", "none"
//         );

//         buttonPlayID.css(
//             "display", "inline"
//         );
//     });

//     $(document).ajaxStart(function() {
//         $("#id-side-nav").css("display", "block");
//     });

//     $(document).ajaxComplete(function() {
//         $("#id-side-nav").css("display", "none");
//     })

//     function timeToString(time) {
//         let diffInHrs = time / 3600000;
//         let hh = Math.floor(diffInHrs);

//         let diffInMins = (diffInHrs - hh) * 60;
//         let mm = Math.floor(diffInMins);

//         let diffInSecs = (diffInMins - mm) * 60;
//         let ss = Math.floor(diffInSecs);

//         let diffInMs = (diffInSecs - ss) * 1000;
//         let ms = Math.floor(diffInMs);

//         let formattedHH = hh.toString().padStart(2, "0");
//         let formattedMM = mm.toString().padStart(2, "0");
//         let formattedSS = ss.toString().padStart(2, "0");

//         return `${formattedHH}:${formattedMM}:${formattedSS}`;
//     }

//     let startTime;
//     let timerInterval;
//     var ids = {};

//     let gays = {"display-606606969696969": 100, "display-12345": 200};

//     function print(txt, displayVal) {
//         console.log(displayVal);
//         document.getElementById(displayVal).innerHTML = txt;
//     }

//     function start(displayVal) {
//         if (ids.hasOwnProperty(displayVal) == false) {
//             ids[displayVal] = 0;
//         }

//         startTime = Date.now() - ids[displayVal];
//         timerInterval = setInterval(function printTime() {
//             ids[displayVal] = Date.now() - startTime;
//             print(timeToString(ids[displayVal]), displayVal);
//         }
//     ), 1000}

//     function pause() {
//         clearInterval(timerInterval);
//     }

//     function openNav() {
//         document.getElementById("id-side-nav").style.width = "250px";
//         document.getElementById("main").style.marginLeft = "250px";
//       }
      
//       /* Set the width of the side navigation to 0 */
//     function closeNav() {
//         document.getElementById("id-side-nav").style.width = "0";
//         document.getElementById("main").style.marginLeft = "0";  
//       } 
//     });
