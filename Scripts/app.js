"user strict";

// IIFE - immediatly invoked function expression
// means -> anonymous self-executing function
(function(){

    function Start()
    {
    let projects = document.getElementById("products");
    projects.firstChild.lastChild.textContent = " Projects";
    console.log(projects);
    }
    window.addEventListener("load", Start);

})();