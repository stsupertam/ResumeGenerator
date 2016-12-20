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

$("#startDate").on("input", function(){
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

$("#endDate").on("input", function(){
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

$("#rating").on("input", function(){
  var input = $(this);
  var is_rating = input.val();
  if(is_rating){
    $(".success").hide();
    $(".failure").hide();
    if(is_rating>=0 && is_rating<=5){
      input.removeClass("invalid").addClass("valid");
      input.next(".error").hide();
    }
    else{
      input.removeClass("valid").addClass("invalid");
      input.nextAll(".error.rating").show();
    }
  }
  else{
    input.removeClass("valid").addClass("invalid");
    input.next(".error").show();
  }
});

$("#income").on("input", function(){
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
