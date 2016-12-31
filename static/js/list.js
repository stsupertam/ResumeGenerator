data = $.get("/api/company/", function(data) {}, "json");

$(function(){
    $.getJSON("/api/company/", function(data){
        if(data.length ==0){
            $("<h1>Item Not Found</h1>").insertBefore(".panel-group")
        }
        $.each(data, function(index){
            target = index+1;
            title = ".panel-title." + target;
            rating = ".detail.rating." + target;
            jobtype = ".detail.jobtype." + target;
            income = ".detail.income." + target;
            startDate = ".detail.startDate." + target;
            endDate = ".detail.endDate." + target;
            description = ".detail.description." + target;
            $(title).text(data[index].name);
            $(rating).text(data[index].rating);
            $(jobtype).text(data[index].jobtype);
            $(income).text(data[index].income);
            $(startDate).text(data[index].startDate);
            $(endDate).text(data[index].endDate);
            $(description).text(data[index].description);
        });
    });








});
