function add_sq(data, type){
    class_target = ".sq-" + type; 
    for(i=0 ; i<data.length; i++){
        p = "<p>" + data[i] + "</p>";
        $(class_target).append(p);
    }
}

function add_edu_exp(data, type){
    for(i=0; i<data.length; i++){
        clone_target = "." + type + "-0";
        append_target = "." + type;
        var html = $(clone_target).clone(true, true);
        for(item in data[i]){
            if(item != "endDate" && item != "startDate"){
                id = item + "-" + (i+1);
                target = "#" + item + "-" + (i+1);
                origin = "#" + item + "-" + 0;
                type_class = type + "-" + (i+1);
                html.attr("class", type_class);
                html.find(origin).attr("id", id);
                html.find(target).text(data[i][item]);
            }
        }
        start_year = data[i]['startDate'].split('-');
        end_year = data[i]['endDate'].split('-');
        date = start_year[0] + "-" + end_year[0];
        date_target = "#" + type + "-date-" + (i+1); 
        type_date_id = type + "-date-" + (i+1);
        type_date_origin = "#" + type + "-date-" + 0;
        html.find(type_date_origin).attr("id", type_date_id);
        html.find(date_target).text(date);
        if(type == "edu")
            $(append_target).append(html);
        else{
            for(j=0; j<data[i]['joblist'].length; j++){
                p = "<p class='joblist'>" + data[i]['joblist'][j] + "</p>";
                exp = ".exp-" + i;
                html.append(p);
            }
            $(append_target).append(html);
        }
    }
}

$(function(){
    slug = $("div").attr("class");
    url = "/api/resume/" + slug + "/";
    $.get(url, function(data){
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
        add_edu_exp(data['education'], "edu");
        add_edu_exp(data['experience'], "exp");
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
    $("#pdf").click(function(){
        var html = $(".a4").clone();
        html =  String(html.prop('outerHTML'));
        data = {};
        data['html'] = html;
        console.log(data['html'])
        if(typeof data['html'] === 'string')
            alert("FUCK UUUUU")
        Cookies.set('pdfcookie', html, 1);
        var x = Cookies.get('pdfcookie')
        for(i in x)
            console.log(i['name'])
        slug = $("div").attr("class");
        url = "/resume/pdf-test/";
        //$("#pdf").attr("href", url);
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
