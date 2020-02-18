$(function() {
    $(".flecha").css("display", "block");
    $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
            $("#flecha").fadeIn("slow");
        } else {
            $("#flecha").fadeOut("slow");
        }
    });
})