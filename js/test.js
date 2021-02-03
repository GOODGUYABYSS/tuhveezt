const APIKEY = "60190dbd6adfba69db8b6c8d";
var editmode = false
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
  e.preventDefault();
  if (editmode) {
    $('.task-span').replaceWith(function () {
        return $("<span>", {
            "class": this.className,
            text: this.value
        });
    });
    editmode = false;
} else {
    $('.task-span').replaceWith(function () {
        return $("<input>", {
            value: this.innerText,
                "class": this.className
        });
    });
    editmode = true;
  }

  var temp = $(this).data("id")
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://tuhveezt-1b53.restdb.io/rest/tasks/${temp}`,
    "method": "PUT",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "<your CORS apikey here>",
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
      <td class="item"><span class="task-span">${response[i].task}</span></td>
      <td><button id='task-delete' class='delete' data-id='${response[i]._id}'>Delete</button></td>
      <td><button id='task-update' class='update' data-task='${response[i].task}'>Edit Task</button></td></tr>`;

    }

    $("#task-result tbody").html(content);
    console.log('done');

    // $("#total-contacts").html(response.length);
    });

  }