import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "225c838c-fc40-4ad6-a1f3-3843b2819080"
    }

})

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(useId) {
        return instance.post(`follow/${useId}`)
    },
    unfollow(useId) {
        return instance.delete(`follow/${useId}`)
    },
}



