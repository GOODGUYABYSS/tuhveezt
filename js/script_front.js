$(document).ready(function () {
    // Makes a text field appear when "add-task" is clicked
    $("#add-task").click(function() {
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
});