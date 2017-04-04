// dane testowe
var username = 'macholl';

var greeting = new Vue({
    el: '#greeting',
    data: {
        nickname: username
    }
});

//dane testowe
var onlineUsersList = [
    {nickname: 'macholl', avatar: 'https://api.adorable.io/avatars/285/macholl.png'},
    {nickname: 'muflon', avatar: 'https://api.adorable.io/avatars/285/muflon.png'},
    {nickname: 'matiko101', avatar: 'https://api.adorable.io/avatars/285/matiko101.png'}
];

var onlineUsers = new Vue({
    el: '#online-users',
    data: {
        onlineUsers: onlineUsersList
    }
});

var signOut = new Vue({
    el: '.panel-list',
    methods: {
        logout: function () {
            window.location = "/logout"
        }
    }
});

