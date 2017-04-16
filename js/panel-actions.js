$(document).ready(function(){
    toggleStyles();
    $(document).on('swiperight',function(){
        $('#panel').addClass('active-panel');
        $('#mobile-menu-toggle').addClass('mobile-menu-close');
    });
    $(document).on('swipeleft',function(){
        $('#panel').removeClass('active-panel'); 
        $('#mobile-menu-toggle').removeClass('mobile-menu-close');
    });
});

$('#theme-switcher').change(function() {
    toggleStyles();
});


$('#personalize-button').click(function() {
    $('#personalize-content').toggleClass('hidden');
});

$('#send-file').bind("click" , function () {
    $('#send-file-core').click();
});

$('#submit-message').click(function(){
    sendMessage();
    document.getElementById('chat-input').focus();
});

$('#mobile-menu-toggle').click(function() {
    $('#panel').toggleClass('active-panel');
    $(this).toggleClass('mobile-menu-close');
});

$(function () {
    $("#chat-input").on("keypress", function (event) {
        if (event.which === 13 && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    });
})

function sendMessage() {
    var msgContent = document.getElementById('chat-input').value;
    $('#chat-window').append("<div class='message-box sendby-user'><img src='https://api.adorable.io/avatars/150/Macholl.png'><div class='details'><span class='author'>Macholl</span> @ <span class='date'>20:16</span></div><div class='message'>"+String(msgContent)+"</div><div style='clear: both;'></div></div>");
    document.getElementById('chat-input').value = "";
    jumpToPageBottom();
}

function jumpToPageBottom() {
    $('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, 100);
}

function toggleStyles() {
    if(document.getElementById('theme-checkbox').checked) {
        $('#light-theme').prop('disabled', true);
    } else {
        $('#light-theme').prop('disabled', false);
    }
};