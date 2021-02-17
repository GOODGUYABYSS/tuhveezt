// setting APIKEY to access RESTDB Database
const APIKEY = "60190dbd6adfba69db8b6c8d";
var level = 1;
var xp = 0;

// update the level and xp according to the database
get_level_bar();

// adding a task on the website and posting the content to the database
$("#task-button").on("click", function (e) {
    // prevent default action of the button
    e.preventDefault();

    // retrieve form values
    let taskContent= $("#task-content").val();
    let time = '0'
    // let time = $("").val();

    // get form values when user clicks
    let jsondata = {
        "task": taskContent,
        "time": '0'
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
        // refreshes the table to display updated tasks
        getTasks();
    });

})

// deleting a task from the table and the database
$("#task-result").on("click", ".delete", function (e) {
  // prevent default action of the button
  e.preventDefault();
  // retrieving id information of task
  var temp = $(this).data("id")
  // creating AJAX settings
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
  
  // sends request to DB
  $.ajax(settings).done(function (response) {
    console.log(response);
    // refreshes the table to display updated tasks
    getTasks();
  });

})


// updates the task in the table and the database
$("#task-result").on("click", ".update", function (e) {
  // prevent default action of the button
  e.preventDefault();
  // retrieving form value from input
  var str = $('#thingy-1').val()
  $('#thingy-1').val("");
  console.log(str);
  var time = $(this).data("time")
  var jsondata = {"task": str, "time": time};
  // retrieving id information of task
  var temp = $(this).data("id")
  // creating AJAX settings
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

  // sends request to DB
  $.ajax(settings).done(function (response) {
    console.log(response);
    // refreshes the table to display updated tasks
    getTasks();
  });

})

$("#task-result").on("click", ".pause-button", function(e) {
  // prevent default action of the button
  e.preventDefault();
  // retrieve task information
  var temp = $(this).data("id")
  var temp2 = $(this).data("task")
  console.log(temp);
  console.log(milli);
  console.log(key);

  var jsondata = {"task": temp2, "time": milli}
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
  });
  
})



// completes task in the table and the database
$("#task-result").on("click", ".checkmark", function (e) {
  // prevent default action of the button
  e.preventDefault();

  // retrieve task information
  var newval = $(this).data("task")
  let taskContent= newval
  var time = $(this).data("time")
  // setting increase in xp and level features for gamification
  window.xp += 20
  if (window.xp === 100) {
    window.level += 1
    window.xp = 0
  }

  // get form values when user clicks
  let jsondata = {
      "task": taskContent,
      "time": time
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

  // initiates another action to delete the task from the tasks table since it would be displayed in the completed tasks table
  // retrieving id information of task
  var temp = $(this).data("id")
  // creating AJAX settings
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

  // sends request to DB
  $.ajax(settings2).done(function (response) {
    console.log(response);
    // updates the both the tasks and completed tasks tables and also updates the level and xp of user
    getTasks();
    getCompletedtasks();
    update_level_bar();
    console.log(window.level);
    console.log(window.xp);
  });

})

// delete task completed task table
$("#completed-tasks").on("click", ".delete2", function (e) {
  // prevent default action of the button
  e.preventDefault();
  // retrieving id information of task
  var temp = $(this).data("id")
  // creating AJAX settings
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
  
  // sends request to DB
  $.ajax(settings).done(function (response) {
    console.log(response);
    // updates completed tasks table
    getCompletedtasks();
  });

})

// function to get tasks information from database and also to display the result
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
  
  // sends request to DB
  $.ajax(settings).done(function (response) {
    let content = "";
    ids = {}
    timerInterval = {}
    
    // initiating a loop to display all the tasks information from the database, delete and update function to html in the form of a table
    for (var i = 0; i < response.length; i++) {
      var time_seconds = timeToString(response[i].time);

      ids[`display-${response[i]._id}`] = response[i].time;
      timerInterval[`display-${response[i]._id}`] = 0;

      content = `${content}<tr id='${response[i]._id}'>
      <td class="item">

      <input type="checkbox" value="" id="flexCheckDefault" class="checkmark form-check-input" data-id='${response[i]._id}' data-task='${response[i].task}' data-time='${time_seconds}'>

      <div class="button-play">
        <img type="checkbox" id="play-${response[i]._id}" class="play-button" src="../images/play_button.svg">
        <img id="pause-${response[i]._id}" data-id='${response[i]._id}' data-task='${response[i].task}' class="pause-button" src="../images/pause_button.svg">
      </div>

      <span class="time" id="display-${response[i]._id}">${time_seconds}</span>
      <label class="form-check-label" for="flexCheckDefault"></label><span id="${response[i]._id}" class="task-span">
      ${response[i].task}</span></td>
      <td class="underline"><button type="button" id='task-delete' class='delete option button-design btn btn-danger btn-sm table-button' data-id='${response[i]._id}'>Delete</button></td>
      <td class="underline"><button type="button" id='task-update' class='update option button-design btn btn-info btn-sm table-button' data-id='${response[i]._id}' data-time='${response[i].time}'>Edit</button></td>
      </tr>`;
    }

    $("#task-result tbody").html(content);
    console.log('done');
    });

  }

