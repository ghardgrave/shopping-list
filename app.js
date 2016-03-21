$(document).ready(function(){

$('li').mouseenter(function(){
        $(this).find('.rightcontainer').fadeIn(300);
    })

    .mouseleave(function() {
        $(this).find('.rightcontainer').fadeOut(300);


    })

$("li").click(function() {
    $(this).find('img').toggle();
    $(this).find('p').toggleClass('active finished');
});



$(document).on("click", ".delete", function(){
    $(this).closest('li').fadeOut(600);
});

});

