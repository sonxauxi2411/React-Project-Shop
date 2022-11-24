import { createSlice } from "@reduxjs/toolkit";
import { saveToLocalStorage } from "../Component/Hook/LocalStorage";

const initialState = {
    user: {},
    users: [{
        name: 'son',
        email: 'gaconbaby111@gmail.com',
        password: '123456789',
        phone: '0935834951'
    }]
}


const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {

            state.user = action.payload
        },
        addUser(state, action) {
            saveToLocalStorage('users', state.users)
            state.users = [...state.users, action.payload]
        }
    }
})

export const usersAction = usersSlice.actions
export default usersSlice