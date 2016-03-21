$(document).ready(function(){

$('li').mouseenter(function(){
        ;
        if(down) {
        $(this).find('.rightcontainer.').show();  
    } 
    else {
        $(this).find('.rightcontainer').fadeIn(300);   
    }
    })

    .mouseleave(function() {
  if(down) {
        $(this).find('.rightcontainer.').show();  
    } 
    else {
        $(this).find('.rightcontainer').fadeOut(300);   
    }    })




$("li").click(function() {
    $(this).find('img').toggle();
    $(this).find('p').toggleClass('active finished');
});



$(document).on("click", ".delete", function(){
    $(this).closest('li').fadeOut(600);
});

});

var down = false;
$(document).mousedown(function() {
    down = true;
}).mouseup(function() {
    down = false;  
});