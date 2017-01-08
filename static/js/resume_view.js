$(function(){
    slug = $("div").attr("class");
    url = "/api/resume/" + slug + "/";
    $.get(url, function(data){
        document.getElementById("json").innerHTML = JSON.stringify(data, undefined, 2);
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
