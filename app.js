$(document).ready(function(){


/*
    $('.ui-state-default').mousedown(function(){
     	$('.unchecked').hide();
        $('.checked').show();
    })
    /*

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
