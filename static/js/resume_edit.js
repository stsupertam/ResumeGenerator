function get_json(){
    var data = {};
    var skill_inp = [];
    var qualification_inp = [];
    var personal_info_inp = $(".form-horizontal.1").serializeObject();
    for(var key in personal_info_inp)
        data[key] = personal_info_inp[key];
    $(".form-horizontal.2").find("input").each(function(i){
        input_name = $(this).attr("id").split("-");
        if(input_name[1] == "skill")
            skill_inp.push($(this).attr("value"));
        else
            qualification_inp.push($(this).attr("value"));

    });
    var education_inp = [];
    $(".education").each(function(i, obj){
        class_name = $(this).attr("class");
        if(class_name != "container education" && class_name != "education"){
            i -= 1;
            var element_selelector = ".education." + i + " " + ":input";
            education_inp.push($(element_selelector).serializeObject());
        }
    });
    var experience_inp = [];
    $(".experience").each(function(i, obj){
        class_name = $(this).attr("class");
        if(class_name != "container experience" && class_name != "experience"){
            i -= 1;
            var element_selelector = ".experience." + i + " " + ":input";
            experience_inp.push($(element_selelector).serializeObject());
            if(experience_inp[i-1]['joblist'].length <= 1){
                experience_inp[i-1]['joblist'] = [experience_inp[i-1]['joblist']];
            }
        }
    });
    data['qualification'] = qualification_inp;
    data['skill'] = skill_inp;
    data['education'] = education_inp;
    data['experience'] = experience_inp;
    data = JSON.stringify(data);
    return data;
}

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
