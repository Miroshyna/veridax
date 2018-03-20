function AjaxFormRequest(result_id,formMain,url) {
    jQuery.ajax({
        url:     url,
        type:     "POST",
        dataType: "html",
        data: jQuery("#"+formMain).serialize(),
        success: function(response) {
            document.getElementById(result_id).innerHTML = response;
        },
        error: function(response) {
            document.getElementById(result_id).innerHTML = "<p>Error</p>";
        }
    });

    $('.email').keypress(function (e) {
        if (e.which == 13) {
            $('formMain').submit();
            return false;
        }
    });

    $(':input','#formMain')
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected');
}

$(document).ready(function() {

    $('.scroll a[href^="#"]').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });

});