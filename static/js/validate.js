$("#name").on("input", function(){
  var input = $(this);
  var is_name = input.val();
  if(is_name){
    $(".success").hide();
    $(".failure").hide();
    input.removeClass("invalid").addClass("valid");
    input.next(".error").hide()
  }
  else{
    input.removeClass("valid").addClass("invalid");
    input.next(".error").show()
  }
});

$("#jobtype").on("input", function(){
  var input = $(this);
  var is_name = input.val();
  if(is_name){
    $(".success").hide();
    $(".failure").hide();
    input.removeClass("invalid").addClass("valid");
    input.next(".error").hide()
  }
  else{
    input.removeClass("valid").addClass("invalid");
    input.next(".error").show()
  }
});
