function send_post(){
    data = get_json();
    $.ajax({
        type: "POST",
        url: "/api/resume/",
        dataType: "json",
        contentType: "application/json",
        data: data,
        async: false,
        success: function(result){
            $(".success").show();
            $("form").trigger("reset");
            $("input").each(function(){
                $(this).removeClass("valid");
            });
            $(".failure").hide();
            $(".error").hide();
        },
        error: function(xhr, resp, text){
            console.log(xhr, resp, text);
            $("#pes-firstname").removeClass("valid").addClass("invalid");
            $("#pes-lastname").removeClass("valid").addClass("invalid");
            $(".failure.unique").show();
        }
    });
}


$(function() {
    $("#submit").click(function(){
        var check = false;
        $("input").each(function(){
            if($(this).is("input.valid"))
                check = true;
            return false;
        });
        if(check){
            send_post();
        }
        else{
            $(".failure").show();
            $(".success").hide();
        }
    });
});


$(function(){
    $("#debug").click(function(){
        $("input").each(function(){
            $(this).addClass("valid");
            if($(this).attr("name") != "startDate" && $(this).attr("name") != "endDate")
                $(this).attr("value", "1");
            else
                $(this).attr("value", "0001-01-01");
        });
    });
});
