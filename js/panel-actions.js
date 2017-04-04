$('#theme-switcher').change(function() {
    $('body').toggleClass("light");
});


$('#personalize-button').click(function() {
    $('#personalize-content').toggleClass('hidden');
});

$('#send-file').bind("click" , function () {
        $('#send-file-core').click();
});