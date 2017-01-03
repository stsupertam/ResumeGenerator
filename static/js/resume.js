$(function() {
    $(".form-horizontal.1").show();
    $("#page1").click(function(){
        $(".form-horizontal.1").show();
        $(".form-horizontal.2").hide();
        $(".form-horizontal.3").hide();
        $(".form-horizontal.4").hide();
    });
    $("#page2").click(function(){
        $(".form-horizontal.2").show();
        $(".form-horizontal.1").hide();
        $(".form-horizontal.3").hide();
        $(".form-horizontal.4").hide();
    });
    $("#page3").click(function(){
        $(".form-horizontal.3").show();
        $(".form-horizontal.1").hide();
        $(".form-horizontal.2").hide();
        $(".form-horizontal.4").hide();
    });
    $("#page4").click(function(){
        $(".form-horizontal.4").show();
        $(".form-horizontal.1").hide();
        $(".form-horizontal.2").hide();
        $(".form-horizontal.3").hide();
    });
});

