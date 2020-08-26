import renderEntireDom from "../../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, text: 'Hi i am learning React now', likeCount: 14},
            {id: 2, text: 'Now i learned Props', likeCount: 16},
            {id: 3, text: 'Whats next?', likeCount: 15},
            {id: 3, text: 'Whats next?', likeCount: 15},
            {id: 2, text: 'Now i learned Props', likeCount: 16},
        ],
        newPostText: '',
        addPost: () => {
            let post = {
                id: (state.profilePage.posts.length) + 1,
                text: state.profilePage.newPostText,
                likeCount: 0
            }
            state.profilePage.posts.push(post);
            renderEntireDom(state);
            state.profilePage.newPostText = '';
        },
        updatePostText: text => {
            state.profilePage.newPostText = text;
            renderEntireDom(state);
        }
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Artem', src: 'https://html.crumina.net/html-olympus/img/author-main1.jpg'},
            {id: 2, name: 'Vita', src: 'https://html.crumina.net/html-olympus/img/author-main1.jpg'},
            {id: 3, name: 'Olena', src: 'https://html.crumina.net/html-olympus/img/author-main1.jpg'},
            {id: 4, name: 'Oleksandr', src: 'https://html.crumina.net/html-olympus/img/author-main1.jpg'},
            {id: 5, name: 'Dmutro', src: 'https://html.crumina.net/html-olympus/img/author-main1.jpg'},
        ],
        messages: [
            {id: 1, text: 'Lorem ipsum dolor.', isOwn: true},
            {id: 2, text: 'Lorem ipsum dolor. adad', isOwn: false},
            {id: 3, text: 'Lorem ipsum dolor. asdasd', isOwn: true},
            {id: 4, text: 'Lorem ipsum dolor. ashfhhjs', isOwn: true},
            {id: 5, text: 'Lorem ipsum dolor. asdfhskj lorem lorem lore lorem lorem', isOwn: false}
        ]
    },
    sidebar: {
        onlineFriends: [
            {id: 1, avatar: 'https://www.colesclassroom.com/wp-content/uploads/2018/12/girl-people-landscape-sun-38554.jpeg', status: 'busy'},
            {id: 2, avatar: 'https://www.colesclassroom.com/wp-content/uploads/2018/12/girl-people-landscape-sun-38554.jpeg', status: 'busy'},
            {id: 3, avatar: 'https://www.demilked.com/magazine/wp-content/uploads/2019/04/5cb045454cdf7-French-artist-combines-the-images-of-two-celebrities-in-one-and-the-result-is-perfect-5cad946b448c3__880.jpg', status: 'afk'},
            {id: 4, avatar: 'https://www.photofabian.com/en/portraitpeople/portraits_colour/files/pressefoto.jpg', status: 'online'},
            {id: 5, avatar: 'https://www.photofabian.com/en/portraitpeople/portraits_colour/files/pressefoto.jpg', status: 'online'},
            {id: 6, avatar: 'https://www.demilked.com/magazine/wp-content/uploads/2019/04/5cb045454cdf7-French-artist-combines-the-images-of-two-celebrities-in-one-and-the-result-is-perfect-5cad946b448c3__880.jpg', status: 'afk'},
        ]
    }
};

export default state;