$(document).ready(function(){


var left = '<li><span class="unchecked"></span><p class="active"> ' 
var right = '</p><span class="drag"></span><span class="delete"></span></li>'

$('li').mouseenter(function(){
        ;
        if(down) {
        $(this).find('.rightcontainer').show();  
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


$(document).on("click", "li", function() {

    $(this).find('p').toggleClass('active finished');
    $(this).find('span').toggleClass('unchecked checked');

});



$(document).on("click", ".delete", function(){
    $(this).closest('li').fadeOut(600);
});


function getItem() {
        
        $('#add-items').keydown(function (enter) {
            if (enter.keyCode == 13) {
                postItem();
            }
        });
}

getItem();

function postItem() {

        var item = $('#add-items').val();
        var work = left + item + right;
        $('#sortable').prepend(work);      
}

});

   

var down = false;
$(document).mousedown(function() {
    down = true;
}).mouseup(function() {
    down = false;  
});