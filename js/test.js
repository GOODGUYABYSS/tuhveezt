$("#").on("click", function (e) {
    const APIKEY = "60190dbd6adfba69db8b6c8d";
    // prevent default action of the button
    e.preventDefault();

    // retrieve form values
    let = $("#").val();

    // get form values when user clicks
    let jsondata = {
        "": ,
    }

    // creating AJAX settings
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "",
        "method": "POST", 
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
        "beforeSend": function(){
          $("").prop( "disabled", true);
          $("").trigger("reset");
        }
    }

    // sends request to DB
    $.ajax(settings).done(function (response) {
        console.log(response);
        
        $("#").prop( "disabled", false);
        
        
    });

    function getTasks(all = true) {
        // creating ajax settings
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "",
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            },
        }
        
        $.ajax(settings).done(function (response) {
      
            let content = "";
      
            for (var i = 0; i < response.length && i < limit; i++) {
              //console.log(response[i]);
              //[METHOD 1]
              //let's run our loop and slowly append content
              //we can use the normal string append += method
              /*
              content += "<tr><td>" + response[i].name + "</td>" +
                "<td>" + response[i].email + "</td>" +
                "<td>" + response[i].message + "</td>
                "<td>Del</td><td>Update</td</tr>";
              */

              content = `${content}<tr id='${response[i]._id}'><td>${response[i].name}</td>
              <td>${response[i].studentid}</td>
              <td>${response[i].mentor}</td>
              <td>${response[i].studentclass}</td>
              <td>${response[i].email}</td>
              <td>${response[i].message}</td>
              <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td>
              <td><a href='#update-contact-container' class='update' data-id='${response[i]._id}' data-msg='${response[i].message}' data-name='${response[i].name}' data-studentid= '${response[i].studentid}' data-mentor= '${response[i].mentor}' data-studentclass= '${response[i].studentclass}' data-email='${response[i].email}'>Update</a></td></tr>`;
      
            }
      
            //[STEP 9]: Update our HTML content
            //let's dump the content into our table body
            $("#contact-list tbody").html(content);
      
            $("#total-contacts").html(response.length);
          });
      
      
        }

})