$(function () {
    $('#navtab>li').click(function () {
        $(this).addClass('sel');
        $(this).siblings('li').removeClass('sel');
    })
    $('.page1').find('li').click(function () {
        var index = $(this).index();
        var length = $('.page1').find('li').length;
        if(index != 0 && index != length-1){
            $(this).addClass('disabled');
            $(this).find('a').addClass('sel')
            $(this).siblings('li').removeClass('disabled');
            $(this).siblings('li').find('a').removeClass('sel')
        }else if(index == 0){
            console.log($.inArray("disabled",$(this).siblings('li')))
        }
    })
    $('.del1').prevAll().remove();
    $('.del2').nextAll().remove();
})