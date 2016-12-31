$(function(){
    form_class = $("form").attr("class").split(' ');
    url = "/api/company/" + form_class[1] + "/";
    $.getJSON(url, function(data){
        $("#name").attr("value", data.name);
        $("#jobtype").attr("value", data.jobtype);
        $("#income").attr("value", data.income);
        $("#rating").attr("value", data.rating);
        $("#startDate").attr("value", data.startDate);
        $("#endDate").attr("value", data.endDate);
        $("#description").text(data.description);
        $("input.valid").show();
        $("input").addClass("valid");
    });


});

$(function(){
    $(".btn.btn-primary.submit").click(function(){
        if($("#name").is("input.valid") && $("#jobtype").is("input.valid") && $("#rating").is("input.valid") && $("#income").is("input.valid") && $("#endDate").is("input.valid") && $("#startDate").is("input.valid")){
            url = "/api/company/" + this.id + "/";
            var serialize =
                    $.ajax({
                        type: "PUT",
                        url: url,
                        dataType: "json",
                        contentType: "application/json",
                        data: JSON.stringify($("form").serializeObject()),
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
                            setTimeout(function(){
                                window.location.href = "/list/";
                            },3000);
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

