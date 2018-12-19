$(document).ready(function() {
    
    $('#accordeon .head').on('click', f_acc);
});
 
function f_acc(){

  $('#accordeon .body1').not($(this).next()).slideUp(1000);

    $(this).next().slideToggle(2000);
}




