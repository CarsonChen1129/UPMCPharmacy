$(document).ready(function(){
    $('.accordion-toggle').click(function(){
        var currValue = $(this).parent().attr('aria-expanded');
        if(currValue == 'true'){
            currValue = 'false';
        }else{
            currValue = 'true';
        }
        $(this).parent().attr('aria-expanded', currValue);
        var hideValue = $(this).next().attr('aria-hidden');
        if(hideValue == 'true') {
            hideValue = 'false';
        } else {
            hideValue = 'true';
        }
        $(this).next().attr("aria-hidden",hideValue);
    });
});