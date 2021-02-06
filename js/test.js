
const APIKEY = "60190dbd6adfba69db8b6c8d";
var level = 1;
var xp = 0;

get_level_bar();

$("#task-button").on("click", function (e) {
    // prevent default action of the button
    e.preventDefault();

    // retrieve form values
    let taskContent= $("#task-content").val();
    // let time = $("").val();

    // get form values when user clicks
    let jsondata = {
        "task": taskContent
        // "time": 
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
        "data": JSON.stringify(jsondata)
    }

    // sends request to DB
    $.ajax(settings).done(function (response) {
        console.log(response);
        getTasks();
    });

})


$("#task-result").on("click", ".delete", function (e) {
  // prevent default action of the button
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
  // prevent default action of the button
  e.preventDefault();
  var str = $('#thingy-1').val()
  $('#thingy-1').val("");
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


$("#task-result").on("click", ".checkmark", function (e) {
  // prevent default action of the button
  e.preventDefault();

  // retrieve form values
  var newval = $(this).data("task")
  let taskContent= newval
  window.xp += 20
  if (window.xp === 100) {
    window.level += 1
    window.xp = 0
  }

  // get form values when user clicks
  let jsondata = {
      "task": taskContent
      // "time": 
  };

  // creating AJAX settings
  let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://tuhveezt-1b53.restdb.io/rest/tasks-completed",
      "method": "POST", 
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata)
  }

  // sends request to DB
  $.ajax(settings).done(function (response) {
      console.log(response);
  });

  var temp = $(this).data("id")
  let settings2 = {
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

  $.ajax(settings2).done(function (response) {
    console.log(response);
    getTasks();
    getCompletedtasks();
    update_level_bar();
    console.log(window.level);
    console.log(window.xp);
  });

})


$("#completed-tasks").on("click", ".delete2", function (e) {
  // prevent default action of the button
  e.preventDefault();
  var temp = $(this).data("id")
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://tuhveezt-1b53.restdb.io/rest/tasks-completed/${temp}`,
    "method": "DELETE",
    "headers": {
      "content-type": "application/json",
      "x-apikey": APIKEY,
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    getCompletedtasks();
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
      <td class="item">

      <input type="checkbox" value="" id="flexCheckDefault" class="checkmark form-check-input" data-id='${response[i]._id}' data-task='${response[i].task}'>

      <div class="button-play">
        <img type="checkbox" id="play-${response[i]._id}" class="play-button" src="../images/play_button.svg">
        <!-- <img id="pause-${response[i]._id}" class="pause-button" src="../images/pause_button.svg> -->
      </div>

      <span class="time" id="display-${response[i]._id}">00:00:00</span>
      <label class="form-check-label" for="flexCheckDefault"></label><span id="${response[i]._id}" class="task-span">
      ${response[i].task}</span></td>
      <td class="underline"><button type="button" id='task-delete' class='delete option button-design btn btn-danger btn-sm table-button' data-id='${response[i]._id}'>Delete</button></td>
      <td class="underline"><button type="button" id='task-update' class='update option button-design btn btn-info btn-sm table-button' data-id='${response[i]._id}'>Edit</button></td>
      </tr>`;

    }

    $("#task-result tbody").html(content);
    console.log('done');
    });

  }


function getCompletedtasks(all = true) {
  // creating ajax settings
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://tuhveezt-1b53.restdb.io/rest/tasks-completed",
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
      <td class="item"><span id="task-span" class="task-span">
      ${response[i].task}</span>
      <span class="time" id="display-${response[i]._id}">${response[i].time}</span></td>
      <td class="underline"><button type="button" id='task-delete2' class='delete2 option button-design btn btn-danger btn-sm table-button' data-id='${response[i]._id}'>Delete</button></td>
      </tr>`;

    }

    $("#completed-tasks tbody").html(content);
    console.log('done');
    });
}


function update_level_bar() {
  var jsondata = {"level": level, "xp": xp};
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://tuhveezt-1b53.restdb.io/rest/level/601e3c8449de2258000143fe",
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
  });
}

function get_level_bar() {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://tuhveezt-1b53.restdb.io/rest/level",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": APIKEY,
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    $('#percent').text( `${response[0].xp}%`)
    $('#xp').text( `XP: ${response[0].xp}/100`)
    $('#level').text( `Level: ${response[0].level}`)
    window.level = response[0].level;
    window.xp = response[0].xp;

    $('.html').css(
      "width", $('#percent').text()
  );


  });
}

function unlockables() {
  if (level => 2) {
    $(".reward-1").css(
      "visibility", "visible"
    );
  }

  if (level => 5) {
    $(".reward-2").css(
      "visibility", "visible"
    );
  }

  else if (level < 2) {
    $(".reward-1").css(
      "visibility", "hidden"
    );

    $(".reward-2").css(
      "visibility", "hidden"
    );
  }
}
