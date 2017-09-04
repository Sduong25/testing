$('.pusheens').hide();

function main() {
    $('.pusheens').fadeIn(1000);
}

$(document).ready(main);
$('.butt').mouseover(function() {
    $(this).animate({boxShadow: '0 0 5px #000'});
});
$('.butt').mouseleave(function() {
    $(this).animate({boxShadow: '0 0 1px #000'});
});
