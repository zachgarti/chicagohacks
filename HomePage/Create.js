
function master(){
    var lengths = JSON.parse(localStorage.length);
    var toStorage = [];
    toStorage.push(getTitle())
    toStorage.push(getDescription())
    toStorage.push(getAge())
    toStorage.push(getLocation())
    alertBox()
    if(lengths == null){
        localStorage.setItem("'"+0+"'", JSON.stringify(toStorage));
    }else{
        localStorage.setItem("'"+lengths+"'", JSON.stringify(toStorage));
    }
    createBox()
}

function getTitle() {
     var title = document.getElementById("title").value;
     return title;
}

function getDescription() {
    var description = document.getElementById("description").value;
    return description;
}

function getAge() {
    var age = document.getElementById("age").value;
    return age;
}

function getLocation() {
    var location = document.getElementById("location").value;
    return location;
}

function alertBox() {
alert("Thanks For Creating A Volunteer Opportunity");
}

function createBox() {
    console.log("doesn't work");
    window.onload = function() {
        var thisdom = document.getElementById('boxed').innerHTML += 100000;
        console.log("box: " + thisdom)
    };

   
}