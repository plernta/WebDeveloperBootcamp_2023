// Check Off Specific Todos by Clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//Click on x to delete Todo
$("ul").on("click","span",function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabing new Todo text from input
		var todoText = $(this).val();
		$("this").val("");
		// create new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})