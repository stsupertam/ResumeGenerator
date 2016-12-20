$(function() {
  $("#submit").click(function(){
    if($("#name").is("input.valid") && $("#jobtype").is("input.valid") && $("#rating").is("input.valid") && $("#income").is("input.valid") && $("#endDate").is("input.valid") && $("#startDate").is("input.valid")){
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
          $("#income").removeClass("valid");
          $("#rating").removeClass("valid");
          $("#startDate").removeClass("valid");
          $("#endDate").removeClass("valid");
          $(".failure").hide();
          $(".error").hide();
        },
        error: function(xhr, resp, text){
          console.log(xhr, resp, text);
          for(item in xhr.responseJSON){
            if(item=="slug"){
              $(".error.name").show();
              $("#name").removeClass("valid").addClass("invalid");
            }
            if(item=="rating"){
              $(".error.rating").show();
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
