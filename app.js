$(document).ready(function(){


/*
    $('.ui-state-default').mousedown(function(){
     	$('.unchecked').hide();
        $('.checked').show();
    })
    /*
    .mouseup(function(){
    	$('.ryu-cool').hide();
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
*/



    function getItem() {
        $('#add-items').keydown(function (enter) {
            if (enter.keyCode == 13) {
                postItem();
            }
        });
    }

    getItem();

/*Allows user to delete items*/
$(document).on("click", ".delete", function(){
    $(this).closest('p').fadeOut(300);
});

});
