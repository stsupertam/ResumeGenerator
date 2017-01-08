function send_get(slug){
    url = "/api/resume/get_slug";
    console.log(slug);
    check = false;
    $.ajaxSetup({async:false});
    $.get(url, function(data){
        for(i=0; i<data['list'].length; i++){
            console.log(data['list'][i]);
            if(data['list'][i] == slug)
                check = true;
        }
    }, "json");
    return check;
}


$(function(){
    $("#search-function").click("input", function(){
        var input = $("#search").val();
        if(input){
            input = input.split(' ');
            if(input.length == 2){
                $(".error").hide();
                var slug = input[0].toLowerCase() + "-" + input[1].toLowerCase();
                var url = "/resume/view/" + slug + "/";
                check_item = send_get(slug);
                console.log(check_item);
                if(check_item)
                    $(".search").attr("href", url);
            }
            else{
                $(".error").show();
            }
        }
    });
});
