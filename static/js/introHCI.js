'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("I don't do anything meaningful anymore");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);

	//need to define projectClick to make the mouse listener work
	function projectClick(e) { 
		//this is how you print something to the javascript console
		console.log("Project clicked");
    	// prevent the page from reloading   
    	//says you're going to handle the event instead of the default handling   
    	e.preventDefault();
    	// In an event handler, $(this) refers to      
    	// the object that triggered the event      
    	$(this).css("background-color", "#7fff00");
    	var containingProject = $(this).closest(".project"); 
    	var description = $(containingProject).find(".project-description");
    	if (description.length == 0) { 
       		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    	} else { 
       		description.fadeOut();
    	}
	}

	$("#submitBtn").click(submitClick);

	function submitClick(e){
		var chosenProject = $("#project").val();
		$(chosenProject).animate({
			width: $("#width").val()
		}, 1000);
		var description = $(chosenProject).find(".project-description");
    	if (description.length == 0) { 
       		$(chosenProject).append("<div class='project-description'><p>" + $("#description").val() + ".</p></div>"); 
    	} else { 
       		description.text($("#description").val());
    	}

	}

// 	function projectClick(e) {
//   // Cancel the default action, which prevents the page from reloading
//     e.preventDefault();

//     // In an event listener, $(this) is the leement that fired the event
//     console.log("looking for project title");
//     var projectTitle = $(this).find("p").text();
//     console.log("projectTitle is " + projectTitle);
//     var jumbotronHeader = $(".jumbotron h1");
//     console.log("jumbotronHeader is gotten");
//     console.log("setting text...");
//     jumbotronHeader.text(projectTitle);
// }
}