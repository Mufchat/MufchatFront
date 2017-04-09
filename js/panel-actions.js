$('#theme-switcher').change(function() {
    $('body').toggleClass("light");
});


$('#personalize-button').click(function() {
    $('#personalize-content').toggleClass('hidden');
});

$('#send-file').bind("click" , function () {
    $('#send-file-core').click();
});

$('#chat-input-submit').click(function(){
    sendMessage();
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
    $('html, body').scrollTop( $(document).height() - $(window).height() );
}