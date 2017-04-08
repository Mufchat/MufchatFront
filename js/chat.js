// dane testowe
var my_axios = axios.create({
    baseURL: 'http://localhost:8080',
});
Vue.prototype.$http = my_axios;

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
        onlineUsers: []
    },
    created(){
        // this.$http.get('/chat/onlineUsers').then(response => this.onlineUsers = response.data) - nie ma security
        this.onlineUsers = onlineUsersList;
    }
});

var chatWindow = new Vue({
    el: '#chat-window',
    data: {
        messages: []
    },
    created(){
        this.$http.get('/chat/messages').then(response => this.messages = response.data)
    }
});

var signOut = new Vue({
    el: '.panel-list',
    methods: {
        logout: function () {
            // axios.get('http://localhost:8080/logout') - nie ma security
        }
    }
});


