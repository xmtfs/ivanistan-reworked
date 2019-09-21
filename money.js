$(document).ready(function(){
    /* This code is executed after the DOM has been completely loaded */

    $('#download-button a').click(function(){
        var countSpan = $(this).closest('li').find('.download-count');
        countSpan.text( parseInt(countSpan.text(), 10) + 1);
    }); 
})
