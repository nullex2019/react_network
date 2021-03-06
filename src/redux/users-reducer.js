import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
const TOOGLE_IS_FOLLOWING_PROGRESS = "TOOGLE_IS_FOLLOWING_PROGRESS";


let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1, //текущая страница сервака
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOOGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOOGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)

            }
        }
        default:
            return state
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users}) //Берем юзеров из сервака и перезатираем старый стейт с юзерами
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage}) //Берем юзеров из сервака
export const setTotalUserCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount}) //Установить общее количество пользователей
export const toogleIsFetching = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching}) //preloader true or false
export const toogleFollowingProgress = (isFetching, userId) => ({
    type: TOOGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

/////////////////thunk ////////////////

export const getUserThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toogleIsFetching(true));
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toogleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUserCount(data.totalCount));
        })
    }
}
export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toogleFollowingProgress(true,userId))
        userAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(follow(userId))
                }
                dispatch(toogleFollowingProgress(false, userId))
            })
    }
}
export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toogleFollowingProgress(true,userId))
        userAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(toogleFollowingProgress(false, userId))
            })
    }
}


export default usersReducer;