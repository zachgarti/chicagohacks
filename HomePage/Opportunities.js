
function createDynamic(){
    if(localStorage.length == null){
        alert("no opps bro")
    }else{
        console.log(localStorage.length)
        for(i=0;i<localStorage.length;i++)
        {
            console.log("hi")
            storedNames = JSON.parse(localStorage.getItem("'"+i+"'"));
            console.log(storedNames)
            document.getElementById('boxed').innerHTML += '<h2> <p> <span id="title">'+storedNames[0]+'</span> <br />'
            document.getElementById('boxed').innerHTML += 'Description: <span id="description">' + storedNames[1] + '</span>  <br />'
            document.getElementById('boxed').innerHTML += 'Location: <span id= "location">'+ storedNames[3] +'</span> <br /> '
            document.getElementById('boxed').innerHTML += 'Required Age: <span id="age">'+ storedNames[2] +'</span> </p></p></h2>'
        }
        
    }

}

//document.getElementById('boxed').innerHTML +=   ;
