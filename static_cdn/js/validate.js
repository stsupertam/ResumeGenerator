var data_name = [];
var total_data = 0;
$.get("/api/company/", function(data) {
    for(item in data){
        data_name.push(data[item].name);
    }
    total_data = data_name.length;
}, "json");
 

$("#name").on("input", function(){
    var input = $(this);
    var is_name = input.val();
    var unique = true;
    if(is_name){
        $(".success").hide();
        $(".failure").hide();
        for(i = 0; i<total_data; i++){
            if(is_name == data_name[i]){
                unique = false;
                break;
            }
        }
        if(unique == false){
            input.removeClass("valid").addClass("invalid");
            input.nextAll(".error.name").show();
        }
        else{
            input.removeClass("invalid").addClass("valid");
            input.nextAll(".error.name").hide();
        }
        input.next(".error").hide();
    }
    else{
        input.removeClass("valid").addClass("invalid");
        input.next(".error").show();
    }
});

$("#startDate").on("input", function(){
    var input = $(this);
    var is_name = input.val();
    if(is_name){
        $(".success").hide();
        $(".failure").hide();
        input.removeClass("invalid").addClass("valid");
        input.next(".error").hide();
    }
    else{
        input.removeClass("valid").addClass("invalid");
        input.next(".error").show();
    }
});

$("#endDate").on("input", function(){
    var input = $(this);
    var is_name = input.val();
    if(is_name){
        $(".success").hide();
        $(".failure").hide();
        input.removeClass("invalid").addClass("valid");
        input.next(".error").hide();
    }
    else{
        input.removeClass("valid").addClass("invalid");
        input.next(".error").show();
    }
});

$("#jobtype").on("input", function(){
    var input = $(this);
    var is_name = input.val();
    if(is_name){
        $(".success").hide();
        $(".failure").hide();
        input.removeClass("invalid").addClass("valid");
        input.next(".error").hide();
    }
    else{
        input.removeClass("valid").addClass("invalid");
        input.next(".error").show();
    }
});

$("#rating").on("input", function(){
    var input = $(this);
    var is_rating = input.val();
    if(is_rating){
        $(".success").hide();
        $(".failure").hide();
        if(is_rating>=0 && is_rating<=5){
            input.removeClass("invalid").addClass("valid");
            input.next(".error").hide();
            input.nextAll(".error.rating").hide();
        }
        else{
            input.removeClass("valid").addClass("invalid");
            input.nextAll(".error.rating").show();
        }
    }
    else{
        input.removeClass("valid").addClass("invalid");
        input.next(".error").show();
    }
});

$("#income").on("input", function(){
    var input = $(this);
    var is_name = input.val();
    if(is_name){
        $(".success").hide();
        $(".failure").hide();
        input.removeClass("invalid").addClass("valid");
        input.next(".error").hide();
    }
    else{
        input.removeClass("valid").addClass("invalid");
        input.next(".error").show();
    }
});
