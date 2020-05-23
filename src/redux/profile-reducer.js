const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let initialState = {
    posts: [
        {id: 1, message: 'Hello', likesCount: 15},
        {id: 2, message: 'Hi my friends', likesCount: 13},
        {id: 3, message: 'YoYoYo', likesCount: 44},
        {id: 4, message: 'YoYoYo', likesCount: 13},
        {id: 5, message: 'YoYoYo', likesCount: 4},
    ],
    newPostText: "new post text"

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: Math.floor(Math.random() * 100)
            }
            state.posts.push(newPost)
            state.newPostText = '';/*Зануление*/
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
    }
    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;