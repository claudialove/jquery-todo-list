$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//DELETE TO-DO
//listen for click
$("ul").on("click", "span", function () {
    //fade out + disappear
    $(this).parent().fadeOut(500, function(){
       $(this).remove(); 
    });
    event.stopPropagation();
});

//ADD TO-DO

$("input[type='text']").keypress(function(event){
    if (event.which === 13) {
        //this is what grabs the user input 
        var todoText = $(this).val();
        //then reset text balnk to empty string
        $(this).val("");
        //create a new li and add to ul using append
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
