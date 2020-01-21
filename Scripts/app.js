// Author: Jarod Colley 
// Student ID: 100704994
// Date Completed: Jan 21st 2020
"user strict";

// IIFE - immediatly invoked function expression
// means -> anonymous self-executing function
(function(){

    function Start()
    {
    let projects = document.getElementById("Products");
    projects.firstChild.lastChild.textContent = " Projects";

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

    //sets variables s=to hold all new tags 
    let nav = document.createElement("nav");
    let anchor = document.createElement("a");
    let main = document.getElementById("Main Nav");
    let body = document.getElementById("body")

    //sets all the needed attrivutes
    nav.setAttribute("class","navbar fixed-bottom navbar-dark bg-dark");
    anchor.setAttribute("class","navbar-brand");
    anchor.textContent = "\u00A9 Copyright 2020";

    //appends the anchor to the nav
    nav.appendChild(anchor);

    //inserts the nav 
    body.insertBefore(nav, main);

    }
    window.addEventListener("load", Start);

})();