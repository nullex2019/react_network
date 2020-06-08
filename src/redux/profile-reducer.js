import {userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";


let initialState = {
    posts: [
        {id: 1, message: 'Hello', likesCount: 15},
        {id: 2, message: 'Hi my friends', likesCount: 13},
        {id: 3, message: 'YoYoYo', likesCount: 44},
        {id: 4, message: 'YoYoYo', likesCount: 13},
        {id: 5, message: 'YoYoYo', likesCount: 4},
    ],
    newPostText: "new post text",
    profile: null

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: Math.floor(Math.random() * 100)
            }
            return  {...state,
                posts: [...state.posts,newPost],//добавляем в массив newPost
                newPostText:''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})



/////////////////thunk ////////////////

export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        userAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })
    }
}


export default profileReducer;