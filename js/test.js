const APIKEY = "60190dbd6adfba69db8b6c8d";

$("#task-button").on("click", function (e) {
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
        getTasks();
    });

})


$("#task-result").on("click", ".delete", function (e) {
  e.preventDefault();
  var temp = $(this).data("id")
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://tuhveezt-1b53.restdb.io/rest/tasks/${temp}`,
    "method": "DELETE",
    "headers": {
      "content-type": "application/json",
      "x-apikey": APIKEY,
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    getTasks();
  });

})


$("#task-result").on("click", ".update", function (e) {
  var str = $('#thingy-1').val()
  $('#thingy-1').val("");
  e.preventDefault();
  var jsondata = {"task": str};
  var temp = $(this).data("id")
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://tuhveezt-1b53.restdb.io/rest/tasks/${temp}`,
    "method": "PUT",
    "headers": {
      "content-type": "application/json",
      "x-apikey": APIKEY,
      "cache-control": "no-cache"
    },
    "processData": false,
    "data": JSON.stringify(jsondata)
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
    getTasks();
  });

})


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
      <td class="item"><span id="task-span" class="task-span">${response[i].task}</span></td>
      <td class="underline"><button type="button" id='task-delete' class='delete option button-design btn btn-danger btn-sm table-button' data-id='${response[i]._id}'>Delete</button></td>
      <td class="underline"><button type="button" id='task-update' class='update option button-design btn btn-info btn-sm table-button' data-id='${response[i]._id}'>Edit</button></td>
      </tr>`;

    }

    $("#task-result tbody").html(content);
    console.log('done');

    // $("#total-contacts").html(response.length);
    });

  }
