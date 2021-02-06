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

// function openNav() {
//     $("#id-side-nav").css(
//         "width", "250px"
//     );
// }

// function closeNav() {
//     $("#id-side-nav").css(
//         "width", "0"
//     );
// }
