// Jarod Colley 
// 100704994
// Jan 21st 2020
"user strict";

// IIFE - immediatly invoked function expression
// means -> anonymous self-executing function
(function(){

    function Start()
    {
    let projects = document.getElementById("Products");
    projects.firstChild.lastChild.textContent = " Projects";
    console.log(projects);

    //putting the human resorces on the nav bar 
    let humanResources = projects.cloneNode(true);
    let contact = document.getElementById("Contact Us");
    //inserts the node into nav bar
    contact.parentNode.insertBefore(humanResources, contact);
    //sets the text to Human resources
    humanResources.firstChild.lastChild.textContent = " Human Resources";
    //changes the icon
    humanResources.firstChild.firstChild.setAttribute("class","fas fa-user-alt")
    //changes id so it is not the same as the one that was clonned
    humanResources.setAttribute("id", "Human Resources");

    }
    window.addEventListener("load", Start);

})();