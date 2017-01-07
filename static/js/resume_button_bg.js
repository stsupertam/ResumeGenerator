function change_id(html, counter){
    count = true;
    html.find("input").each(function(){
        if($(this).attr("name") == "joblist"){
            if(count == true){
                temp = "li-joblist-" + counter + "-" + 1;
                count = false;
            }
            else{
                $(this).remove();
            }
        }
        else
            temp = "edu-" + $(this).attr("name") + "-" + counter;
        $(this).attr("id", temp);
    });
    return html;

}

function change_class(parent, html, counter){
    html.find("h1").text(counter);
    class_change_parent = parent + " " + counter; 
    if(parent == "experience"){
        class_change_form = ".form-group.joblist." + (counter - 1);
        target_change_form = "form-group joblist " + counter;
        class_change_input = ".input.joblist." + (counter - 1);
        target_change_input = "input joblist " + counter;
        html.find(class_change_form).attr("class", target_change_form);
        html.find(class_change_input).attr("class", target_change_input);
    }
    html.attr("class", class_change_parent);
    return html;
}

function plus_button_bg(type, counter){
    copy_id = type + " " + counter;
    origin = "." + type + "." + (counter -1);
    target = ".container." + type;
    var html = $(origin).clone(true, true);
    html = change_class(type , html, counter);
    html = change_id(html, counter);
    $(target).append(html);
}

function minus_button_bg(type, counter){
    var _class = type + counter;
    $(_class).remove();
}

var counter_exp = 1;
var counter_edu = 1;

$(function() {
    $(".plus-function.bg").click(function(){
        var parent_class = $(this).parent().attr("class");
        if(parent_class == "experience"){
            counter_exp += 1;
            plus_button_bg("experience", counter_exp);
        }
        if(parent_class == "education"){
            counter_edu += 1;
            plus_button_bg("education", counter_edu);
        }
    });
    $(".minus-function.bg").click(function(){
        var parent_class = $(this).parent().attr("class");
        if(parent_class == "experience"){
            if(counter_exp >= 2){
                minus_button_bg(".experience.", counter_exp);
                counter_exp -= 1;
            }
        }
        else if(parent_class == "education"){
            if(counter_edu >= 2){
                minus_button_bg(".education.", counter_edu);
                counter_edu -= 1;
            }
        }
    });
});
