import { LOGIN, LOGOUT } from "./action";

const init = {isLoggedIn: false}

export const authReducer = (store = init, {type, payload}) => {
    switch(type){
        case LOGIN:
            return{...store, isLoggedIn: payload}
        case LOGOUT:
            return{...store, isLoggedIn: payload}
        default:
            return store;
    }
}