// function to get completed tasks information from database and also to display the result
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

  // sends request to DB
  $.ajax(settings).done(function (response) {
    let content = "";
    // initiating a loop to display all the completed tasks information from the database to html in the form of a table
    for (var i = 0; i < response.length; i++) {

      content = `${content}<tr id='${response[i]._id}'>
      <td class="item"><span id="task-span" class="task-span">
      ${response[i].task}</span>
      <span class="time" id="display-${response[i]._id}">${response[i].time}</span></td>
      <td class="underline"><button type="button" id='task-delete2' class='delete2 option button-design btn btn-danger btn-sm table-button font-size' data-id='${response[i]._id}'>Delete</button></td>
      </tr>`;

    }
    // displaying the tasks in the form of a table
    $("#completed-tasks tbody").html(content);
    console.log('done');
    });
}


function update_level_bar() {
  var jsondata = {"level": level, "xp": xp};
  // creating ajax settings
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
  
  // sends request to DB
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

function get_level_bar() {
  // creating ajax settings
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
  
  // sends request to DB
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

  unlockables();

  });
}


function unlockables() {
  $(".reach-level-2").css(
    "display", "block"
  );
  
  $(".reach-level-5").css(
    "display", "block"
  );

  $(".reward-1").css(
    "display", "none"
  );

  $(".reward-2").css(
    "display", "none"
  );


  if (window.level > 2 || window.level == 2) {
    $(".reach-level-2").css(
      "display", "none"
    );

    $(".reward-1").css(
      "display", "block"
    );
  }

  if (window.level > 5 || window.level == 5) {
    $(".reach-level-5").css(
      "display", "none"
    );

    $(".reward-2").css(
      "display", "block"
    );
  }
}


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
    let displayVal = e.target.id.replace('play-', 'display-');
    displayVal2 = e.target.id.replace('play-', '');
    console.log(displayVal);

    start(displayVal, displayVal2);

    console.log(e.target.id);
    buttonPlayID = $(`#${e.target.id}`);
    buttonPauseID = $(`#${e.target.id.replace('play-', 'pause-')}`);

    buttonPlayID.css(
        "display", "none"
    );

    buttonPauseID.css(
        "display", "inline"
    );
});

$("#task-result").on("click", ".pause-button", function(e) {
    let displayVal = e.target.id.replace('pause-', 'display-'); 
    pause(displayVal);

    console.log(e.target.id);
    let buttonPauseID = $(`#${e.target.id}`);
    let buttonPlayID = $(`#${e.target.id.replace('pause-', 'play-')}`);

    buttonPauseID.css(
        "display", "none"
    );

    buttonPlayID.css(
        "display", "inline"
    );
});

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMins = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMins);

    let diffInSecs = (diffInMins - mm) * 60;
    let ss = Math.floor(diffInSecs);

    let diffInMs = (diffInSecs - ss) * 1000;
    let ms = Math.floor(diffInMs);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}`;
}

function getTaskIds() {
  table = document.getElementById("task-result");
  
  for (let line = 1; line < table.rows.length; line++) {
    
  }
}

let startTime = {};
// let timerInterval;

function print(txt, displayVal) {
  document.getElementById(displayVal).innerHTML = txt;
}

function start(displayVal, displayVal2) {
    // if (ids.hasOwnProperty(displayVal) == false) {
    //     ids[displayVal] = 0;
    // }

    startTime[displayVal] = Date.now() - ids[displayVal];
    timerInterval[displayVal] = setInterval(function printTime() {
      key = displayVal2;
      ids[displayVal] = Date.now() - startTime[displayVal];
      milli = ids[displayVal];
      console.log(milli);
      print(timeToString(milli), displayVal);
    }
), 1000}

function pause(displayVal) {
    clearInterval(timerInterval[displayVal]);
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