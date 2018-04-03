$(function () {
    $('.list1 ul>li').click(function () {
        $(this).addClass('sel');
        $(this).siblings('li').removeClass('sel');
    })
    $('.row1>div').click(function () {
        $(this).addClass('sel');
        $(this).siblings('div').removeClass('sel');
        $(this).parent('.row1').siblings('div').find('div').removeClass('sel')
    })
})