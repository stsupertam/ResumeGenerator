function plus_button(type, counter){
    temp = type.split('-');
    copy_id =  type + '-' + counter;
    origin = "#" + type + '-' + (counter -1);
    target = ".input." + temp[0];
    var html = $(origin).clone(true, true);
    if(temp[1] == "joblist"){
        target = ".input.joblist." + temp[2];
    }
    html.attr("id", copy_id);
    $(target).append(html);
}

function minus_button(type, counter){
    var id = type + counter;
    $(id).remove();
}

var counter_skill = 1;
var counter_qualification = 1;
var counter_joblist = [];

function get_correct_counter(){
    temp = $(".form-group.skill").find("input").last().attr("id").split('-');
    counter_skill = parseInt(temp[1]);
    temp = $(".form-group.qualification").find("input").last().attr("id").split('-');
    counter_qualification = parseInt(temp[1]);
    temp = $(".container.experience").find(".experience").last().attr("class").split(' ');
    for(i=0; i<temp[1]; i++){
        target = ".input.joblist." + (i+1);
        temp2 = $(target).find("input").last().attr("id").split('-');
        counter_joblist[i+1] = parseInt(temp2[3]);
    }
}

$(function() {
    $(".plus-function.sm").click(function(){
        get_correct_counter();
        var parent_class = $(this).parent().attr("class").split(' ');
        if(parent_class[1] == "skill"){
            counter_skill += 1;
            plus_button("skill", counter_skill);
        }
        else if(parent_class[1] == "qualification"){
            counter_qualification += 1;
            plus_button("qualification", counter_qualification);
        }
        else if(parent_class[1] == "joblist"){
            if(counter_joblist[parent_class[2]] == null){
                counter_joblist[parent_class[2]] = 1;
            }
            counter_joblist[parent_class[2]] += 1;
            joblist = "exp-joblist-" + parent_class[2]; 
            plus_button(joblist, counter_joblist[parent_class[2]]);
        }
    });
    $(".minus-function.sm").click(function(){
        get_correct_counter();
        var parent_class = $(this).parent().attr("class").split(' ');
        if(parent_class[1] == "skill"){
            if(counter_skill >= 2){
                minus_button("#skill-", counter_skill);
                counter_skill -= 1;
            }
        }
        else if(parent_class[1] == "qualification"){
            if(counter_qualification >= 2){
                minus_button("#qualification-", counter_qualification);
                counter_qualification -= 1;
            }
        }
        else if(parent_class[1] == "joblist"){
            if(counter_joblist[parent_class[2]] != null){
                if(counter_joblist[parent_class[2]] >= 2){
                    joblist = "#exp-joblist-" + parent_class[2] + "-";
                    minus_button(joblist, counter_joblist[parent_class[2]]);
                    counter_joblist[parent_class[2]] -= 1;
                }
            }
        }
    });
});
