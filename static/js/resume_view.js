function add_sq(data, type){
    target = "#" + type + "-"; 
    first_element = target + 1;
    $(first_element).text(data[0]);
    class_target = ".sq-" + type; 
    for(i=1 ; i<data.length; i++){
        p = "<p>" + data[i] + "</p>";
        $(class_target).append(p);
    }
}

function add_edu(data){
    $("#degree-1").text(data[0]['degree']);
    $("#eduname-1").text(data[0]['major']);
    university_name = data[0]['university_name'] + "(GPA: " + data[0]['grade'].toFixed(2) + ")";
    $("#uname-1").text(university_name);
    start_year = data[0]['startDate'].split('-');
    end_year = data[0]['endDate'].split('-');
    date = start_year[0] + "-" + end_year[0];
    $("#edu-date-1").text(date);
    for(i=1; i<data.length; i++){
        var html = $(".edu-1").clone(true, true);
        degree = "degree-" + (i+1); 
        grade = "grade-" + (i+1); 
        university_name = "uname-" + (i+1); 
        eduname = "eduname-" + (i+1); 
        edudate = "edu-date-" + (i+1); 
        id_degree = "#degree-" + (i+1); 
        id_grade = "#grade-" + (i+1); 
        id_university_name = "#uname-" + (i+1); 
        id_eduname = "#eduname-" + (i+1); 
        id_edudate = "#edu-date-" + (i+1); 
        html.find("#degree-1").attr("id", degree);
        html.find("#grade-1").attr("id", grade);
        html.find("#uname-1").attr("id", university_name);
        html.find("#eduname-1").attr("id", eduname);
        html.find("#edu-date-1").attr("id", edudate);
        $(".edu").append(html);
        uname = data[i]['university_name'] + "(GPA: " + data[i]['grade'].toFixed(2) + ")";
        start_year = data[i]['startDate'].split('-');
        end_year = data[i]['endDate'].split('-');
        date = start_year[0] + "-" + end_year[0];
        $(id_degree).text(data[i]['degree']);
        $(id_eduname).text(data[i]['major']);
        $(id_university_name).text(uname);
        $(id_edudate).text(date);
    }



}

$(function(){
    slug = $("div").attr("class");
    url = "/api/resume/" + slug + "/";
    $.get(url, function(data){
        console.log(data);
        name = data['firstname'] + " " + data['lastname'];
        address = data['street']+ " " + data['district'] + " " + data['city'] + " " + data['zipcode'];


       





        $("#name").text(name);
        $("#address").text(address);
        $("#phone").text(data['phone']);
        $("#email").text(data['email']);
        $("#web").text(data['web']);
        $("#objective").text(data['objective']);
        add_sq(data['skill'], "skill");
        add_sq(data['qualification'], "qualification");
        add_edu(data['education']);








    }, "json");
});

$(function(){
    $("#edit").click(function(){
        slug = $("div").attr("class");
        url = "/resume/edit/" + slug + "/";
        $("#edit").attr("href", url);
    });

});

$(function(){
    $("#delete").click(function(){
        slug = $("div").attr("class");
        url = "/api/resume/" + slug + "/";
        $.ajax({
            url: url,
            type:
            "DELETE",
            success: function(response){
                $("#json").fadeOut(1000, function(){
                    $(this).remove();
                });
                $(".success").show();
                setTimeout(function(){
                    window.location.href = "/";
                },3000);
            },
        });
    });

});
