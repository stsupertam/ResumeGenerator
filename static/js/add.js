$(function() {
  $("#submit").click(function(){
    if($("#name").is("input.valid") && $("#jobtype").is("input.valid")){
      var serialize =
      $.ajax({
        type: "POST",
        url: "/api/company/",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify($("form").serializeObject()),
        async: false,
        success: function(result){
          $(".success").show();
          $("form").trigger("reset");
          $("#jobtype").removeClass("valid");
          $("#name").removeClass("valid");
          $(".failure").hide();
        },
        error: function(xhr, resp, text){
          console.log(xhr, resp, text);
          for(item in xhr.responseJSON){
            if(item=="slug"){
              $(".error.name").show();
            }
          }
        }
      });
    }
    else{
      $(".failure").show();
      $(".success").hide();
    }
  });
});
