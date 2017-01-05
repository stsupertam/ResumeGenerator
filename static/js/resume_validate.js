$("input").on("input", function(){
    var input = $(this);
    var val = input.val();
    if(val){
        $(".success").hide();
        $(".failure").hide();
        input.removeClass("invalid").addClass("valid");
        input.next(".error").hide();
    }
    else{
        input.removeClass("valid").addClass("invalid");
        input.next(".error").show();
    }
});
