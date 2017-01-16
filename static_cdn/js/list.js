$(function(){
    $.getJSON("/api/company/", function(data){
        if(data.length ==0){
            $("<h1>Item Not Found</h1>").insertBefore(".panel-group");
        }
        $.each(data, function(index){
            target = index+1;
            panel = "#panel_" + target; 
            title = ".panel-title." + target;
            rating = ".detail.rating." + target;
            jobtype = ".detail.jobtype." + target;
            income = ".detail.income." + target;
            startDate = ".detail.startDate." + target;
            endDate = ".detail.endDate." + target;
            description = ".detail.description." + target;
            edit = "#edit_" + target;
            remove = "#delete_" + target;
            id_edit_re = "edit_" +data[index].slug;
            id_delete_re = "delete_" +data[index].slug;
            id_panel_re = "panel_" + data[index].slug;
            $(title).text(data[index].name);
            $(rating).text(data[index].rating);
            $(jobtype).text(data[index].jobtype);
            $(income).text(data[index].income);
            $(startDate).text(data[index].startDate);
            $(endDate).text(data[index].endDate);
            $(description).text(data[index].description);
            $(edit).attr("id", id_edit_re);
            $(remove).attr("id", id_delete_re);
            $(panel).attr("id", id_panel_re);
        });
    });
});

$(function(){
    $(".icon").click(function(){
        re = this.id.split("_");
        if(re[0] == "delete"){
            url = "/api/company/" + re[1];
            panel = "#panel_" + re[1];
            $.ajax({
                url: url,
                type:
                "DELETE",
                success: function(response){
                    $(panel).fadeOut(1000, function(){
                        $(this).remove();
                    });
                },
            });
        }
        else{
            a = "/edit/" + re[1]; 
            console.log(a);
            edit = "#edit_" + re[1];
            $(edit).attr("href", a);
        }
    });
});
 
