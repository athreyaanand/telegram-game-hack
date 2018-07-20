var MY_SCORE = 300; //<----ENTER YOUR SCORE HERE

//Let's clean up the link so we can use it later
var loc = (location.hash || "").substr(1), loc = loc.replace(/[\?&].*/g, "");

//Set up the master hack function
function hackit(dataset, success) {
    //We obvi need a http request, an array for URI components we want to pass in with the req, and an empty index var for the for loop
    var request = new XMLHttpRequest, components = [], i;
    
    //Add our data to our components array
    for (i in dataset) components.push(encodeURIComponent(i) + "=" + encodeURIComponent(dataset[i]));
    
    //Set our http reuest onreadystatechange variable
    request.onreadystatechange = function () {
        4 == request.readyState && 200 == request.status && success(JSON.parse(request.responseText))
    };
    
    //Open the request to get ready for the HACK mwahaahahaha
    request.open("POST", "/api/setScore", !0);
    //This combines our components with an "&" in between the two elements and sends it!
    request.send(components.join("&"))
}

//LET'S HACK IT!!!
hackit({
    data: loc,
    score: MY_SCORE || 0
   }, function (a) {
    console.log("Success");
    console.log(a);
   });
