$(document).ready(function () {
    $(window).on("scroll",function(){
        var scroll = $(window).scrollTop();
        var headHeight = $("header").height();
        if(scroll >= headHeight){
            $(".nav-bar").addClass('sticky');
            $(".hide-imgs").removeClass('hide');
        }else {
            $(".nav-bar").removeClass('sticky');
            $(".hide-imgs").addClass('hide');
        }
    });
});

