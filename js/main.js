
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>70){
            $('.navbar').addClass('solid bg-dark');
        }else{
            $('.navbar').removeClass('solid bg-dark');
        }
    })
})