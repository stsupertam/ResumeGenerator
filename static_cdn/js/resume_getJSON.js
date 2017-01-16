function get_json(){
    var data = {};
    var skill_inp = [];
    var qualification_inp = [];
    var personal_info_inp = $(".form-horizontal.resume.1").serializeObject();
    for(var key in personal_info_inp)
        data[key] = personal_info_inp[key];
    sq_data = $(".form-horizontal.resume.2").serializeObject();
    if(sq_data['skill'].constructor === Array)
        for(i=0 ;i<sq_data['skill'].length ;i++)
            skill_inp.push(sq_data['skill'][i]);
    else
        skill_inp.push(sq_data['skill']);
    if(sq_data['qualification'].constructor === Array)
        for(i=0 ;i<sq_data['qualification'].length ;i++)
            qualification_inp.push(sq_data['qualification'][i]);
    else
        qualification_inp.push(sq_data['qualification']);
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
            if(experience_inp[i-1]['joblist'].constructor !== Array){
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

