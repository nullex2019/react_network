import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello', likesCount: 15},
                {id: 2, message: 'Hi my friends', likesCount: 13},
                {id: 3, message: 'YoYoYo', likesCount: 44},
                {id: 4, message: 'YoYoYo', likesCount: 13},
                {id: 5, message: 'YoYoYo', likesCount: 4},
            ],
            newPostText: "new post text"

        },
        messagesPage: {
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'What you name?'},
                {id: 4, message: 'Hello'},
                {id: 5, message: 'Hi'},
            ],
            dialogsData: [
                {id: 1, name: 'Vladimir'},
                {id: 2, name: 'Dmitry'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Victor'},
                {id: 5, name: 'Valera'},
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Vladimir',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCTgvnm1LN9iFJSFCK7zHudvF4Ig-MS72Pdl3LRloMCuxJyq2l&usqp=CAU'
                },
                {
                    id: 2,
                    name: 'Dmitry',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQh0u6Wc4SGIXWL_RyJFKxiLhlo__xV5x_yXJiFXSlj4it_0gwq&usqp=CAU'
                },
                {
                    id: 3,
                    name: 'Sasha',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFw_0_ZDK9lB4OlCzKLmYWA0tuTtsFjajAszUYfXvd9PXPVdrR&usqp=CAU'
                },
                {
                    id: 4,
                    name: 'Sergio',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSH1f_Mm8D_4tlXRqV98RuRSjpc0r-QWpJbMUhg9-TLQzU3-tfg&usqp=CAU'
                },
                {
                    id: 5,
                    name: 'Valery',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUbsSDYMBjY9L5tnndhW6YqHJDIo5bUeYGZW5dwLqyhRLlNjlL&usqp=CAU'
                },
                {
                    id: 6,
                    name: 'Masha',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQA0GwnHzc8SJ5qQuo2gHadR6imu9w5lJNaZYiFrKVoReRpcyyy&usqp=CAU'
                },
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}





export default store