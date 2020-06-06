const SET_USER_DATA = 'SET_USER_DATA'; //установить пользовательские данные



let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth:false //не залогинен
}


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data, //если пришли данные  isAuth делаем true
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})


export default authReducer;