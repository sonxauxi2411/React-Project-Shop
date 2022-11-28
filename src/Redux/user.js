import { createSlice } from '@reduxjs/toolkit'
import {
  removeTolocalStorage,
  saveToLocalStorage,
} from '../Component/Hook/LocalStrong'

const initialState = {
  user: {},
  users: [],
  isValidUser: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUsersArr(state, action) {
      state.users = [...state.users, action.payload]
      saveToLocalStorage('userArr', state.users)
    },

    onLogin(state, action) {
      state.isValidUser = true
      state.user = action.payload

      saveToLocalStorage('user', state.user)
    },
    onLogout(state) {
      state.isValidUser = false
      removeTolocalStorage('user')
    },
  },
})

export const userAction = userSlice.actions
export default userSlice
