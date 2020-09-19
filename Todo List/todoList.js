//click individual 'li's' to put line through on text
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on trash can icon to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
    //checking to see if 'Enter' key was pressed
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

//click the 'Plus' sign to hide input form
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

