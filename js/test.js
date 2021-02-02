$("#task-button").on("click", function (e) {
    const APIKEY = "60190dbd6adfba69db8b6c8d";
    // prevent default action of the button
    e.preventDefault();

    // retrieve form values
    let taskContent= $("#task-content").val();

    // get form values when user clicks
    let jsondata = {
        "task": taskContent
    };

    // creating AJAX settings
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://tuhveezt-1b53.restdb.io/rest/tasks",
        "method": "POST", 
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
        "beforeSend": function(){
          $("#add-task-form").trigger("reset");
        }
    }

    // sends request to DB
    $.ajax(settings).done(function (response) {
        console.log(response);

        $("#add-update-msg").show().fadeOut(4000);

        getTasks();
        
    });

    function getTasks(all = true) {
        // creating ajax settings
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://tuhveezt-1b53.restdb.io/rest/tasks",
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            },
        }
        
        $.ajax(settings).done(function (response) {
      
            let content = "";
      
            for (var i = 0; i < response.length; i++) {

              content = `${content}<tr id='${response[i]._id}'>
              <td>${response[i].task}</td>
              <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td>
              <td><a href='#update-contact-container' class='update' data-task='${response[i].task}'>Update</a></td></tr>`;
      
            }

            $("#task-result tbody").html(content);
      
            // $("#total-contacts").html(response.length);
          });
      
      
        }

})