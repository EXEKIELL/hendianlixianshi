$(function () {
    $('#btnbar>li').click(function () {
        $(this).addClass('sel');
        $(this).siblings('li').removeClass('sel');
    })
})