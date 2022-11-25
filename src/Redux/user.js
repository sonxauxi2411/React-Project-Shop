import { createSlice } from "@reduxjs/toolkit";
import { saveToLocalStorage } from "../Component/Hook/LocalStrong";

const initialState = {
    user: {},
    users: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser(state, action) {
            state.users = [...state.users, action.payload]
            saveToLocalStorage('userArr', state.users)
        },
        onLogin(state, action) {
            state.user = action.payload
            saveToLocalStorage('user', state.user)
        }
    }


})

export const userAction = userSlice.actions
export default userSlice