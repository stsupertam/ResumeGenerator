function form_get(data){
    for(item in data){
        if(item == "skill" || item == "qualification"){
            for(i=1; i<=data[item].length; i++){
                target = "#" + item + "-" + i;
                plus_button(item, i);
                $(target).attr("value", data[item][i-1]);
            }
        }
        else if(item == "education"){
            for(i=1; i<=data[item].length; i++){
                plus_button_bg("education", i);
                for(item2 in data[item][i-1]){
                    target = "#edu-" + item2 + "-" + i;
                    $(target).attr("value", data[item][i-1][item2]);
                }
            }
        }
        else if(item == "experience"){
            for(i=1; i<=data[item].length; i++){
                plus_button_bg("experience", i);
                for(item2 in data[item][i-1]){
                    if(item2 != "joblist"){
                        target = "#exp-" + item2 + "-" + i;
                        parent = ".experience." + i;
                        $(target).attr("value", data[item][i-1][item2]);
                    }
                    else{
                        for(j=1; j<=data[item][i-1][item2].length; j++){
                            target = "#exp-" + item2 + "-" + i + "-" + j;
                            joblist = "exp-joblist-" + i;
                            plus_button(joblist, j);

                            $(target).attr("value", data[item][i-1][item2][j-1]);
                        }
                    }
                }
            }
        }
        else{
            var target = "#pes-" + item;
            $(".form-horizontal.resume.1").find(target).attr("value", data[item]);
        }
    }
}

$(function(){
    $(".resume-title").html("Edit Resume");
    // form_class = $("form").attr("class").split(' ');
    slug = $("div").attr("class");
    url = "/api/resume/" + slug + "/";
    $.getJSON(url, function(data){
        form_get(data);
        $("input").addClass("valid");
    });
});


function send_post(){
    data = get_json();
    slug = $("div").attr("class");
    url = "/api/resume/" + slug + "/";
    $.ajax({
        type: "PUT",
        url: url,
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
            setTimeout(function(){
                window.location.href = "/resume/view/" + slug;
            },3000);
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
