function getUser(name) {
    fetch(`https://api.github.com/users/${name}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log(json);
        });
};

//get user data
getUser('yourUsernameHere');

async function getUserAsync2(name) {
    let response = await fetch(`https://api.github.com/users/${name}`);
    let data = await response.json()
    return data;
}

getUserAsync2('yourUsernameHere')
    .then(data => console.log(data));

async function getUserAsync(name) {
    let response = await fetch(`https://api.github.com/users/${name}`);
    let data = await response.json()
    return data;
}

getUserAsync('yourUsernameHere')
    .then(data => console.log(data));

fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
    .then(response => response.json())
    .then(commits => console.log(commits[0].author.login));


var request = new XMLHttpRequest();

request.open("POST", "confirmation.php");

request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        document.getElementById("result").innerHTML = this.responseText;
    }
};

var myForm = document.getElementById("myForm");
var formData = new FormData(myForm);

request.send(formData);


function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", "ajax_info.txt", true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) { // XMLHttpRequest.DONE == 4
            if (xmlhttp.status == 200) {
                document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
            } else if (xmlhttp.status == 400) {
                alert('There was an error 400');
            } else {
                alert('something else other than 200 was returned');
            }
        }
    };

}

function myPost(url, data, callback) {
    var xmlDoc = getXmlDoc();

    xmlDoc.open('POST', url, true);
    xmlDoc.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xmlDoc.onreadystatechange = function() {
        if (xmlDoc.readyState === 4 && xmlDoc.status === 200) {
            callback(xmlDoc);
        }
    }

    xmlDoc.send(data);
}


function loadDoc() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            document.getElementById("demo").innerHTML = this.responseText;

        }
    };
    xhttp.open("GET", "ajax_info.txt", true);

    xhttp.send();

}


function processForm(e) {
    $.ajax({
        url: 'users.php',
        dataType: 'text',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded',
        data: $(this).serialize(),
        success: function(data, textStatus, jQxhr) {
            $('#response pre').html(data);
        },
        error: function(jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

var myKeyVals = { A1984: 1, A9873: 5, A1674: 2, A8724: 1, A3574: 3, A1165: 5 }



var saveData = $.ajax({
    type: 'POST',
    url: "someaction.do?action=saveData",
    data: myKeyVals,
    dataType: "text",
    success: function(resultData) { alert("Save Complete") }
});
saveData.error(function() { alert("Something went wrong"); });
$(function() {
    $("#frm_details").on("submit", function(event) {
        event.preventDefault();

        var formData = {
            'email': $('input[name=email]').val() //for get email 
        };
        console.log(formData);

        $.ajax({
            url: "/tsmisc/api/subscribe-newsletter",
            type: "post",
            data: formData,
            success: function(d) {
                alert(d);
            }
        });
    });
})