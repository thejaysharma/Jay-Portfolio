$(document).on('click', '.navbar-container', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});